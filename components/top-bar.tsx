"use client"

import { Phone, MessageCircle, ShoppingCart, Search } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { CurrencySelector } from "@/components/currency-selector"

export function TopBar() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=919667660773&text=Hi%20HNW.one%2C%20I%20need%20assistance"
  const { items } = useCart()

  return (
    <div className="bg-[#0F0052] text-white py-1 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <div className="flex justify-between items-center text-sm flex-wrap gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>Helpline: +91 9667660773</span>
            </div>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary-foreground/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
          <div className="flex-1 px-4 max-w-3xl mx-auto">
            <div className="w-full relative">
              <SearchBar />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CurrencySelector />
            <Link href="/cart" className="flex items-center hover:text-primary-foreground/80 transition-colors">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>HNW Cart ({items.length})</span>
            </Link>
            <Button asChild className="bg-orange-500 text-[#0F0052] hover:bg-orange-600 transition-colors">
              <Link href="/partners/join">Join Our Network</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 h-1.5 absolute bottom-0 left-0 right-0"></div>
    </div>
  )
}

