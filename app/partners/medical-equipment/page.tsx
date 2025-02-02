import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPartnersByCategory } from "@/app/actions/partner-actions"
import Link from "next/link"

export default async function MedicalEquipmentPage() {
  const partners = await getPartnersByCategory("medical-equipment")

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Medical Equipment Partners</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        HNW.one collaborates with leading medical equipment providers to ensure our members have access to the latest
        and most effective healthcare technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <Card key={partner.id} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={partner.image || "/placeholder.svg"}
                alt={partner.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{partner.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{partner.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/partners/join?category=medical-equipment">Become a Medical Equipment Partner</Link>
        </Button>
      </div>
    </div>
  )
}

