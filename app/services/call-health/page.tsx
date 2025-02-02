import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { EventList } from "@/components/event-list"
import { PhoneIcon as WhatsApp, Phone } from "lucide-react"

const callHealthServices = [
  { name: "Doctor Visits", description: "Expert physicians at your doorstep" },
  { name: "Physiotherapy", description: "Professional physiotherapy sessions at home" },
  { name: "Lab Tests", description: "Convenient home sample collection for lab tests" },
  { name: "Nursing Care", description: "Skilled nursing care in the comfort of your home" },
  { name: "Patient Care", description: "Dedicated caregivers for personalized attention" },
]

const newsItems = [
  { title: "HNW.one Expands Call Health Services to 10 New Cities", date: "2023-05-15" },
  { title: "New Partnership with Leading Home Healthcare Providers", date: "2023-05-10" },
  { title: "Call Health Customer Satisfaction Reaches 98%", date: "2023-05-05" },
]

export default function CallHealthPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Call Health Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Image
            src="/images/call-health-hero.jpg"
            alt="Call Health Services"
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />
          <p className="text-lg mb-6">
            HNW.one's Call Health services bring premium healthcare directly to your doorstep. Our members enjoy
            discounted rates on a wide range of home healthcare services, ensuring comfort and convenience without
            compromising on quality.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {callHealthServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild>
            <Link href="/contact">Book a Service</Link>
          </Button>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Experience Call Health Services</h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Experience Call Health Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <WhatsApp className="mr-2 h-5 w-5 text-green-500" />
                  <span>WhatsApp: +91 9667660773</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-500" />
                  <span>24/7 Customer Care: 1800-123-4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Call Health Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Discounted rates for HNW.one members</li>
                <li>Convenient, at-home healthcare services</li>
                <li>Qualified and experienced healthcare professionals</li>
                <li>Flexible scheduling to suit your needs</li>
                <li>Comprehensive range of services</li>
                <li>Seamless integration with HNW.one health records</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {newsItems.map((item, index) => (
                  <li key={index}>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <EventList />
        </div>
      </div>
    </div>
  )
}

