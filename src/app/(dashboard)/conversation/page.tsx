"use client"

import { useState } from "react"

import { MessageCircle } from "lucide-react"

import { useProfile } from "@/hooks/useProfile"

import { ChatMessage } from "@/types"

import { ConversationMessage } from "./_components/ConversationMessage"
import { ConversationPrompt } from "./_components/ConversationPrompt"
import { Heading } from "@/app/(dashboard)/_components/Heading"

const ConversationPage = () => {
  const { data } = useProfile()
  const [messages, setMessages] = useState<ChatMessage[]>([])

  return (
    <>
      <Heading
        title="Conversation"
        description="Generate questions and enjoy the process!"
        icon={MessageCircle}
        iconColor="text-orange-500"
      />

      <div className="space-y-4 px-5">
        <ConversationPrompt
          messages={messages}
          setMessages={setMessages}
        />
        <div className="flex flex-col gap-3 py-4">
          {messages.map((message, i) => (
            <ConversationMessage
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

export default ConversationPage
