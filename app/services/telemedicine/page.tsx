import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Globe, Shield, Video } from "lucide-react"
import Image from "next/image"

const features = [
  { icon: Clock, title: "24/7 Availability", description: "Access healthcare professionals anytime, day or night" },
  { icon: Globe, title: "Global Network", description: "Connect with doctors from around the world" },
  { icon: Video, title: "HD Video Consultations", description: "Crystal-clear video calls for accurate diagnoses" },
  { icon: Shield, title: "Secure & Confidential", description: "Your health information is protected and private" },
]

export default function TelemedicinePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">24/7 Telemedicine Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200&h=800"
            alt="Telemedicine Service"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Instant Access to Healthcare Professionals</CardTitle>
              <CardDescription>Get medical advice from the comfort of your home</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <feature.icon className="h-12 w-12 text-primary mb-2" />
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button size="lg">Start a Consultation</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

