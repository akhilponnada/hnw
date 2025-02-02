import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    title: "Free Telemedicine",
    description: "24/7 access to online consultations with qualified doctors",
    image: "/images/telemedicine-thumb.jpg",
  },
  {
    title: "Unlimited Consultations",
    description: "In-person consultations with our network of specialists",
    image: "/images/consultations-thumb.jpg",
  },
  {
    title: "Health Insurance Coverage",
    description: "Comprehensive insurance plans starting from Rs. 50,000",
    image: "/images/insurance-thumb.jpg",
  },
  {
    title: "Medicine Discounts",
    description: "Up to 30% discount on prescribed medications",
    image: "/images/medicine-thumb.jpg",
  },
  {
    title: "Lab Tests & Scans",
    description: "Up to 50% discount on diagnostic services",
    image: "/images/lab-tests-thumb.jpg",
  },
  {
    title: "Blood Supply",
    description: "Priority access to blood supply services",
    image: "/images/blood-supply-thumb.jpg",
  },
  {
    title: "Hospital Network",
    description: "Flat 50% discount at our partner hospitals",
    image: "/images/hospital-thumb.jpg",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer service for all your needs",
    image: "/images/support-thumb.jpg",
  },
]

export default function BenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Comprehensive Healthcare Benefits</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Experience top-tier healthcare with our wide range of benefits designed to keep you and your family healthy and
        protected.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

