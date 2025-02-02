import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, HomeIcon, Stethoscope, Factory, Group } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const packages = [
  { name: "Corporate Packages", icon: Building2, href: "/packages/corporate", image: "/images/corporate-package.jpg" },
  { name: "Society Packages", icon: HomeIcon, href: "/packages/society", image: "/images/society-package.jpg" },
  { name: "Family Packages", icon: Users, href: "/packages/family", image: "/images/family-package.jpg" },
  { name: "Elder Packages", icon: Stethoscope, href: "/packages/elder", image: "/images/elder-package.jpg" },
  { name: "Industry Packages", icon: Factory, href: "/packages/industry", image: "/images/industry-package.jpg" },
  { name: "Group Packages", icon: Group, href: "/packages/group", image: "/images/group-package.jpg" },
]

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Healthcare Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Discover our range of tailored healthcare solutions designed to meet the unique needs of different groups and
        organizations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.name} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <pkg.icon className="mr-2 h-6 w-6" />
                {pkg.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Tailored healthcare solutions for {pkg.name.toLowerCase()}</p>
              <Button asChild>
                <Link href={pkg.href}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

