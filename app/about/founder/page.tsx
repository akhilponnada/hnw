import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2070&h=768"
          alt="HNW.one Founder"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Founder</h1>
          <p className="text-xl max-w-3xl">The visionary behind HNW.one</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=687&h=1031"
                alt="Dr. Alexander Wright"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Dr. Alexander Wright</h2>
              <p className="text-xl text-gray-700 mb-6">Founder & CEO of HNW.one</p>
              <p className="text-gray-600 mb-6">
                Dr. Alexander Wright is a visionary healthcare entrepreneur with over two decades of experience in
                global health management. His passion for accessible, high-quality healthcare led him to found HNW.one,
                revolutionizing the way people access medical services worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                With a background in both medicine and business administration, Dr. Wright brings a unique perspective
                to the healthcare industry, combining medical expertise with innovative business strategies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Education:</span>
                  <span>M.D. from Harvard Medical School, MBA from Stanford Graduate School of Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Previous Roles:</span>
                  <span>Chief of Medicine at Global Health Institute, Healthcare Consultant at McKinsey & Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Founder's Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Global Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "My vision for HNW.one is to create a world where quality healthcare is not limited by geographical
                  boundaries. We're building a global network that allows our members to access top-tier medical
                  services anywhere, anytime."
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Innovative Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "We're leveraging cutting-edge technology to revolutionize healthcare delivery. From telemedicine to
                  AI-driven diagnostics, we're committed to bringing the future of healthcare to our members today."
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Preventive Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "At HNW.one, we believe in the power of prevention. Our goal is to shift the focus from treating
                  illnesses to maintaining wellness, empowering our members to lead healthier, more fulfilling lives."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">A Message from Our Founder</h2>
          <blockquote className="text-xl italic text-gray-700 mb-8">
            "HNW.one is more than just a healthcare company. It's a movement towards a healthier, more connected world.
            We're not just providing services; we're building a global community dedicated to wellness and mutual
            support. Together, we can redefine what it means to live a healthy life in the 21st century."
          </blockquote>
          <p className="text-gray-600">- Dr. Alexander Wright, Founder & CEO</p>
        </div>
      </section>
    </div>
  )
}

