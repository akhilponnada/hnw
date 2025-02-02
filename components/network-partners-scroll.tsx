"use client"

import { useEffect, useRef } from "react"
import { FallbackImage } from "@/components/fallback-image"

const partners = [
  {
    name: "ASAN Services",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASAN-logo-icon-3BbJHkCSDF43Hnl1zV7oUxOi5EQyH9.png",
  },
  {
    name: "Phoenix Healthcare",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-logos-6-DRhTV54db0ajoBbezhgwBfWXMKRmTI.png",
  },
  {
    name: "Global Medical",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-logos-WCKAulgQL5OFCGXhgwafwrv8IGc5K9.png",
  },
  {
    name: "Mercedes Medical",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-IQGKMSrMDlrgwdo1BDRz1Of3bjic9h.webp",
  },
  // Repeat the partners
  {
    name: "ASAN Services",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASAN-logo-icon-3BbJHkCSDF43Hnl1zV7oUxOi5EQyH9.png",
  },
  {
    name: "Phoenix Healthcare",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-logos-6-DRhTV54db0ajoBbezhgwBfWXMKRmTI.png",
  },
  {
    name: "Global Medical",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-logos-WCKAulgQL5OFCGXhgwafwrv8IGc5K9.png",
  },
  {
    name: "Mercedes Medical",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-IQGKMSrMDlrgwdo1BDRz1Of3bjic9h.webp",
  },
]

export function NetworkPartnersScroll({ className = "" }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstElementChild
      if (scrollContent) {
        scrollContainer.appendChild(scrollContent.cloneNode(true))
      }
    }
  }, [])

  return (
    <section className={`py-12 bg-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Network Partners</h2>
        <div className="relative overflow-hidden" style={{ height: "100px" }}>
          <div
            ref={scrollRef}
            className="flex absolute left-0 animate-scroll"
            style={{ animationDuration: "30s", animationIterationCount: "infinite", animationTimingFunction: "linear" }}
          >
            <div className="flex space-x-8">
              {partners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex flex-col items-center justify-center w-40">
                  <div className="relative w-20 h-20">
                    <FallbackImage
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

