import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { EventList } from "@/components/event-list"
import { PhoneIcon as WhatsApp, Phone } from "lucide-react"

export default function DiagnosticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Diagnostic Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2070&h=1380"
            alt="Advanced diagnostic equipment"
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />
          <p className="text-lg mb-6">
            Our comprehensive diagnostic services offer a wide range of laboratory tests and imaging procedures. With
            state-of-the-art equipment and expert technicians, we ensure accurate and timely results for better health
            management.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Services Include</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Blood tests and analysis</li>
            <li>X-rays and CT scans</li>
            <li>MRI scans</li>
            <li>Ultrasound examinations</li>
            <li>Genetic testing</li>
            <li>Pathology services</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Book a Diagnostic Test</Link>
          </Button>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Understanding Diagnostic Tests</h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9BBH6TOpZj8"
                title="Understanding Diagnostic Tests"
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
              <CardTitle>Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Advanced technology for accurate results</li>
                <li>Quick turnaround times</li>
                <li>Convenient locations</li>
                <li>Experienced healthcare professionals</li>
                <li>Integration with HNW.one health records</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Featured Test</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Comprehensive Health Screening</h3>
              <p className="mb-4">
                Our all-inclusive health screening package covers over 50 essential parameters to give you a complete
                picture of your health status.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services/diagnostics/health-screening">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
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
          <EventList />
        </div>
      </div>
    </div>
  )
}

