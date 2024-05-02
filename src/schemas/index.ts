import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8)
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

export const PromptSchema = z.object({
  prompt: z.string().min(1)
})

export type PromptSchemaType = z.infer<typeof PromptSchema>
