import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { EventList } from "@/components/event-list"

export default function FinancialAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Financial Analysis</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Financial Analysis Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-lg mb-6">
            Our financial analysis services provide you with a comprehensive understanding of your current financial
            situation and help you make informed decisions about your future. We use advanced tools and techniques to
            analyze your finances and provide actionable insights.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Financial Analysis Services Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Comprehensive financial health check</li>
            <li>Cash flow analysis and budgeting</li>
            <li>Debt management strategies</li>
            <li>Investment portfolio analysis</li>
            <li>Risk assessment and management</li>
            <li>Financial goal setting and tracking</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Request a Financial Analysis</Link>
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
                  <Link href="/news/ai-financial-analysis" className="text-blue-600 hover:underline">
                    AI in Financial Analysis: The Future of Personal Finance
                  </Link>
                </li>
                <li>
                  <Link href="/news/financial-ratios-explained" className="text-blue-600 hover:underline">
                    Key Financial Ratios Explained: What They Mean for You
                  </Link>
                </li>
                <li>
                  <Link href="/news/behavioral-finance-insights" className="text-blue-600 hover:underline">
                    Behavioral Finance: Understanding Your Money Mindset
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
          <Link href="/wealth-management/tax-optimization">Tax Optimization</Link>
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Financial Analysis Insights</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Financial Analysis Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Ratio analysis for assessing financial health</li>
              <li>Trend analysis to identify patterns over time</li>
              <li>Benchmarking against industry standards</li>
              <li>Cash flow forecasting for better financial planning</li>
              <li>Scenario analysis to prepare for various financial outcomes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

