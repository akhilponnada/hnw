import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Home, Users, HeartPulse, Stethoscope, Shield, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const societyPackages = [
  {
    name: "Community Care",
    price: "₹799",
    duration: "per household / year",
    features: ["Annual health camps", "24/7 emergency support", "Discounted medicines", "Basic health insurance"],
    icon: Home,
  },
  {
    name: "Neighborhood Wellness",
    price: "₹1,499",
    duration: "per household / year",
    features: [
      "Bi-annual health check-ups",
      "24/7 telemedicine support",
      "Medication delivery",
      "Enhanced health insurance",
      "Mental health workshops",
    ],
    icon: Users,
  },
  {
    name: "Premium Society Health",
    price: "₹2,999",
    duration: "per household / year",
    features: [
      "Quarterly health check-ups",
      "Priority specialist consultations",
      "Comprehensive health insurance",
      "Fitness and nutrition programs",
      "Elder care support",
      "Child healthcare programs",
    ],
    icon: Shield,
  },
  {
    name: "Green Society Wellness",
    price: "₹3,499",
    duration: "per household / year",
    features: [
      "Eco-friendly health initiatives",
      "Organic nutrition counseling",
      "Green exercise programs",
      "Environmental health assessments",
      "Sustainable living workshops",
      "Holistic wellness approach",
    ],
    icon: Leaf,
  },
]

const benefits = [
  { title: "Community Well-being", description: "Promote health awareness and preventive care", icon: Users },
  { title: "Emergency Preparedness", description: "Quick response during health emergencies", icon: HeartPulse },
  { title: "Family-Centric Care", description: "Tailored healthcare for all age groups", icon: Home },
  { title: "Convenient Access", description: "Healthcare services at your doorstep", icon: Stethoscope },
]

const relatedNews = [
  {
    title: "HNW Introduces Smart Health Monitoring for Societies",
    date: "2023-05-20",
    link: "/news/smart-health-monitoring",
  },
  {
    title: "Community Health Initiatives Reduce Healthcare Costs by 25%",
    date: "2023-05-18",
    link: "/news/community-health-cost-reduction",
  },
  {
    title: "New 'Green Health' Program for Eco-Conscious Societies",
    date: "2023-05-12",
    link: "/news/green-health-program",
  },
]

export default function SocietyPackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Society Healthcare Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Comprehensive healthcare solutions designed for residential societies and communities
      </p>

      <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
        <Image src="/images/society-healthcare.jpg" alt="Society Healthcare" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Health for Your Community</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {societyPackages.map((pkg, index) => (
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
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Benefits of HNW Society Packages</h2>
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
          <Link href="/contact">Enquire for Your Society</Link>
        </Button>
      </div>
    </div>
  )
}

