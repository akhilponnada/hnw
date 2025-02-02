import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VisionMissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&h=768"
          alt="Vision and Mission"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision & Mission</h1>
          <p className="text-xl max-w-3xl">Shaping the future of global healthcare</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-6">
                  To become the world's leading health and wealth club, setting new standards in healthcare service
                  delivery and member satisfaction.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Revolutionize global healthcare accessibility</li>
                  <li>Empower individuals to take control of their health</li>
                  <li>Foster a community of health-conscious global citizens</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-6">
                  To revolutionize healthcare accessibility and delivery through innovative solutions, ensuring quality
                  medical services are available to all our members globally.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Provide seamless access to world-class healthcare services</li>
                  <li>Leverage technology to enhance healthcare delivery</li>
                  <li>Cultivate partnerships with leading medical institutions worldwide</li>
                  <li>Promote preventive care and wellness initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "Continuously seeking new ways to improve healthcare delivery" },
              { title: "Integrity", description: "Upholding the highest ethical standards in all our operations" },
              { title: "Compassion", description: "Putting our members' well-being at the heart of everything we do" },
              { title: "Excellence", description: "Striving for the highest quality in all our services" },
              { title: "Collaboration", description: "Fostering partnerships to create a global healthcare network" },
              { title: "Empowerment", description: "Enabling our members to take control of their health journey" },
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

