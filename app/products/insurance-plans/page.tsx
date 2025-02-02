import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const insurancePlans = [
  {
    name: "Care Health Insurance",
    provider: "Care Health Insurance Ltd.",
    price: "₹7,185",
    duration: "per year",
    coverage: "₹5 Lakh",
    features: [
      "No room rent capping",
      "No co-payment",
      "Pre & post hospitalization expenses covered",
      "Day care treatments covered",
      "Annual health check-up",
      "Cumulative bonus up to 50%",
    ],
  },
  {
    name: "Max Saver Health Insurance",
    provider: "Max Bupa Health Insurance",
    price: "₹8,076",
    duration: "per year",
    coverage: "₹5 Lakh",
    features: [
      "Cashless treatment at 4500+ hospitals",
      "Pre & post hospitalization expenses covered",
      "No sub-limits on room rent",
      "Alternative treatments like AYUSH covered",
      "Refill benefit - restore full cover once a year",
      "Health check-up every 2 years",
    ],
  },
  {
    name: "Aditya Birla Activ Health Platinum Enhanced",
    provider: "Aditya Birla Health Insurance",
    price: "₹10,384",
    duration: "per year",
    coverage: "₹5 Lakh",
    features: [
      "Chronic management program",
      "Health returns up to 30% of premium",
      "100% reload of sum insured",
      "Day 1 coverage for chronic conditions",
      "In-patient hospitalization",
      "Pre & post hospitalization expenses",
    ],
  },
]

export default function InsurancePlansPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Insurance Plans</h1>
        <p className="text-xl text-gray-600">Comprehensive insurance coverage options from leading providers</p>
      </div>

      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=2070&h=1380"
          alt="Insurance Plans"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 flex items-center">
          <div className="max-w-xl text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Secure Your Future with Top Insurance Plans</h2>
            <p className="text-lg mb-6">
              Compare and choose from a range of comprehensive health insurance plans offered by leading insurance
              providers in India.
            </p>
            <Button size="lg" variant="secondary">
              Compare Plans
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {insurancePlans.map((plan) => (
          <Card key={plan.name} className="relative">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="text-lg font-semibold text-gray-600">{plan.provider}</div>
              <div className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal text-gray-600"> {plan.duration}</span>
              </div>
              <div className="text-lg font-semibold text-blue-600">Coverage: {plan.coverage}</div>
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
              <Button className="w-full mt-6" asChild>
                <Link href="/products/insurance-plans/get-quote">Get Quote</Link>
              </Button>
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
            <h3 className="font-semibold mb-2">What factors affect my insurance premium?</h3>
            <p className="text-gray-600">
              Insurance premiums are typically based on factors such as age, sum insured, pre-existing conditions,
              location, and lifestyle habits. Some insurers also consider factors like occupation and family medical
              history.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What is a waiting period in health insurance?</h3>
            <p className="text-gray-600">
              A waiting period is a specified time frame during which you cannot claim benefits for certain conditions
              or treatments. For example, many policies have a 30-day waiting period for all diseases and 2-4 years for
              pre-existing conditions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I port my existing health insurance policy?</h3>
            <p className="text-gray-600">
              Yes, the Insurance Regulatory and Development Authority of India (IRDAI) allows you to port your existing
              health insurance policy to a new insurer. You can transfer your waiting periods and accumulated bonuses.
              The process should be initiated at least 45 days before your policy renewal date.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

