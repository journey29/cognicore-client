import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { QueryProvider } from "@/components/Providers"

import { cn } from "@/lib/utils"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Cognicore",
  description: "Generate your ideas in seconds"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
