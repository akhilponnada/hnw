import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { EventList } from "@/components/event-list"
import { PhoneIcon as WhatsApp, Phone } from "lucide-react"

export default function HospitalNetworkPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Hospital Network</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2070&h=1380"
            alt="Modern hospital facility"
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />
          <p className="text-lg mb-6">
            HNW.one's extensive hospital network provides our members with access to top-tier medical facilities across
            the globe. Our carefully curated network ensures you receive the best possible care, wherever you are.
          </p>
          <h2 className="text-2xl font-bold mb-4">Network Highlights</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Over 500 partner hospitals worldwide</li>
            <li>Leading specialists and medical professionals</li>
            <li>State-of-the-art medical equipment</li>
            <li>Seamless admission process for HNW.one members</li>
            <li>Cashless hospitalization options</li>
          </ul>
          <Button asChild>
            <Link href="/hospital-locator">Find a Hospital</Link>
          </Button>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Explore Our Global Hospital Network</h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JZjAg6fK-BQ"
                title="Explore Our Global Hospital Network"
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
              <CardTitle>Featured Hospitals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Mayo Clinic, USA</li>
                <li>Cleveland Clinic, USA</li>
                <li>Johns Hopkins Hospital, USA</li>
                <li>Singapore General Hospital, Singapore</li>
                <li>Charité - Universitätsmedizin Berlin, Germany</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Member Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Priority appointments</li>
                <li>Discounted rates on services</li>
                <li>Dedicated case managers</li>
                <li>Assistance with medical travel</li>
                <li>Second opinion services</li>
              </ul>
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

