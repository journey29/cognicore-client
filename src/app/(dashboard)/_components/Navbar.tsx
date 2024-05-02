"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { routes } from "@/constants/routes"

export const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav>
      <ul className="flex flex-col gap-1">
        {routes.map(route => (
          <li key={route.href}>
            <Link href={route.href}>
              <div
                className={cn(
                  "flex items-center gap-2 rounded-md p-3 transition-all hover:bg-primary hover:text-black",
                  {
                    "bg-primary text-black": route.href === pathName
                  }
                )}
              >
                <route.icon className={cn("h-4 w-4", route.color)} />
                <p className="text-sm font-medium">{route.label}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
