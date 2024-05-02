"use client"

import Link from "next/link"
import TypeWriterText from "typewriter-effect"

import { Button } from "@/components/ui/button"

export const LandingHero = () => {
  return (
    <div className="text-center">
      <div className="w-full max-w-md space-y-3">
        <div className="text-3xl font-bold sm:text-4xl">
          <h1 className="">The best AI tool for</h1>
          <div className="bg-gradient-to-r from-darkPurple via-darkPink to-darkOrange bg-clip-text text-transparent">
            <TypeWriterText
              options={{
                strings: [
                  "Text Generation",
                  "Code Generation",
                  "Image Generation"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>
        </div>
        <p className="text-xs text-gray-500">
          Get started today and unleash your creativity with Cognicore
        </p>
        <Button
          variant={"custom"}
          asChild
        >
          <Link href="/dashboard">Try our service for Free</Link>
        </Button>
      </div>
    </div>
  )
}
