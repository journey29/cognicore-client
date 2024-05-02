import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type HeadingProps = {
  title: string
  description: string
  icon: LucideIcon
  iconColor: string
  bgColor?: string
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor
}: HeadingProps) => {
  return (
    <div
      className={cn("flex justify-end border-b p-5 sm:justify-normal", bgColor)}
    >
      <div className="flex gap-2 text-end sm:text-start">
        <Icon
          className={cn("order-1 mt-1 h-6 w-6 sm:-order-1", iconColor)}
          strokeWidth={1.5}
        />
        <div className="w-full max-w-sm break-words">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
