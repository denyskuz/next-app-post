import type { Metadata } from "next"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"
const ToggleThemeBtn = dynamic(() => import("@/components/ToggleThemeBtn"), {
  ssr: false,
})
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "posts app",
  description: "test description",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white dark:bg-gray-900">
        <header className="bg-white">
          <ToggleThemeBtn />
        </header>
        {children}
      </body>
    </html>
  )
}
