import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "per month",
    features: [
      "24/7 teleconsultation",
      "10% discount on health checkups",
      "Basic health monitoring",
      "Emergency assistance",
    ],
  },
  {
    name: "Premium",
    price: "₹1,999",
    duration: "per month",
    features: [
      "24/7 teleconsultation",
      "25% discount on health checkups",
      "Advanced health monitoring",
      "Priority emergency assistance",
      "Family coverage up to 4 members",
      "Dental care benefits",
    ],
  },
  {
    name: "Elite",
    price: "₹3,999",
    duration: "per month",
    features: [
      "24/7 teleconsultation with specialists",
      "50% discount on health checkups",
      "Comprehensive health monitoring",
      "VIP emergency assistance",
      "Family coverage up to 6 members",
      "Dental & vision care benefits",
      "International coverage",
    ],
  },
]

export default function HealthCardsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Health Cards</h1>
        <p className="text-xl text-gray-600">Access premium healthcare services with our exclusive health cards</p>
      </div>

      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070&h=1380"
          alt="Health Cards"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 flex items-center">
          <div className="max-w-xl text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Your Gateway to Premium Healthcare</h2>
            <p className="text-lg mb-6">
              Get instant access to our network of healthcare providers and enjoy exclusive benefits with our health
              cards.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="relative">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal text-gray-600"> {plan.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Choose {plan.name}</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <h3 className="font-semibold mb-2">How do I use my health card?</h3>
            <p className="text-gray-600">
              Simply present your health card at any of our partner healthcare facilities to avail the benefits. You can
              also use the card number for online consultations and bookings.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I upgrade my plan?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade your plan at any time. The new benefits will be effective from the next billing
              cycle.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there a waiting period?</h3>
            <p className="text-gray-600">
              No, all benefits are available immediately upon activation of your health card.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

