import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { EventList } from "@/components/event-list"

export default function TaxOptimizationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Tax Optimization</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tax Optimization Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-lg mb-6">
            Our tax optimization services are designed to help you minimize your tax liabilities while maximizing your
            wealth. We use advanced strategies and stay up-to-date with the latest tax laws to ensure you're taking
            advantage of all available opportunities for tax savings.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Tax Optimization Services Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Comprehensive tax planning</li>
            <li>Investment tax strategies</li>
            <li>Estate and gift tax planning</li>
            <li>Business tax optimization</li>
            <li>Tax-efficient charitable giving</li>
            <li>International tax planning</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Optimize Your Taxes</Link>
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
                  <Link href="/news/tax-law-changes" className="text-blue-600 hover:underline">
                    Recent Tax Law Changes: What You Need to Know
                  </Link>
                </li>
                <li>
                  <Link href="/news/tax-efficient-investing" className="text-blue-600 hover:underline">
                    Tax-Efficient Investing: Strategies for High Net Worth Individuals
                  </Link>
                </li>
                <li>
                  <Link href="/news/international-tax-planning" className="text-blue-600 hover:underline">
                    International Tax Planning: Navigating Global Wealth
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
          <Link href="/wealth-management/retirement-planning">Retirement Planning</Link>
        </Button>
        <Button asChild variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
          <Link href="/wealth-management/financial-analysis">Financial Analysis</Link>
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Tax Optimization Insights</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Tax Optimization Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Maximize contributions to tax-advantaged accounts</li>
              <li>Implement tax-loss harvesting in your investment portfolio</li>
              <li>Consider Roth IRA conversions for long-term tax benefits</li>
              <li>Utilize charitable giving strategies for tax deductions</li>
              <li>Explore opportunities for business entity structuring</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

