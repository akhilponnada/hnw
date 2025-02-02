import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { EventList } from "@/components/event-list"

export default function RetirementPlanningPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Retirement Planning</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Retirement Planning Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-lg mb-6">
            Our retirement planning services are designed to help you build a secure financial future. We work with you
            to create a comprehensive retirement strategy that takes into account your lifestyle goals, expected
            expenses, and potential healthcare needs.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Retirement Planning Services Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Retirement income projections</li>
            <li>Social Security optimization</li>
            <li>Pension and 401(k) analysis</li>
            <li>Long-term care planning</li>
            <li>Estate planning considerations</li>
            <li>Regular retirement plan reviews and adjustments</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Start Your Retirement Plan</Link>
          </Button>
        </div>
        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link href="/news/retirement-age-trends" className="text-blue-600 hover:underline">
                    Changing Retirement Age: What It Means for You
                  </Link>
                </li>
                <li>
                  <Link href="/news/healthcare-costs-retirement" className="text-blue-600 hover:underline">
                    Healthcare Costs in Retirement: Planning Ahead
                  </Link>
                </li>
                <li>
                  <Link href="/news/roth-ira-benefits" className="text-blue-600 hover:underline">
                    Maximizing Your Roth IRA: Strategies for Tax-Free Growth
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <EventList />
        </div>
      </div>
      <div className="mt-8 mb-12 space-x-4">
        <Button asChild variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
          <Link href="/wealth-management/investment-planning">Investment Planning</Link>
        </Button>
        <Button asChild variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
          <Link href="/wealth-management/financial-analysis">Financial Analysis</Link>
        </Button>
        <Button asChild variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
          <Link href="/wealth-management/tax-optimization">Tax Optimization</Link>
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Retirement Planning Insights</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Retirement Planning Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Start saving early to take advantage of compound interest</li>
              <li>Diversify your retirement portfolio to manage risk</li>
              <li>Consider healthcare costs in your retirement budget</li>
              <li>Understand and optimize your Social Security benefits</li>
              <li>Review and adjust your retirement plan regularly</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

