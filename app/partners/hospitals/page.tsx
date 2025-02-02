import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPartnersByCategory } from "@/app/actions/partner-actions"
import { PartnersDropdown } from "@/components/partners-dropdown"
import { PartnerFilterBar } from "@/components/partner-filter-bar"

const featuredHospitals = [
  {
    id: 1,
    name: "City General Hospital",
    description: "A leading healthcare institution providing comprehensive medical services.",
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/hospitals/city-general",
    city: "New York",
    pinCode: "10001",
    area: "Manhattan",
  },
  {
    id: 2,
    name: "Mercy Medical Center",
    description: "Specialized in cardiology and neurology with state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/hospitals/mercy-medical",
    city: "Los Angeles",
    pinCode: "90001",
    area: "Downtown",
  },
  {
    id: 3,
    name: "St. John's Health",
    description: "Renowned for its oncology department and cutting-edge cancer treatments.",
    image: "https://images.unsplash.com/photo-1516549655669-df64cee12a2a?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/hospitals/st-johns-health",
    city: "Chicago",
    pinCode: "60601",
    area: "Loop",
  },
  {
    id: 4,
    name: "University Hospital",
    description: "Academic medical center known for its research and innovative treatments.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/hospitals/university-hospital",
    city: "Boston",
    pinCode: "02115",
    area: "Longwood Medical Area",
  },
]

export default async function HospitalsPage({
  searchParams,
}: {
  searchParams: { city?: string; pinCode?: string; area?: string }
}) {
  const hospitals = await getPartnersByCategory("hospitals")

  const filteredHospitals = hospitals.filter((hospital) => {
    const cityMatch = !searchParams.city || hospital.city.toLowerCase().includes(searchParams.city.toLowerCase())
    const pinCodeMatch = !searchParams.pinCode || hospital.pinCode.includes(searchParams.pinCode)
    const areaMatch = !searchParams.area || hospital.area.toLowerCase().includes(searchParams.area.toLowerCase())
    return cityMatch && pinCodeMatch && areaMatch
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Hospital Partners</h1>
        <PartnersDropdown />
      </div>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        HNW.one collaborates with top-tier hospitals to ensure our members receive the highest quality medical care.
      </p>

      <PartnerFilterBar
        onFilter={(filters) => {
          const searchParams = new URLSearchParams(filters)
          window.location.search = searchParams.toString()
        }}
      />

      <h2 className="text-2xl font-semibold mb-6">Featured Hospitals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {featuredHospitals.map((hospital) => (
          <Card key={hospital.id} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={hospital.image || "/placeholder.svg"}
                alt={hospital.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{hospital.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{hospital.description}</CardDescription>
              <p className="text-sm text-gray-500 mt-2">
                {hospital.city}, {hospital.pinCode} - {hospital.area}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={hospital.href}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">All Hospital Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHospitals.map((hospital) => (
          <Card key={hospital.id} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={hospital.image || "/placeholder.svg"}
                alt={hospital.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{hospital.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{hospital.description}</CardDescription>
              <p className="text-sm text-gray-500 mt-2">
                {hospital.city}, {hospital.pinCode} - {hospital.area}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild className="text-xl py-6 px-12">
          <Link href="/partners/join?category=hospitals">Join Us as a Hospital Partner</Link>
        </Button>
      </div>
    </div>
  )
}

