import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Telehealth",
    description: "24/7 access to healthcare professionals through video consultations",
    image: "/images/telehealth.jpg",
    link: "/services/telehealth",
  },
  {
    title: "Diagnostics",
    description: "Comprehensive range of laboratory and imaging tests",
    image: "/images/diagnostics.jpg",
    link: "/services/diagnostics",
  },
  {
    title: "Hospital Network",
    description: "Access to our extensive network of partner hospitals",
    image: "/images/hospital-network.jpg",
    link: "/services/hospital-network",
  },
  {
    title: "Pharmacy Benefits",
    description: "Discounted medications and home delivery services",
    image: "/images/pharmacy.jpg",
    link: "/services/pharmacy-benefits",
  },
]

const newsItems = [
  { title: "HNW.one Expands Telehealth Services", date: "2023-05-15" },
  { title: "New Partnership with Leading Diagnostic Labs", date: "2023-05-10" },
  { title: "Introducing AI-Powered Health Monitoring", date: "2023-05-05" },
]

const upcomingEvents = [
  { title: "Virtual Health Fair", date: "2023-06-15" },
  { title: "Wellness Webinar Series", date: "2023-06-22" },
  { title: "Annual Health Innovation Summit", date: "2023-07-10" },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Discover our comprehensive range of healthcare services designed to meet all your health needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <div className="relative h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={service.link}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Latest News</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {newsItems.map((item, index) => (
                <li key={index}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All News
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li key={index}>
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Events
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Featured Video</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

