import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPartnersByCategory } from "@/app/actions/partner-actions"
import { PartnersDropdown } from "@/components/partners-dropdown"
import { PartnerBenefits } from "@/components/partner-benefits"
import { CrmAd } from "@/components/crm-ad"

export default async function PartnerCategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const partners = await getPartnersByCategory(params.category)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our {category} Partners</h1>
        <PartnersDropdown />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <PartnerBenefits />
        </div>
        <div className="lg:w-1/2">
          <p className="text-xl text-gray-600 mb-8">
            HNW.one collaborates with top-tier {category.toLowerCase()} to ensure our members receive the highest
            quality care and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Link href={`/partners/${params.category}/${partner.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link href={`/partners/join?category=${params.category}`}>Join Our {category} Partner Network</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/4 space-y-8">
          <CrmAd />
          <CrmAd />
        </div>
      </div>
    </div>
  )
}

