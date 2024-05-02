import { Menu, Sheet as SheetIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import Sidebar from "./Sidebar"

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="px-3 sm:hidden"
          variant={"custom"}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[300px] p-0"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
