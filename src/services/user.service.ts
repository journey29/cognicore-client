import { User } from "@/types"

import { axiosWithAuth } from "@/app/api/interceptors"

export const userService = {
  async getProfile() {
    const response = await axiosWithAuth.get<User>("user/profile")

    return response.data
  }
}
