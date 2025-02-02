import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPartnersByCategory } from "@/app/actions/partner-actions"
import { PartnersDropdown } from "@/components/partners-dropdown"
import { PartnerFilterBar } from "@/components/partner-filter-bar"

const featuredLabs = [
  {
    id: 1,
    name: "Advanced Diagnostics Lab",
    description: "Cutting-edge diagnostic services with rapid result delivery.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/labs/advanced-diagnostics",
    city: "New York",
    pinCode: "10001",
    area: "Midtown",
  },
  {
    id: 2,
    name: "Precision Pathology Center",
    description: "Specialized in molecular and genetic testing for personalized medicine.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3cf7d77f?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/labs/precision-pathology",
    city: "San Francisco",
    pinCode: "94103",
    area: "SoMa",
  },
  {
    id: 3,
    name: "LifeScience Research Labs",
    description: "Leading research facility offering a wide range of clinical trials and studies.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/labs/lifescience-research",
    city: "Boston",
    pinCode: "02115",
    area: "Longwood Medical Area",
  },
  {
    id: 4,
    name: "QuickResults Medical Lab",
    description: "Fast and reliable routine testing with multiple convenient locations.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=300&h=200",
    href: "/partners/labs/quickresults-medical",
    city: "Chicago",
    pinCode: "60601",
    area: "The Loop",
  },
]

export default async function LabsPage({
  searchParams,
}: {
  searchParams: { city?: string; pinCode?: string; area?: string }
}) {
  const labs = await getPartnersByCategory("labs")

  const filteredLabs = labs.filter((lab) => {
    const cityMatch = !searchParams.city || lab.city.toLowerCase().includes(searchParams.city.toLowerCase())
    const pinCodeMatch = !searchParams.pinCode || lab.pinCode.includes(searchParams.pinCode)
    const areaMatch = !searchParams.area || lab.area.toLowerCase().includes(searchParams.area.toLowerCase())
    return cityMatch && pinCodeMatch && areaMatch
  })

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Laboratory Partners</h1>
        <PartnersDropdown />
      </div>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        HNW.one collaborates with leading laboratories to provide accurate and timely diagnostic services to our
        members.
      </p>

      <PartnerFilterBar
        onFilter={(filters) => {
          const searchParams = new URLSearchParams(filters)
          window.location.search = searchParams.toString()
        }}
      />

      <h2 className="text-2xl font-semibold mb-6">Featured Laboratories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {featuredLabs.map((lab) => (
          <Card key={lab.id} className="flex flex-col">
            <div className="relative h-48">
              <Image src={lab.image || "/placeholder.svg"} alt={lab.name} fill className="object-cover rounded-t-lg" />
            </div>
            <CardHeader>
              <CardTitle>{lab.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{lab.description}</CardDescription>
              <p className="text-sm text-gray-500 mt-2">
                {lab.city}, {lab.pinCode} - {lab.area}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={lab.href}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">All Laboratory Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLabs.map((lab) => (
          <Card key={lab.id} className="flex flex-col">
            <div className="relative h-48">
              <Image src={lab.image || "/placeholder.svg"} alt={lab.name} fill className="object-cover rounded-t-lg" />
            </div>
            <CardHeader>
              <CardTitle>{lab.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{lab.description}</CardDescription>
              <p className="text-sm text-gray-500 mt-2">
                {lab.city}, {lab.pinCode} - {lab.area}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild className="text-xl py-6 px-12">
          <Link href="/partners/join?category=labs">Join Us as a Laboratory Partner</Link>
        </Button>
      </div>
    </div>
  )
}

