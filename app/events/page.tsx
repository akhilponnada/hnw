"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
  {
    id: 1,
    title: "HNW Mega Health Camp - March 2025",
    description:
      "Join us for the grand launch of HNW Club Card. Experience free consultations from 100+ hospitals, free surgeries, and medicine distribution. Expected attendance: 100,000+ people.",
    date: "2025-03-15",
    time: "09:00 AM - 06:00 PM",
    location: "New Delhi, India",
    image: "/images/hnw-mega-health-camp.jpg",
    category: "Flagship Event",
  },
  {
    id: 2,
    title: "HNW Global Health Summit 2024",
    description:
      "Annual gathering of healthcare experts discussing the future of integrated health and wealth management.",
    date: "2024-10-15",
    time: "09:00 AM - 06:00 PM",
    location: "Dubai, UAE",
    image: "/images/hnw-global-health-summit.jpg",
    category: "Conference",
  },
  {
    id: 3,
    title: "HNW Mental Wellness Day 2024",
    description: "A comprehensive event focusing on mental health awareness and holistic wellness approaches.",
    date: "2024-10-10",
    time: "Various Times",
    location: "Multiple Locations",
    image: "/images/hnw-mental-wellness-day.jpg",
    category: "Awareness Campaign",
  },
  {
    id: 4,
    title: "HNW Digital Health Congress",
    description:
      "Leading conference on healthcare technology innovation and digital transformation in healthcare delivery.",
    date: "2024-05-28",
    time: "09:00 AM - 05:00 PM",
    location: "Singapore",
    image: "/images/hnw-digital-health-congress.jpg",
    category: "Conference",
  },
  {
    id: 5,
    title: "HNW Preventive Healthcare Symposium",
    description: "Expert discussions on preventive healthcare strategies and wellness programs.",
    date: "2024-08-06",
    time: "08:30 AM - 06:00 PM",
    location: "Mumbai, India",
    image: "/images/hnw-preventive-healthcare-symposium.jpg",
    category: "Conference",
  },
]

const newsItems = [
  {
    id: 1,
    title: "HNW.one Launches Revolutionary Health Card",
    description: "New membership card offers unprecedented healthcare benefits and coverage.",
    date: "2024-01-26",
  },
  {
    id: 2,
    title: "Global Partnership Network Expands",
    description: "HNW.one welcomes 50 new healthcare partners across major cities.",
    date: "2024-01-25",
  },
  {
    id: 3,
    title: "AI-Powered Health Monitoring Launch",
    description: "HNW.one introduces cutting-edge AI health monitoring system for members.",
    date: "2024-01-22",
  },
  {
    id: 4,
    title: "Mega Health Camp Announcement",
    description: "HNW.one to organize largest health camp in March 2025.",
    date: "2024-01-20",
  },
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredEvents = selectedCategory ? events.filter((event) => event.category === selectedCategory) : events

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HNW.one Events</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="mb-6 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {Array.from(new Set(events.map((event) => event.category))).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge variant={event.category === "Flagship Event" ? "destructive" : "default"}>
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{event.description}</CardDescription>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="mr-2 h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:w-1/4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Special Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <Image
                  src="/images/hnw-membership-ad.jpg"
                  alt="HNW.one Membership Offer"
                  width={400}
                  height={225}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-semibold mb-2">Join HNW.one Today!</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get exclusive access to premium healthcare services and events. Limited time offer: 20% off on annual
                membership!
              </p>
              <Button className="w-full">Become a Member</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Latest Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {newsItems.map((item) => (
                  <div key={item.id} className="border-b pb-4 last:border-b-0">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All News
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

