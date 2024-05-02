import Image from "next/image"

import { ChatRole } from "@/types"

import { ChatAvatar } from "../../_components/chat/ChatAvatar"

export const ImageMessage = ({
  message,
  role,
  name,
  url
}: {
  message?: string
  role: ChatRole
  name?: string
  url?: string
}) => {
  return (
    <div className="flex items-start gap-3 rounded-md bg-secondary p-5">
      <ChatAvatar
        name={name ?? "G"}
        role={role}
      />
      {url ? (
        <Image
          className="h-48 w-48 rounded-md"
          src={url}
          alt="image"
          width={1024}
          height={1024}
          loading="lazy"
        />
      ) : (
        <p className="text-md">{message}</p>
      )}
    </div>
  )
}
