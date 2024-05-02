import { ChatRole } from "@/types"

import { ChatAvatar } from "../../_components/chat/ChatAvatar"

import { CodeMarkdown } from "./CodeMarkdown"

export const CodeMessage = ({
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
        name={name ?? "Guest"}
        role={role}
      />
      <CodeMarkdown message={message} />
    </div>
  )
}
