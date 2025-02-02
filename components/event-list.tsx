import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Health Symposium",
    date: "2023-09-15",
    location: "Virtual Event",
  },
  {
    id: 2,
    title: "Wellness Workshop",
    date: "2023-09-22",
    location: "New York City",
  },
  {
    id: 3,
    title: "Healthcare Innovation Summit",
    date: "2023-10-05",
    location: "San Francisco",
  },
]

export function EventList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="flex items-start space-x-4">
              <CalendarIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full mt-4">
          <Link href="/events">View All Events</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

