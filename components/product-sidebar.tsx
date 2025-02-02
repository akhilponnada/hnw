import { EventList } from "@/components/event-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Stethoscope, Activity, Hospital } from "lucide-react"

const keyBenefits = [
  {
    title: "24/7 Medical Support",
    description: "Round-the-clock access to healthcare professionals",
    icon: Stethoscope,
  },
  {
    title: "Insurance Coverage",
    description: "Comprehensive health insurance plans",
    icon: Heart,
  },
  {
    title: "Emergency Care",
    description: "Immediate response for emergencies",
    icon: Activity,
  },
  {
    title: "Hospital Network",
    description: "Access to premium healthcare facilities",
    icon: Hospital,
  },
]

export function ProductSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Key Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <benefit.icon className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
            <Button className="w-full mt-4" asChild>
              <Link href="/benefits">
                View All Benefits
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <EventList />
    </div>
  )
}

