import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const wellnessPackages = [
  {
    name: "Essential Wellness",
    price: "₹4,999",
    duration: "per year",
    features: [
      "Annual health check-up",
      "Basic fitness assessment",
      "Nutritional counseling (2 sessions)",
      "Stress management workshop",
      "Access to online wellness resources",
    ],
  },
  {
    name: "Premium Wellness",
    price: "₹9,999",
    duration: "per year",
    features: [
      "Comprehensive health check-up",
      "Advanced fitness assessment",
      "Personalized nutrition plan",
      "Stress management and mindfulness program",
      "Quarterly wellness coaching sessions",
      "Access to premium online wellness content",
      "Discounts on gym memberships",
    ],
  },
  {
    name: "Executive Wellness",
    price: "₹19,999",
    duration: "per year",
    features: [
      "Executive health screening",
      "Personalized fitness training (12 sessions)",
      "Customized nutrition and meal planning",
      "Executive stress management program",
      "Monthly wellness coaching",
      "24/7 telemedicine support",
      "Exclusive access to wellness retreats",
      "Complimentary gym and spa access",
    ],
  },
]

export default function WellnessPackagesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Wellness Packages</h1>
        <p className="text-xl text-gray-600">Comprehensive wellness solutions for a healthier lifestyle</p>
      </div>

      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070&h=1380"
          alt="Wellness Packages"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 flex items-center">
          <div className="max-w-xl text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Invest in Your Well-being</h2>
            <p className="text-lg mb-6">
              Our wellness packages are designed to help you achieve optimal health and balance in your life.
            </p>
            <Button size="lg" variant="secondary">
              Explore Packages
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {wellnessPackages.map((package_) => (
          <Card key={package_.name} className="relative">
            <CardHeader>
              <CardTitle>{package_.name}</CardTitle>
              <div className="text-3xl font-bold">
                {package_.price}
                <span className="text-sm font-normal text-gray-600"> {package_.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {package_.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <h3 className="font-semibold mb-2">Can I customize my wellness package?</h3>
            <p className="text-gray-600">
              Yes, we offer customization options for our Premium and Executive packages. Please contact our wellness
              consultants for personalized solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How often can I use the services in my package?</h3>
            <p className="text-gray-600">
              Service frequency varies by package and specific offerings. Most services are available on an annual or
              quarterly basis, while some, like online resources, are accessible anytime.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I upgrade my package mid-year?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade to a higher-tier package at any time. The price difference will be prorated for the
              remaining duration of your current package.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

