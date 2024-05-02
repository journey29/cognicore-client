import axios, { CreateAxiosDefaults } from "axios"

import {
  getAccessToken,
  removeTokenStorage
} from "@/services/auth-token.service"
import { authService } from "@/services/auth.service"

import { errorCatch } from "./error"

const BASE_URL = "https://cognicore-backend.vercel.app"

const options: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
}

export const axiosDefault = axios.create(options)
export const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        await authService.getNewTokens()
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === "jwt expired") removeTokenStorage()
      }
    }

    throw error
  }
)
