import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { EventList } from "@/components/event-list"

export default function InvestmentPlanningPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Investment Planning</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Investment Planning Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-lg mb-6">
            Our investment planning services are designed to help you achieve your financial goals through carefully
            crafted strategies tailored to your unique situation. We take into account your risk tolerance, time
            horizon, and financial objectives to create a diversified portfolio that aligns with your needs.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Investment Planning Services Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Comprehensive financial assessment</li>
            <li>Asset allocation strategies</li>
            <li>Risk management and diversification</li>
            <li>Regular portfolio rebalancing</li>
            <li>Tax-efficient investment solutions</li>
            <li>Ongoing performance monitoring and reporting</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Schedule a Consultation</Link>
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
                  <Link href="/news/market-outlook-2023" className="text-blue-600 hover:underline">
                    Market Outlook 2023: Navigating Uncertainty
                  </Link>
                </li>
                <li>
                  <Link href="/news/esg-investing-trends" className="text-blue-600 hover:underline">
                    The Rise of ESG Investing: What You Need to Know
                  </Link>
                </li>
                <li>
                  <Link href="/news/tech-stocks-analysis" className="text-blue-600 hover:underline">
                    Tech Stocks: Bubble or Opportunity?
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
          <Link href="/wealth-management/retirement-planning">Retirement Planning</Link>
        </Button>
        <Button asChild variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
          <Link href="/wealth-management/financial-analysis">Financial Analysis</Link>
        </Button>
        <Button asChild variant="outline" className="hover:bg-orange-500 hover:text-white transition-colors">
          <Link href="/wealth-management/tax-optimization">Tax Optimization</Link>
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Wealth Information</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Wealth Building Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Diversify your investment portfolio</li>
              <li>Start investing early to leverage compound interest</li>
              <li>Regularly review and rebalance your investments</li>
              <li>Consider tax-efficient investment vehicles</li>
              <li>Stay informed about market trends and economic indicators</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

