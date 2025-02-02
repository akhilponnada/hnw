import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function OverviewPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About HNW.one - Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-lg mb-6">
            HNW.one is a pioneering global health and wealth club, dedicated to providing comprehensive healthcare
            solutions and financial well-being services to our members worldwide. Our mission is to revolutionize the
            way people access and experience healthcare while simultaneously helping them build and protect their
            wealth.
          </p>
          <p className="text-lg mb-6">
            Founded on the principle that health and wealth are intrinsically linked, we offer a unique blend of premium
            healthcare services, cutting-edge medical facilities, and expert wealth management advice. Our global
            network of healthcare providers ensures that our members receive top-quality medical care wherever they are
            in the world.
          </p>
          <Button asChild>
            <Link href="/membership">Join HNW.one Today</Link>
          </Button>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070&h=1380"
            alt="HNW.one Global Network"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Excellence in Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to providing the highest standard of healthcare services, leveraging cutting-edge
                medical technology and expertise.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our extensive network ensures that quality healthcare is accessible to our members, no matter where they
                are in the world.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Holistic Well-being</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We believe in a comprehensive approach to well-being, integrating physical health, mental wellness, and
                financial stability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16 w-[435%] max-w-full mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Learn More About HNW.one</h2>
        <div className="h-[300px]">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="HNW.one Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/about/concept">Explore Our Concept</Link>
        </Button>
      </div>
    </div>
  )
}

