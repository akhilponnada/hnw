import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const benefits = [
  "Access to premium healthcare facilities worldwide",
  "24/7 priority telemedicine consultations",
  "Comprehensive health check-ups twice a year",
  "Personalized wellness programs",
  "Exclusive discounts on medical services and products",
  "Priority appointment scheduling",
  "Global emergency medical coverage",
]

export default function GoldMembershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HNW Gold Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=800"
            alt="Gold Membership"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Unlock Premium Healthcare Benefits</CardTitle>
              <CardDescription>Experience world-class medical care with our Gold Membership</CardDescription>
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
                <p className="text-2xl font-bold mb-4">$999/year</p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/signup?plan=gold">Upgrade to Gold</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

