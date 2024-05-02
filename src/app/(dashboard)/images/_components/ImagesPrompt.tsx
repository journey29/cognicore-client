"use client"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { aiService } from "@/services/ai.service"

import { PromptSchema, PromptSchemaType } from "@/schemas/index"

import { ChatImage, ChatRole } from "@/types"

import { ChatError } from "@/app/(dashboard)/_components/chat/ChatError"
import { Empty } from "@/app/(dashboard)/_components/chat/Empty"
import { Loader } from "@/app/(dashboard)/_components/chat/Loader"

export const ImagesPrompt = ({
  messages,
  setMessages
}: {
  messages: ChatImage[]
  setMessages: (messages: ChatImage[] | any) => void
}) => {
  const form = useForm<PromptSchemaType>({
    defaultValues: {
      prompt: ""
    },
    resolver: zodResolver(PromptSchema)
  })

  const { isPending, mutateAsync, error } = useMutation({
    mutationKey: ["images"],
    mutationFn: (prompt: string) => aiService.images(prompt),
    onSuccess: () => {
      form.reset()
    }
  })

  const handleSubmit = async (values: PromptSchemaType) => {
    const userMessage: ChatImage = {
      role: ChatRole.User,
      prompt: values.prompt
    }

    await mutateAsync(values.prompt).then(data => {
      setMessages((prevMessages: ChatImage[]) => [
        userMessage,
        data,
        ...prevMessages
      ])
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-3 rounded-md border px-2 py-3"
        >
          <FormField
            name="prompt"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Your prompt"
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
      {isPending && <Loader />}
      {!messages.length && !isPending && <Empty />}
      {error?.message && <ChatError error={error.message} />}
    </>
  )
}
