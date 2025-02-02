import Image from "next/image"
import { useState } from "react"

const logos = [
  { name: "HealthCare Co", src: "/logos/client1.svg" },
  { name: "MediCo", src: "/logos/client2.svg" },
  { name: "HealthTech", src: "/logos/client3.svg" },
  { name: "CarePlus", src: "/logos/partner1.svg" },
  { name: "VitaLink", src: "/logos/partner2.svg" },
  { name: "MedAlliance", src: "/logos/partner3.svg" },
]

function ImageComponent({ src, alt }: { src: string; alt: string }) {
  return <Image src={src || "/placeholder.svg"} alt={alt} width={120} height={60} className="max-w-[120px] h-auto" />
}

export function ClientPartnerLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Clients and Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <ImageComponent src={logo.src || "/placeholder.svg"} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

