import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppFloat() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=919667660773&text=Hi%20HNW.one%2C%20I%20need%20assistance"

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  )
}

