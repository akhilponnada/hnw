import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Building2, Users, HeartPulse, Stethoscope, Globe, Briefcase, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const corporatePackages = [
  {
    name: "Basic Care",
    price: "₹999",
    duration: "per employee / year",
    features: [
      "Annual health check-ups",
      "24/7 telemedicine support",
      "Discounted medicines",
      "Basic life insurance coverage",
    ],
    icon: Building2,
  },
  {
    name: "Premium Health",
    price: "₹1,999",
    duration: "per employee / year",
    features: [
      "Comprehensive health check-ups",
      "24/7 telemedicine with specialists",
      "Medication delivery",
      "Enhanced life and disability insurance",
      "Mental health support",
    ],
    icon: HeartPulse,
  },
  {
    name: "Executive Wellness",
    price: "₹4,999",
    duration: "per employee / year",
    features: [
      "Executive health screening",
      "Personalized wellness programs",
      "Priority specialist consultations",
      "Comprehensive insurance coverage",
      "International second opinions",
      "Executive mental health support",
    ],
    icon: Briefcase,
  },
  {
    name: "Global Coverage",
    price: "₹7,999",
    duration: "per employee / year",
    features: [
      "Worldwide health coverage",
      "International hospital network access",
      "Emergency medical evacuation",
      "Expatriate health support",
      "Multi-lingual telemedicine services",
      "Global pharmacy benefits",
    ],
    icon: Globe,
  },
]

const benefits = [
  {
    title: "Improved Employee Health",
    description: "Regular check-ups and easy access to healthcare",
    icon: HeartPulse,
  },
  { title: "Increased Productivity", description: "Less sick days and faster recovery times", icon: Users },
  { title: "Attractive Benefits Package", description: "Aid in recruiting and retaining top talent", icon: Building2 },
  { title: "Customizable Solutions", description: "Tailored to fit your company's specific needs", icon: Stethoscope },
]

const upcomingEvents = [
  {
    title: "Corporate Wellness Webinar",
    date: "2023-06-15",
    time: "2:00 PM - 3:30 PM",
    link: "/events/corporate-wellness-webinar",
  },
  {
    title: "Mental Health in the Workplace Workshop",
    date: "2023-06-22",
    time: "10:00 AM - 12:00 PM",
    link: "/events/mental-health-workshop",
  },
  {
    title: "Executive Health Screening Day",
    date: "2023-07-01",
    time: "9:00 AM - 5:00 PM",
    link: "/events/executive-health-screening",
  },
]

const latestNews = [
  {
    title: "HNW Launches New Corporate Wellness Program",
    date: "2023-05-15",
    link: "/news/corporate-wellness-program",
  },
  {
    title: "Study Shows 30% Productivity Boost with Employee Health Programs",
    date: "2023-05-10",
    link: "/news/productivity-boost-study",
  },
  {
    title: "Top 5 Corporate Health Trends for 2023",
    date: "2023-05-01",
    link: "/news/corporate-health-trends-2023",
  },
]

export default function CorporatePackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Corporate Healthcare Packages</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Empower your workforce with comprehensive healthcare packages designed for businesses of all sizes
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&h=1380"
              alt="Corporate Healthcare"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">Invest in Your Team's Health</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {corporatePackages.map((pkg, index) => (
              <Card key={index} className={index === 1 ? "border-primary" : ""}>
                <CardHeader>
                  <pkg.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {pkg.price}
                    <span className="text-sm font-normal text-gray-600"> {pkg.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose HNW Corporate Packages?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <benefit.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="lg:w-1/4 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <li key={index}>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      {event.date} | {event.time}
                    </p>
                    <Button variant="link" asChild className="p-0">
                      <Link href={event.link}>Learn More</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {latestNews.map((news, index) => (
                  <li key={index}>
                    <h3 className="font-semibold">{news.title}</h3>
                    <p className="text-sm text-gray-600">{news.date}</p>
                    <Button variant="link" asChild className="p-0">
                      <Link href={news.link}>Read More</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

