'use client'
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className={"container flex items-center space-x-2"}>
          <Avatar>
            <AvatarImage src={"https://innox24-1255632674.cos.ap-guangzhou.myqcloud.com/innox_logo.svg"}></AvatarImage>
            <AvatarFallback>Innox</AvatarFallback>
          </Avatar>
          <MainNav items={siteConfig.mainNav} />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
