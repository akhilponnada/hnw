import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Access to a large network of HNW.one members",
  "Increased visibility through our platform",
  "Streamlined appointment booking system",
  "Collaborative healthcare ecosystem",
  "Marketing and promotional support",
  "Continuous professional development opportunities",
  "Participation in HNW.one events and conferences",
  "Exclusive partner discounts on HNW.one services",
]

export function PartnerBenefits() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Partner Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

