import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/Container"

import { cn } from "@/lib/utils"

import { routes } from "@/constants/routes"

const DashboardPage = () => {
  return (
    <div className="py-10">
      <Container className="flex max-w-2xl flex-col items-center gap-8">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Welcome to Cognicore
          </h1>
          <p className="text-[10px] sm:text-xs">
            Introducing Cognicore, the ultimate cognitive toolkit for seamless
            creativity. With its groundbreaking AI-powered capabilities,
            Cognicore empowers users to generate text, code, and stunning
            visuals in mere seconds. Whether crafting compelling narratives,
            developing intricate algorithms, or designing captivating imagery,
            Cognicore revolutionizes the creative process, unlocking boundless
            potential with every click.
          </p>
        </div>
        <Router />
      </Container>
    </div>
  )
}

export default DashboardPage

const Router = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      {routes.map(route => (
        <Link
          href={route.href}
          key={route.href}
        >
          <div className="flex w-full items-center justify-between rounded-md bg-secondary p-4 transition-all hover:bg-primary hover:text-black">
            <div className="flex items-center gap-2.5">
              <route.icon className={cn("h-5 w-5", route.color)} />
              <p className="sm:text-md text-sm font-normal sm:font-medium">
                {" "}
                {route.label}
              </p>
            </div>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      ))}
    </div>
  )
}
