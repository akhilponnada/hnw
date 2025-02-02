"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Ad {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  imageUrl: string
}

const mockAds: Ad[] = [
  {
    title: "HNW Gold Membership",
    description:
      "Unlock premium healthcare benefits with our Gold Membership plan. Get access to world-class medical facilities and personalized care.",
    ctaText: "Upgrade Now",
    ctaLink: "/membership/gold",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "24/7 Telemedicine",
    description:
      "Get instant access to healthcare professionals anytime, anywhere. Our telemedicine service is now available round the clock.",
    ctaText: "Try Now",
    ctaLink: "/services/telemedicine",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Comprehensive Health Check-up",
    description:
      "Stay ahead of your health with our comprehensive health screening package. Special rates for HNW members.",
    ctaText: "Book Now",
    ctaLink: "/services/health-checkup",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3cf7d77f?auto=format&fit=crop&q=80&w=600&h=400",
  },
]

export function CrmAd() {
  const [randomAd, setRandomAd] = useState<Ad | null>(null)

  useEffect(() => {
    // Select a random ad
    const ad = mockAds[Math.floor(Math.random() * mockAds.length)]
    setRandomAd(ad)
  }, [])

  if (!randomAd) {
    return null
  }

  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=800"
          alt={randomAd.title || "Healthcare services"}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{randomAd.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{randomAd.description}</p>
        <Button asChild className="w-full">
          <a href={randomAd.ctaLink}>{randomAd.ctaText}</a>
        </Button>
      </CardContent>
    </Card>
  )
}

