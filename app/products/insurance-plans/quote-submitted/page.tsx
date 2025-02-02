import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function QuoteSubmittedPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Request</h1>
      <p className="text-xl mb-8">
        We've received your insurance quote request. Our team will review your information and get back to you shortly
        with a personalized quote.
      </p>
      <Button asChild>
        <Link href="/products/insurance-plans">Back to Insurance Plans</Link>
      </Button>
    </div>
  )
}

