import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, HeartPulse, Baby, Stethoscope, Dna, Flower2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const familyPackages = [
  {
    name: "Essential Family Care",
    price: "₹1,999",
    duration: "per family / year",
    features: [
      "Annual health check-ups for 4 members",
      "24/7 telemedicine support",
      "Discounted medicines",
      "Basic family health insurance",
    ],
    icon: Users,
  },
  {
    name: "Comprehensive Family Wellness",
    price: "₹3,999",
    duration: "per family / year",
    features: [
      "Bi-annual health check-ups for 4 members",
      "24/7 specialist telemedicine support",
      "Medication delivery",
      "Enhanced family health insurance",
      "Dental and vision coverage",
      "Child immunization program",
    ],
    icon: HeartPulse,
  },
  {
    name: "Premium Family Health",
    price: "₹7,999",
    duration: "per family / year",
    features: [
      "Quarterly health check-ups for 6 members",
      "Priority specialist consultations",
      "Comprehensive family health insurance",
      "Maternity coverage",
      "Child development programs",
      "Elder care support",
      "Mental health counseling",
    ],
    icon: Stethoscope,
  },
  {
    name: "Genetic Health Guardian",
    price: "₹9,999",
    duration: "per family / year",
    features: [
      "Annual genetic health screening",
      "Personalized health plans based on genetic insights",
      "Access to genetic counselors",
      "Preventive care programs",
      "Advanced disease risk assessments",
      "Lifestyle optimization based on genetic profile",
    ],
    icon: Dna,
  },
]

const benefits = [
  { title: "All-in-One Coverage", description: "Comprehensive care for the whole family", icon: Users },
  { title: "Preventive Care", description: "Regular check-ups and screenings for early detection", icon: HeartPulse },
  { title: "Child-Focused Services", description: "Specialized care for growing children", icon: Baby },
  { title: "Flexible Consultations", description: "In-person and telemedicine options", icon: Stethoscope },
]

const relatedNews = [
  {
    title: "HNW Launches Revolutionary Family Genetic Health Program",
    date: "2023-05-25",
    link: "/news/family-genetic-health-program",
  },
  {
    title: "New Study Shows Family Health Plans Improve Overall Well-being",
    date: "2023-05-22",
    link: "/news/family-health-plans-study",
  },
  {
    title: "HNW Introduces AI-Powered Family Health Assistant",
    date: "2023-05-18",
    link: "/news/ai-family-health-assistant",
  },
]

export default function FamilyPackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Family Healthcare Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Comprehensive healthcare solutions designed to keep your entire family healthy and protected
      </p>

      <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
        <Image src="/images/family-healthcare.jpg" alt="Family Healthcare" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Caring for Your Loved Ones</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {familyPackages.map((pkg, index) => (
          <Card key={index} className={index === 1 ? "border-primary" : ""}>
            <CardHeader>
              <pkg.icon className="h-10 w-10 text-primary mb-4" />
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
              <Button className="w-full">Choose Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Benefits of HNW Family Packages</h2>
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

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Related News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedNews.map((news, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{news.date}</p>
                <Button asChild variant="outline">
                  <Link href={news.link}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/contact">Get Family Coverage</Link>
        </Button>
      </div>
    </div>
  )
}

