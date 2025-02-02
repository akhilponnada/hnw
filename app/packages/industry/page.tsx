import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Factory, Users, Activity, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const industryPackages = [
  {
    name: "Basic Industry Health",
    price: "Custom Pricing",
    duration: "based on workforce size",
    features: [
      "Annual occupational health check-ups",
      "24/7 on-site emergency support",
      "Basic work-related injury coverage",
      "Health and safety training",
    ],
  },
  {
    name: "Advanced Industrial Care",
    price: "Custom Pricing",
    duration: "based on workforce size",
    features: [
      "Bi-annual comprehensive health assessments",
      "24/7 telemedicine for employees and families",
      "Enhanced work-related injury and illness coverage",
      "Mental health support programs",
      "Ergonomic assessments and support",
    ],
  },
  {
    name: "Premium Industrial Wellness",
    price: "Custom Pricing",
    duration: "based on workforce size",
    features: [
      "Quarterly health screenings and risk assessments",
      "On-site medical facilities and staff",
      "Comprehensive health insurance for employees and dependents",
      "Customized wellness programs",
      "Rehabilitation and return-to-work programs",
      "Advanced health and safety management systems",
    ],
  },
]

const benefits = [
  { title: "Workplace Safety", description: "Reduce accidents and improve safety culture", icon: Factory },
  { title: "Employee Wellbeing", description: "Comprehensive health support for workforce", icon: Users },
  { title: "Productivity Boost", description: "Healthier employees, increased output", icon: Activity },
  { title: "Risk Management", description: "Proactive approach to occupational health", icon: Stethoscope },
]

export default function IndustryPackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Industry Healthcare Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Tailored healthcare solutions designed to meet the unique needs of various industries and their workforce
      </p>

      <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
        <Image src="/images/industry-healthcare.jpg" alt="Industry Healthcare" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Protecting Your Workforce</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {industryPackages.map((pkg, index) => (
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
              <Button className="w-full">Get Quote</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Benefits of HNW Industry Packages</h2>
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
          <Link href="/contact">Request Industry Consultation</Link>
        </Button>
      </div>
    </div>
  )
}

