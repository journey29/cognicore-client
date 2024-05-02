"use client"

import { useState } from "react"

import { Image as ImageIcon } from "lucide-react"

import { useProfile } from "@/hooks/useProfile"

import { ChatImage } from "@/types"

import { Heading } from "../_components/Heading"

import { ImageMessage } from "./_components/ImageMessage"
import { ImagesPrompt } from "./_components/ImagesPrompt"

const ImagesPage = () => {
  const { data } = useProfile()
  const [messages, setMessages] = useState<ChatImage[]>([])

  return (
    <>
      <Heading
        title="Image Generation"
        description="Generate images and enjoy the process!"
        icon={ImageIcon}
        iconColor="text-red-500"
      />

      <div className="space-y-4 px-5">
        <ImagesPrompt
          messages={messages}
          setMessages={setMessages}
        />
        <div className="flex flex-col gap-3 py-4">
          {messages.map((message, i) => (
            <ImageMessage
              key={Math.floor(Math.random() * 100000)}
              message={message?.prompt}
              name={message.role === "user" ? data?.name : "Congnicore"}
              role={message.role}
              url={message?.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ImagesPage
