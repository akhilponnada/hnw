import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const membershipTiers = [
  {
    name: "Silver",
    price: "$499/year",
    description: "Essential healthcare coverage for individuals and families",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/silver-q7odC3SMnfrLPpfEnp6BnA5VXGzu9t.png",
    benefits: [
      "Access to standard healthcare facilities nationwide",
      "24/7 telemedicine consultations",
      "Annual health check-up",
      "Basic wellness program",
      "Discounts on medical services and products",
    ],
    color: "bg-gray-100",
    href: "/membership/silver",
  },
  {
    name: "Gold",
    price: "$999/year",
    description: "Premium healthcare services for those who demand the best",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gold%20card2-7XrEpBrKTTdAMdJ1eLNMTLdTOeiJnV.png",
    benefits: [
      "Access to premium healthcare facilities worldwide",
      "24/7 priority telemedicine consultations",
      "Comprehensive health check-ups twice a year",
      "Personalized wellness programs",
      "Exclusive discounts on medical services and products",
      "Priority appointment scheduling",
      "Global emergency medical coverage",
    ],
    color: "bg-yellow-100",
    href: "/membership/gold",
    featured: true,
  },
  {
    name: "Platinum",
    price: "$1,999/year",
    description: "Unparalleled healthcare experience for the most discerning individuals",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATINUM%20CARD-SuHBTsVpve53YcpTdDbGDCVKBVEtEH.png",
    benefits: [
      "Unlimited access to premium healthcare facilities worldwide",
      "24/7 priority telemedicine consultations with specialists",
      "Comprehensive health check-ups quarterly",
      "Personalized wellness and nutrition programs",
      "Exclusive discounts on luxury health services and products",
      "Priority appointment scheduling and room upgrades",
      "Global emergency medical coverage with air ambulance service",
      "Personal health concierge",
    ],
    color: "bg-gray-800 text-white",
    href: "/membership/platinum",
  },
]

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HNW.one Membership Plans</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Choose the perfect health plan that suits your needs and lifestyle. Experience world-class healthcare with
        HNW.one.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {membershipTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col ${tier.color} ${tier.featured ? "border-2 border-primary" : ""}`}
          >
            {tier.featured && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Recommended</Badge>
            )}
            <div className="relative h-48">
              <Image
                src={tier.image || "/placeholder.svg"}
                alt={`${tier.name} Membership`}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name} Membership</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={tier.href}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

