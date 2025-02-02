import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AISearch } from "@/components/ai-search"
import { TopBar } from "@/components/top-bar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CartProvider } from "@/contexts/CartContext"
import { CurrencyProvider } from "@/contexts/CurrencyContext"
import { AdBanner } from "@/components/ad-banner"
import { Chatbot } from "@/components/chatbot"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "HNW Health & Wealth Club",
  description: "Your trusted partner in healthcare and wealth management",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="font-poppins">
        <CurrencyProvider>
          <CartProvider>
            <TopBar />
            <Header />
            <div className="mb-8">
              <AdBanner currentRoute="/events" />
            </div>
            <main className="relative z-20">{children}</main>
            <Footer />
            <AISearch />
            <WhatsAppFloat />
            <Chatbot />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  )
}

