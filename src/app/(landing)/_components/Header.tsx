"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"

import { getAccessToken } from "@/services/auth-token.service"

import { SignOutButton } from "./SignOutButton"

export const Header = () => {
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    const token = getAccessToken()

    if (token) {
      setAccessToken(token)
    }
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 bg-background p-4 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-2">
        <Link
          className="text-xl font-bold"
          href="/"
        >
          Cognicore
        </Link>
        {accessToken ? (
          <SignOutButton />
        ) : (
          <Button asChild>
            <Link href="/auth/login">Sign in</Link>
          </Button>
        )}
      </Container>
    </header>
  )
}
