import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Check, Users, Calendar, BarChartIcon as ChartBar, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Efficiently manage patient records, appointments, and treatment plans in one place.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Streamline appointment booking and reduce no-shows with automated reminders.",
  },
  {
    icon: ChartBar,
    title: "Analytics and Reporting",
    description: "Gain insights into your practice with comprehensive analytics and customizable reports.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Ensure patient data privacy and compliance with industry-standard security measures.",
  },
]

export default function HealthcareCRMPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Healthcare CRM</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your healthcare practice with our comprehensive Customer Relationship Management solution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070&h=1380"
            alt="Healthcare CRM"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Transform Your Healthcare Practice</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our Healthcare CRM solution is designed to help you manage patient relationships, streamline operations, and
            improve overall care delivery. With powerful features and intuitive interfaces, you can focus on what
            matters most - your patients.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Our Healthcare CRM?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">Tailored for Healthcare</h3>
              <p className="text-gray-600">Designed specifically for the unique needs of healthcare providers.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">Easy Integration</h3>
              <p className="text-gray-600">Seamlessly integrates with your existing systems and workflows.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">Scalable Solution</h3>
              <p className="text-gray-600">Grows with your practice, from small clinics to large hospitals.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to ensure smooth operations.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

