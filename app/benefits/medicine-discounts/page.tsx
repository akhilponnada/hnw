import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MedicineDiscountsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Medicine Discounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/benefits/medicine-thumb.jpg"
            alt="Medicine Discounts"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Up to 30% discount on medicines</h2>
          <p className="text-lg mb-4">
            Save on your medical expenses with our exclusive medicine discount program. Enjoy up to 30% off on a wide
            range of prescription and over-the-counter medications.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Discounts applicable at partner pharmacies nationwide</li>
            <li>Online ordering and home delivery options available</li>
            <li>Regular offers and additional discounts on selected medicines</li>
            <li>Easy-to-use discount card or mobile app for instant savings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

