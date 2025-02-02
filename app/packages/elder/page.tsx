import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Heart, Users, Activity, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const elderPackages = [
  {
    name: "Senior Care Essentials",
    price: "₹2,499",
    duration: "per person / year",
    features: [
      "Quarterly health check-ups",
      "24/7 emergency support",
      "Medication management",
      "Basic elder care insurance",
    ],
  },
  {
    name: "Comprehensive Elder Wellness",
    price: "₹4,999",
    duration: "per person / year",
    features: [
      "Monthly health check-ups",
      "24/7 specialist telemedicine support",
      "Medication delivery and management",
      "Enhanced elder care insurance",
      "Physiotherapy sessions",
      "Dental and vision coverage",
    ],
  },
  {
    name: "Premium Senior Health",
    price: "₹9,999",
    duration: "per person / year",
    features: [
      "Weekly health monitoring",
      "Priority in-home doctor visits",
      "Comprehensive geriatric care",
      "Full spectrum health insurance",
      "Mental health support",
      "Personalized nutrition plans",
      "24/7 care coordinator",
    ],
  },
]

const benefits = [
  { title: "Specialized Care", description: "Tailored healthcare for seniors", icon: Heart },
  { title: "Independence Support", description: "Services to maintain quality of life", icon: Users },
  { title: "Preventive Measures", description: "Regular check-ups and early intervention", icon: Activity },
  { title: "Expert Consultations", description: "Access to geriatric specialists", icon: Stethoscope },
]

export default function ElderPackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elder Care Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Specialized healthcare solutions designed to provide comprehensive care and support for seniors
      </p>

      <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
        <Image src="/images/elder-care.jpg" alt="Elder Care" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Compassionate Care for Seniors</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {elderPackages.map((pkg, index) => (
          <Card key={index} className={index === 1 ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <div className="text-3xl font-bold">
                {pkg.price}
                <span className="text-sm font-normal text-gray-600"> {pkg.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Select Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Benefits of HNW Elder Care Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <benefit.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/contact">Enquire About Elder Care</Link>
        </Button>
      </div>
    </div>
  )
}

