import type React from "react"
import type { Metadata } from "next"
import { Inter, Lexend, Great_Vibes, Festive } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" })
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})
const festive = Festive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-festive",
})

export const metadata: Metadata = {
  title: "Platter Shlatter - Handmade Platters from Lahore",
  description:
    "Curated bites for every occasion—made with love. Handmade platters by Zainab Abdullah and Abdullah Asim.",
  keywords: "handmade platters, Lahore, food platters, catering, Instagram food",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} ${greatVibes.variable} ${festive.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
