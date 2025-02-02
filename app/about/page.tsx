import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80"
          alt="About HNW.one"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HNW.one</h1>
          <p className="text-xl max-w-3xl">Leading the future of healthcare with innovation and excellence</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                <p className="text-gray-600">
                  To revolutionize healthcare accessibility and delivery through innovative solutions, ensuring quality
                  medical services are available to all our members globally.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
                <p className="text-gray-600">
                  To become the world's leading health and wealth club, setting new standards in healthcare service
                  delivery and member satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Company Overview</h2>
              <p className="text-gray-600">
                HNW.one is a pioneering healthcare solutions provider powered by Medipax Healthcare Solutions Pvt Ltd.
                We combine cutting-edge technology with extensive medical expertise to deliver comprehensive healthcare
                services to our members.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-leading healthcare solutions",
                  "Global network of medical professionals",
                  "Advanced technological infrastructure",
                  "Customer-centric approach",
                  "Continuous innovation and improvement",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Company Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

