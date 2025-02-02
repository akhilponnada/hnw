import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConsultationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Unlimited Consultations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/benefits/consultations-thumb.jpg"
            alt="Unlimited Consultations"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Free consultations round the clock</h2>
          <p className="text-lg mb-4">
            With our unlimited consultation benefit, you have access to medical professionals 24/7. Whether it's a minor
            concern or a major health issue, our team of expert doctors is always available to provide guidance and
            support.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>24/7 access to medical professionals</li>
            <li>Both in-person and telemedicine options available</li>
            <li>No limit on the number of consultations</li>
            <li>Specialized doctors for various medical fields</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

