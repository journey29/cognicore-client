import Link from "next/link"

import { Navbar } from "./Navbar"

export const Sidebar = () => {
  return (
    <div className="w-full space-y-4 p-5 sm:bg-secondary">
      <div className="bg-gradient-to-r from-darkOrange via-darkPink to-darkPurple bg-clip-text  text-transparent">
        <Link
          className="pl-3 text-lg font-bold"
          href="/"
        >
          Cognicore
        </Link>
      </div>
      <Navbar />
    </div>
  )
}

export default Sidebar
