"use client"

import { useState } from "react"

import { Code } from "lucide-react"

import { useProfile } from "@/hooks/useProfile"

import { ChatMessage } from "@/types"

import { CodeMessage } from "./_components/CodeMessage"
import { CodePrompt } from "./_components/CodePrompt"
import { Heading } from "@/app/(dashboard)/_components/Heading"

const CodePage = () => {
  const { data } = useProfile()
  const [messages, setMessages] = useState<ChatMessage[]>([])

  return (
    <>
      <Heading
        title="Code generation"
        description="Generate code and enjoy the process!"
        icon={Code}
        iconColor="text-blue-500"
      />

      <div className="space-y-4 px-5">
        <CodePrompt
          messages={messages}
          setMessages={setMessages}
        />
        <div className="flex flex-col gap-3 py-4">
          {messages.map((message, i) => (
            <CodeMessage
              key={Math.floor(Math.random() * 100000)}
              name={message.role === "user" ? data?.name : "Cognicore"}
              message={message.content}
              role={message.role}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default CodePage
