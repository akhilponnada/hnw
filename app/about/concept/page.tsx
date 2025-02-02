import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ConceptPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">The HNW.one Concept</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&h=1380"
            alt="HNW.one Concept"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-6">
            The HNW.one concept is built on the fundamental belief that health and wealth are interconnected pillars of
            a fulfilling life. We've created a unique ecosystem that seamlessly blends premium healthcare services with
            expert wealth management, providing our members with a holistic approach to well-being.
          </p>
          <p className="text-lg mb-6">
            Our innovative model goes beyond traditional healthcare and financial services. We leverage cutting-edge
            technology, a global network of top-tier medical facilities, and a team of expert wealth advisors to offer a
            comprehensive solution that caters to both your health and financial needs.
          </p>
          <Button asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Aspects of Our Concept</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Integrated Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We offer a seamless integration of healthcare and wealth management services, ensuring that your
                physical and financial well-being are always in sync.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our worldwide network of healthcare providers and financial experts ensures that you have access to
                top-quality services wherever you are.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Personalized Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We tailor our services to your unique needs, providing personalized healthcare plans and wealth
                management strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The HNW.one Concept Explained</h2>
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="HNW.one Concept Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/about/overview">Back to Overview</Link>
        </Button>
      </div>
    </div>
  )
}

