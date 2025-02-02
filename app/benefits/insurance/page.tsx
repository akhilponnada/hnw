import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsurancePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Health Insurance Coverage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/benefits/insurance-thumb.jpg"
            alt="Health Insurance Coverage"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Comprehensive coverage starting from Rs. 50,000</h2>
          <p className="text-lg mb-4">
            Our health insurance plans provide extensive coverage to ensure you're protected against unexpected medical
            expenses. With plans starting from Rs. 50,000, we offer a range of options to suit your needs and budget.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Coverage for hospitalization and medical procedures</li>
            <li>Cashless treatment at network hospitals</li>
            <li>Coverage for pre and post-hospitalization expenses</li>
            <li>Options for additional riders like critical illness cover</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

