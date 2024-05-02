import { ChatImage, ChatMessage } from "@/types"

import { axiosWithAuth } from "@/app/api/interceptors"

export const aiService = {
  async conversation(messages: ChatMessage[]) {
    const response = await axiosWithAuth.post<ChatMessage>(
      "ai/conversation",
      messages
    )

    return response?.data
  },

  async code(messages: ChatMessage[]) {
    const response = await axiosWithAuth.post<ChatMessage>("ai/code", messages)

    return response?.data
  },

  async images(prompt: string) {
    const response = await axiosWithAuth.post<ChatImage>("ai/images", {
      prompt
    })

    return response?.data
  }
}
