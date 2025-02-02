import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
  {
    title: "HNW.one Expands Partner Network",
    date: "2023-05-15",
    description: "HNW.one welcomes 50 new healthcare partners across various specialties.",
  },
  {
    title: "New Telehealth Integration",
    date: "2023-05-10",
    description: "HNW.one partners with leading telehealth providers to enhance remote care options.",
  },
  {
    title: "Partner Success Story: City General Hospital",
    date: "2023-05-05",
    description: "Learn how City General Hospital improved patient care through our partnership.",
  },
]

const upcomingEvents = [
  {
    title: "Annual Healthcare Innovation Summit",
    date: "2023-06-15",
    location: "Virtual Event",
  },
  {
    title: "Partner Networking Mixer",
    date: "2023-06-22",
    location: "New York City",
  },
  {
    title: "Webinar: Optimizing Your HNW.one Partnership",
    date: "2023-06-30",
    location: "Online",
  },
]

export function NewsAndEvents() {
  return (
    <div className="space-y-6">
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
                <p className="text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
          <Button className="mt-4" variant="outline" asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </CardContent>
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
                <p className="text-sm">{event.location}</p>
              </li>
            ))}
          </ul>
          <Button className="mt-4" variant="outline" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

