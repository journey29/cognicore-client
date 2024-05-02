import { MessageCircleOff } from "lucide-react"

export const Empty = () => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-md bg-secondary p-5 sm:py-7">
      <MessageCircleOff className="h-5 w-5 sm:h-7 sm:w-7" />
      <p className="text-xl font-semibold sm:text-2xl">Empty</p>
    </div>
  )
}
