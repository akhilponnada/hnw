import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, HeartPulse, Stethoscope, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const groupPackages = [
  {
    name: "Group Essentials",
    price: "Custom Pricing",
    duration: "based on group size",
    features: [
      "Annual health check-ups",
      "24/7 telemedicine support",
      "Discounted medicines",
      "Basic group health insurance",
    ],
  },
  {
    name: "Group Advantage",
    price: "Custom Pricing",
    duration: "based on group size",
    features: [
      "Bi-annual health assessments",
      "24/7 specialist telemedicine access",
      "Medication delivery service",
      "Enhanced group health insurance",
      "Mental health support programs",
    ],
  },
  {
    name: "Group Premium Care",
    price: "Custom Pricing",
    duration: "based on group size",
    features: [
      "Quarterly comprehensive health screenings",
      "Priority in-person and telemedicine consultations",
      "Comprehensive group health insurance",
      "Customized wellness programs",
      "Dental and vision coverage",
      "International medical coverage",
    ],
  },
]

const benefits = [
  { title: "Cost-Effective Coverage", description: "Affordable rates for group plans", icon: Shield },
  { title: "Tailored Solutions", description: "Customized to group's specific needs", icon: Users },
  { title: "Preventive Care Focus", description: "Emphasis on health maintenance", icon: HeartPulse },
  { title: "Wide Network Access", description: "Extensive healthcare provider network", icon: Stethoscope },
]

export default function GroupPackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Group Healthcare Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Comprehensive healthcare solutions designed for groups, organizations, and associations
      </p>

      <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
        <Image src="/images/group-healthcare.jpg" alt="Group Healthcare" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Healthcare for Your Group</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {groupPackages.map((pkg, index) => (
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

      <h2 className="text-3xl font-bold mb-8 text-center">Benefits of HNW Group Packages</h2>
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
          <Link href="/contact">Enquire for Your Group</Link>
        </Button>
      </div>
    </div>
  )
}

