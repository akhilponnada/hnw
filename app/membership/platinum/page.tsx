import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const benefits = [
  "Unlimited access to premium healthcare facilities worldwide",
  "24/7 priority telemedicine consultations with specialists",
  "Comprehensive health check-ups quarterly",
  "Personalized wellness and nutrition programs",
  "Exclusive discounts on luxury health services and products",
  "Priority appointment scheduling and room upgrades",
  "Global emergency medical coverage with air ambulance service",
  "Personal health concierge",
  "Access to cutting-edge treatments and clinical trials",
  "Family coverage options",
]

export default function PlatinumMembershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HNW Platinum Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=800"
            alt="Platinum Membership"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Elite Healthcare Experience</CardTitle>
              <CardDescription>Indulge in the pinnacle of medical care with our Platinum Membership</CardDescription>
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
                <p className="text-2xl font-bold mb-4">$1,999/year</p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/signup?plan=platinum">Upgrade to Platinum</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

