import { ChatRole } from "@/types"

import { ChatAvatar } from "../../_components/chat/ChatAvatar"

export const ConversationMessage = ({
  message,
  role,
  name
}: {
  message: string
  role: ChatRole
  name?: string
}) => {
  return (
    <div className="flex items-start gap-3 rounded-md bg-secondary p-5">
      <ChatAvatar
        name={name ?? "G"}
        role={role}
      />
      <p className="text-md">{message}</p>
    </div>
  )
}
