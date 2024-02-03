import "@/styles/globals.css"
import {Metadata} from "next"

import {siteConfig} from "@/config/site"
import {fontSans} from "@/lib/fonts"
import {cn} from "@/lib/utils"
import {SiteHeader} from "@/components/site-header"
import {TailwindIndicator} from "@/components/tailwind-indicator"
import {ThemeProvider} from "@/components/theme-provider"
import {Toaster} from "@/components/ui/toaster";
import {BackendUrlProvider} from "@/context/BackendUrlContext";
import {SocketProvider} from "@/context/SocketContext";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <>
      <html lang="zh-CN" suppressHydrationWarning>
      <Head>
        <title>糟糕，我被钓鱼佬包围了</title>
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <BackendUrlProvider>
          <SocketProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader/>
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator/>
            <Toaster/>
          </SocketProvider>
        </BackendUrlProvider>
      </ThemeProvider>
      </body>
      </html>
    </>
  )
}
