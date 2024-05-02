import { UserAuth } from "@/types"

import { removeTokenStorage, saveTokenStorage } from "./auth-token.service"
import { axiosDefault, axiosWithAuth } from "@/app/api/interceptors"

export const authService = {
  async main(type: "login" | "register", data: UserAuth) {
    const response = await axiosDefault.post(`auth/${type}`, data)

    if (response) saveTokenStorage(response.data.accessToken)

    return response
  },

  async logout() {
    const response = await axiosWithAuth.post("auth/logout")

    if (response) removeTokenStorage()

    return response
  },

  async getNewTokens() {
    const response = await axiosWithAuth.post("auth/access-token")

    if (response) saveTokenStorage(response.data.accessToken)

    return response
  }
}
