import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CityGeneralHospitalPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">City General Hospital</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="City General Hospital"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>About City General Hospital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                City General Hospital is a leading healthcare institution in our network, providing comprehensive
                medical services to the community for over 50 years. With state-of-the-art facilities and a team of
                highly skilled medical professionals, City General Hospital is committed to delivering exceptional
                patient care.
              </p>
              <h2 className="text-2xl font-semibold mb-2">Key Specialties</h2>
              <ul className="list-disc pl-5 mb-4">
                <li>Cardiology</li>
                <li>Neurology</li>
                <li>Oncology</li>
                <li>Orthopedics</li>
                <li>Pediatrics</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Contact for Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Hospital Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Address:</strong> 123 Medical Center Blvd, Anytown, ST 12345
              </p>
              <p>
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p>
                <strong>Emergency:</strong> (555) 987-6543
              </p>
              <p>
                <strong>Website:</strong> www.citygeneralhospital.com
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>HNW.one Member Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Priority appointment scheduling</li>
                <li>Discounted rates on select procedures</li>
                <li>Access to exclusive health screenings</li>
                <li>Dedicated HNW.one liaison for seamless care coordination</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

