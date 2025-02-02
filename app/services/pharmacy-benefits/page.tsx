import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { EventList } from "@/components/event-list"
import { PhoneIcon as WhatsApp, Phone } from "lucide-react"

export default function PharmacyBenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Pharmacy Benefits</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=2070&h=1380"
            alt="Pharmacy services"
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />
          <p className="text-lg mb-6">
            HNW.one's pharmacy benefits program offers our members access to a wide range of medications at discounted
            prices. With our extensive network of partner pharmacies and home delivery options, managing your
            prescriptions has never been easier.
          </p>
          <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Discounts on prescription medications</li>
            <li>Access to a wide network of partner pharmacies</li>
            <li>Home delivery service for added convenience</li>
            <li>24/7 pharmacist consultation</li>
            <li>Automatic refill reminders</li>
          </ul>
          <Button asChild>
            <Link href="/pharmacy-locator">Find a Pharmacy</Link>
          </Button>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Understanding Your Pharmacy Benefits</h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zyWuyv5U5GY"
                title="Understanding Your Pharmacy Benefits"
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
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Present your HNW.one membership card at a partner pharmacy</li>
                <li>Receive instant discounts on eligible medications</li>
                <li>For home delivery, order through our app or website</li>
                <li>Track your order and receive notifications</li>
                <li>Medications delivered right to your doorstep</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Featured Service</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Medication Management App</h3>
              <p className="mb-4">
                Our app helps you manage your medications, set reminders, and track your health progress. Download now
                for a smarter way to manage your health.
              </p>
              <Button variant="outline">Download App</Button>
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

