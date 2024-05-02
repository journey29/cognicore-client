export type UserAuth = {
  name?: string
  email: string
  password: string
}

export type User = {
  id: string
  name?: string
  email: string
  password: string
  emailVerified?: string
}

export type ChatMessage = {
  content: string
  role: ChatRole
}

export type ChatImage = {
  prompt?: string
  url?: string
  role: ChatRole
}

export enum Tokens {
  ACCESSTOKEN = "accessToken",
  REFRESHTOKEN = "refreshToken"
}

export enum ChatRole {
  User = "user",
  System = "system",
  Assistant = "assistant"
}
