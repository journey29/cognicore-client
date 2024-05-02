import { Code, Image, LayoutDashboard, MessageCircle } from "lucide-react"

export const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-green-700"
  },
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageCircle,
    color: "text-orange-700"
  },
  {
    label: "Image Generation",
    href: "/images",
    icon: Image,
    color: "text-red-700"
  },
  {
    label: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-blue-700"
  }
]
