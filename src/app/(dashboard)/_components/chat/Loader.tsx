import { Loader2 } from "lucide-react"

export const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-md bg-secondary p-5 sm:py-7">
      <Loader2 className="animate-spin" />
      <p>Cognicore magically finds the answer...</p>
    </div>
  )
}
