import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Building2, Users, HeartPulse, Stethoscope } from "lucide-react"
import Link from "next/link"

const corporatePackages = [
  {
    name: "Basic Care",
    price: "₹999",
    duration: "per employee / year",
    features: [
      "Annual health check-ups",
      "24/7 telemedicine support",
      "Discounted medicines",
      "Basic life insurance coverage",
    ],
  },
  {
    name: "Premium Health",
    price: "₹1,999",
    duration: "per employee / year",
    features: [
      "Comprehensive health check-ups",
      "24/7 telemedicine with specialists",
      "Medication delivery",
      "Enhanced life and disability insurance",
      "Mental health support",
    ],
  },
  {
    name: "Executive Wellness",
    price: "₹4,999",
    duration: "per employee / year",
    features: [
      "Executive health screening",
      "Personalized wellness programs",
      "Priority specialist consultations",
      "Comprehensive insurance coverage",
      "International second opinions",
      "Executive mental health support",
    ],
  },
]

const benefits = [
  {
    title: "Improved Employee Health",
    description: "Regular check-ups and easy access to healthcare",
    icon: HeartPulse,
  },
  { title: "Increased Productivity", description: "Less sick days and faster recovery times", icon: Users },
  { title: "Attractive Benefits Package", description: "Aid in recruiting and retaining top talent", icon: Building2 },
  { title: "Customizable Solutions", description: "Tailored to fit your company's specific needs", icon: Stethoscope },
]

export default function CorporateOffersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Corporate Healthcare Solutions</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Empower your workforce with comprehensive healthcare packages designed for businesses of all sizes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {corporatePackages.map((pkg, index) => (
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
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose HNW Corporate Packages?</h2>
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
          <Link href="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}

