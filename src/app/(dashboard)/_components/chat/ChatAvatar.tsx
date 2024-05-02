import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { cn } from "@/lib/utils"

import { ChatRole } from "@/types"

export const ChatAvatar = ({
  image,
  name,
  role
}: {
  image?: string
  name: string
  role: ChatRole
}) => {
  return (
    <Avatar className="h-10 w-10 rounded-full">
      <AvatarImage
        src={image}
        alt="avatar"
      />
      <AvatarFallback
        className={cn("bg-primary text-black", {
          "bg-gradient-to-r from-darkOrange via-darkPink to-darkPurple text-white":
            role !== ChatRole.User
        })}
      >
        {name.charAt(0) || "A"}
      </AvatarFallback>
    </Avatar>
  )
}
