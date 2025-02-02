import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, PiggyBank, BarChart, DollarSign } from "lucide-react"

export function WealthManagementSection({ className = "" }) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Wealth Management Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your financial future with our comprehensive wealth management solutions, designed to complement your
            healthcare journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Image
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=300&h=200"
                alt="Investment Planning"
                width={300}
                height={200}
                className="rounded-t-lg"
              />
              <CardTitle className="mt-4">Investment Planning</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="mb-4 flex-grow">
                Tailored investment strategies to grow your wealth and secure your financial future.
              </p>
              <Button asChild className="w-full mt-auto">
                <Link href="/wealth-management/investment-planning">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Image
                src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=300&h=200"
                alt="Retirement Planning"
                width={300}
                height={200}
                className="rounded-t-lg"
              />
              <CardTitle className="mt-4">Retirement Planning</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="mb-4 flex-grow">
                Comprehensive retirement solutions to ensure a comfortable and worry-free retirement.
              </p>
              <Button asChild className="w-full mt-auto">
                <Link href="/wealth-management/retirement-planning">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300&h=200"
                alt="Financial Analysis"
                width={300}
                height={200}
                className="rounded-t-lg"
              />
              <CardTitle className="mt-4">Financial Analysis</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="mb-4 flex-grow">
                In-depth financial analysis and reporting to help you make informed decisions.
              </p>
              <Button asChild className="w-full mt-auto">
                <Link href="/wealth-management/financial-analysis">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Image
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=300&h=200"
                alt="Tax Optimization"
                width={300}
                height={200}
                className="rounded-t-lg"
              />
              <CardTitle className="mt-4">Tax Optimization</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="mb-4 flex-grow">
                Strategic tax planning to maximize your wealth and minimize tax liabilities.
              </p>
              <Button asChild className="w-full mt-auto">
                <Link href="/wealth-management/tax-optimization">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

