import Cookie from "js-cookie"

import { Tokens } from "@/types"

export const getAccessToken = () => {
  const accessToken = Cookie.get(Tokens.ACCESSTOKEN)

  return accessToken
}

export const saveTokenStorage = (accessToken: string) => {
  Cookie.set(Tokens.ACCESSTOKEN, accessToken, {
    domain: "localhost",
    expires: 2,
    sameSite: "strict"
  })
}

export const removeTokenStorage = () => {
  Cookie.remove(Tokens.ACCESSTOKEN)
}
