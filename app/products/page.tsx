"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCurrency } from "@/contexts/CurrencyContext"
import { formatPrice } from "@/lib/currencies"
import { FallbackImage } from "@/components/fallback-image"

const products = [
  {
    id: 1,
    title: "Health Cards",
    description: "Access premium healthcare services with our exclusive health cards",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor%20showing%20card2-8h9ztRKY9DIpNHYZ3eMPfkjvzbn9Mb.png",
    category: "Essential",
    priceInr: 999,
    features: [
      "24/7 teleconsultation",
      "Discounted health checkups",
      "Priority appointment booking",
      "Emergency assistance",
    ],
    link: "/products/health-cards",
  },
  {
    id: 2,
    title: "Insurance Plans",
    description: "Comprehensive insurance coverage for you and your family",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=2070&h=1380",
    category: "Premium",
    priceInr: 2499,
    features: [
      "Hospitalization coverage",
      "Pre & post hospitalization expenses",
      "Cashless treatment",
      "No claim bonus",
    ],
    link: "/products/insurance-plans",
  },
  {
    id: 3,
    title: "Wellness Packages",
    description: "Holistic wellness solutions for a healthier lifestyle",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070&h=1380",
    category: "Lifestyle",
    priceInr: 1499,
    features: ["Regular health checkups", "Nutrition consultation", "Fitness programs", "Mental wellness support"],
    link: "/products/wellness-packages",
  },
  {
    id: 4,
    title: "Medical Devices",
    description: "High-quality medical devices for home healthcare needs",
    image: "https://images.unsplash.com/photo-1583912267550-d44c9c195cf9?auto=format&fit=crop&q=80&w=2070&h=1380",
    category: "Equipment",
    priceInr: 4999,
    features: ["Latest technology", "Home delivery & setup", "Technical support", "Warranty coverage"],
    link: "/products/medical-devices",
  },
]

export default function ProductsPage() {
  const { currentCurrency } = useCurrency()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Our Healthcare Products</h1>
        <p className="text-xl text-gray-600">
          Discover our range of premium healthcare products designed for your well-being
        </p>
      </div>
      <div className="grid gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <FallbackImage
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                  {product.category}
                </div>
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  Starting from {formatPrice(product.priceInr, currentCurrency)}/month
                </div>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link href={product.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

