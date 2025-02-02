import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const benefits = [
  "Access to standard healthcare facilities nationwide",
  "24/7 telemedicine consultations",
  "Annual health check-up",
  "Basic wellness program",
  "Discounts on medical services and products",
  "Online appointment scheduling",
  "Emergency medical coverage",
]

export default function SilverMembershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HNW Silver Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200&h=800"
            alt="Silver Membership"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Essential Healthcare Benefits</CardTitle>
              <CardDescription>Enjoy quality medical care with our Silver Membership</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-2xl font-bold mb-4">$499/year</p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/signup?plan=silver">Get Silver Membership</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

