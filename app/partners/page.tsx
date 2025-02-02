import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PartnersDropdown } from "@/components/partners-dropdown"

const partnerCategories = [
  {
    name: "Hospitals",
    description: "Leading healthcare institutions providing comprehensive medical services.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/hospitals",
  },
  {
    name: "Labs",
    description: "State-of-the-art diagnostic and research laboratories.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/labs",
  },
  {
    name: "Clinics",
    description: "Specialized outpatient facilities offering focused healthcare services.",
    image: "https://images.unsplash.com/photo-1516549655669-df64cee12a2a?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/clinics",
  },
  {
    name: "Pharmacy",
    description: "Trusted pharmacies providing essential medications and health products.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/pharmacy",
  },
  {
    name: "Blood Banks",
    description: "Vital facilities ensuring a safe and adequate blood supply.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/blood-banks",
  },
  {
    name: "Insurance",
    description: "Comprehensive health insurance providers for financial protection.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/insurance",
  },
  {
    name: "Telehealth",
    description: "Innovative platforms for remote healthcare consultations and services.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/telehealth",
  },
  {
    name: "Medical Equipment",
    description: "Providers of cutting-edge medical devices and equipment.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3cf7d77f?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/medical-equipment",
  },
  {
    name: "Wellness Centers",
    description: "Holistic wellness and preventive care facilities.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/wellness-centers",
  },
  {
    name: "Home Healthcare",
    description: "Professional medical care services provided at home.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/home-healthcare",
  },
]

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Healthcare Partners</h1>
        <PartnersDropdown />
      </div>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        HNW.one collaborates with a diverse network of healthcare partners to provide comprehensive and high-quality
        services to our members.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnerCategories.map((category) => (
          <Card key={category.name} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{category.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-between items-center w-full">
                <Button variant="outline" asChild>
                  <Link href={category.href}>View Partners</Link>
                </Button>
                <Button asChild>
                  <Link href={`/partners/join?category=${category.name.toLowerCase()}`}>Join Us</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild className="text-xl py-6 px-12">
          <Link href="/partners/join">Become a Partner</Link>
        </Button>
      </div>
    </div>
  )
}

