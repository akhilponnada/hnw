import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const medicalDevices = [
  {
    name: "Smart Blood Pressure Monitor",
    description: "Accurate and easy-to-use wireless blood pressure monitor with smartphone connectivity.",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Advanced Glucose Meter",
    description: "Continuous glucose monitoring system with real-time alerts and smartphone integration.",
    price: "₹7,999",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Portable ECG Monitor",
    description: "Compact ECG device for on-the-go heart health monitoring with cloud storage and doctor sharing.",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3cf7d77f?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Smart Scale",
    description: "Wi-Fi enabled scale that measures weight, body fat, muscle mass, and more.",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Sleep Apnea Monitor",
    description: "Non-invasive sleep apnea detection and monitoring device for improved sleep quality.",
    price: "₹15,999",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    name: "Digital Stethoscope",
    description: "Advanced digital stethoscope with noise cancellation and recording capabilities.",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3cf7d77f?auto=format&fit=crop&q=80&w=300&h=200",
  },
]

export default function MedicalDevicesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Medical Devices</h1>
        <p className="text-xl text-gray-600">High-quality medical devices for home healthcare needs</p>
      </div>

      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1583912267550-d44c9c195cf9?auto=format&fit=crop&q=80&w=2070&h=1380"
          alt="Medical Devices"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 flex items-center">
          <div className="max-w-xl text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Advanced Healthcare at Your Fingertips</h2>
            <p className="text-lg mb-6">
              Discover our range of cutting-edge medical devices designed for accurate monitoring and improved health
              management at home.
            </p>
            <Button size="lg" variant="secondary">
              Explore Devices
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicalDevices.map((device) => (
          <Card key={device.name} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={device.image || "/placeholder.svg"}
                alt={device.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{device.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{device.description}</p>
              <p className="text-2xl font-bold text-primary">{device.price}</p>
            </CardContent>
            <div className="p-4 pt-0 mt-auto">
              <Button className="w-full" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Our Medical Devices?</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <h3 className="font-semibold mb-2">Cutting-edge Technology</h3>
            <p className="text-gray-600">
              Our devices incorporate the latest advancements in medical technology for accurate and reliable results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Designed with user-friendliness in mind, our devices are simple to operate for all age groups.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connectivity and Data Sharing</h3>
            <p className="text-gray-600">
              Most of our devices offer seamless connectivity with smartphones and easy data sharing with healthcare
              providers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Warranty and Support</h3>
            <p className="text-gray-600">
              All devices come with a comprehensive warranty and dedicated customer support for peace of mind.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

