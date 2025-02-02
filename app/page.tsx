import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {
  Activity,
  Heart,
  Stethoscope,
  PillIcon as Pills,
  Hospital,
  TestTube,
  CreditCard,
  Phone,
  Globe2,
  Users,
  Building2,
  Clock,
  Apple,
  Wallet,
  Truck,
  HomeIcon,
  TrendingUp,
  PiggyBank,
  BarChart,
  DollarSign,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProductList } from "@/components/product-list"
import { YouTubeSection } from "@/components/youtube-section"
import { NetworkPartnersScroll } from "@/components/network-partners-scroll"
import { CrmAd } from "@/components/crm-ad"
import { EventList } from "@/components/event-list"
import { WealthManagementSection } from "@/components/wealth-management-section"
import { FallbackImage } from "@/components/fallback-image"

const stats = [
  {
    id: 1,
    name: "Healthcare Partners",
    value: "500+",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 2,
    name: "Active Members",
    value: "100,000+",
    icon: Users,
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 3,
    name: "Cities Covered",
    value: "50+",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 4,
    name: "Customer Satisfaction",
    value: "99%",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?auto=format&fit=crop&q=80&w=300&h=200",
  },
]

const testimonials = [
  {
    content:
      "HNW.one has revolutionized healthcare for our employees. The comprehensive coverage and seamless service have significantly improved their well-being and productivity.",
    author: "Sarah Johnson",
    role: "HR Director, TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    content:
      "As a healthcare professional, I'm impressed by HNW.one's commitment to quality care. Their network of specialists and advanced diagnostic services are truly world-class.",
    author: "Dr. Michael Chen",
    role: "Chief of Medicine, City General Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    content:
      "The peace of mind that comes with HNW.one's global coverage is invaluable. Whether at home or traveling, I know my family and I are protected.",
    author: "Emily Rodriguez",
    role: "International Business Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F0052] via-[#1E40AF] to-[#2563EB] py-16 lg:py-24 pt-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight font-poppins flex items-center">
                <span className="text-orange-500">HEALTH</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n%20logo-CmNlg8ZhOvhEgPUv2SAd0GPcLEtz1A.png"
                  alt="N"
                  width={32}
                  height={32}
                  className="mx-1"
                />
                <span className="text-orange-500">WEALTH</span>
                <span className="text-white ml-2">OUR PRIORITY</span>
              </h1>
              <p className="text-xl lg:text-2xl">
                Join HNW.one for comprehensive global healthcare solutions and exclusive benefits
              </p>
              <Button size="lg" variant="default" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/signup">Become a Member Today</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor%20showing%20card-9lm8l9bQleNeVBeURzbOCNB433lpTL.png"
                alt="Doctor showing HNW health card"
                width={1200}
                height={800}
                className="rounded-lg shadow-xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why HNW Club? Section */}
      <section className="py-24 bg-white section-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Why HNW Club?</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We believe in a powerful philosophy: <span className="font-semibold text-primary">Health is Wealth</span>{" "}
            and <span className="font-semibold text-primary">Wealth is Health</span>. Just as good health enables you to
            build wealth, smart wealth management ensures access to premium healthcare. This symbiotic relationship
            forms the foundation of our holistic approach to your well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-6 hover:outline hover:outline-blue-500 hover:bg-gray-100 transition-all duration-300">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300&h=200"
                  alt="Healthcare Management"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare Management Services</h3>
              <p className="mb-4">
                Comprehensive healthcare solutions tailored to your needs. Our services include telemedicine, health
                insurance, and access to a global network of medical facilities.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="/healthcare-services">Learn More</Link>
              </Button>
            </div>

            {/* Center Section */}
            <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300&h=200"
                  alt="Wealthcare Management"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wealthcare Management Services</h3>
              <p className="mb-4">
                Expert financial planning and wealth management solutions. We offer investment strategies, retirement
                planning, and tax optimization services.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="/wealth-management">Learn More</Link>
              </Button>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center text-center bg-green-50 rounded-lg p-6">
              <div className="relative w-full h-48 mb-4">
                <FallbackImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-22%20at%2010.18.06%20PM-pSmSeaaup4egoG1GemqY1DD6ZM7mW7.jpeg"
                  alt="HNW Mega Health Camp"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mega HNW Event - March 2025</h3>
              <div className="space-y-2 mb-4">
                <p className="font-medium">On the Event of HNW Club Card Launch</p>
                <ul className="text-sm space-y-1">
                  <li>Free Consultation from 100+ Hospitals</li>
                  <li>Expected Crowd: 100,000+ People</li>
                  <li>100+ Free Surgeries</li>
                  <li>Free Medicine Distribution</li>
                </ul>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="/events/mega-health-camp">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-24 bg-gray-50 section-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Membership Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect membership tier that aligns with your healthcare needs and lifestyle preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Plan */}
            <Card className="flex flex-col bg-gray-100">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/silver-q7odC3SMnfrLPpfEnp6BnA5VXGzu9t.png"
                  alt="Silver Membership"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Silver Membership</CardTitle>
                <CardDescription>Essential healthcare coverage for individuals and families</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">$499/year</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to standard healthcare facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 telemedicine consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual health check-up</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/membership/silver">Buy Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Gold Plan */}
            <Card className="flex flex-col bg-yellow-50 border-2 border-primary relative">
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Recommended</Badge>
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gold%20card2-7XrEpBrKTTdAMdJ1eLNMTLdTOeiJnV.png"
                  alt="Gold Membership"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Gold Membership</CardTitle>
                <CardDescription>Premium healthcare services for those who demand the best</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">$999/year</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to premium healthcare worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority telemedicine consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bi-annual health check-ups</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/membership/gold">Buy Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Platinum Plan */}
            <Card className="flex flex-col bg-gray-800 text-white">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATINUM%20CARD-SuHBTsVpve53YcpTdDbGDCVKBVEtEH.png"
                  alt="Platinum Membership"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Platinum Membership</CardTitle>
                <CardDescription className="text-gray-300">Unparalleled healthcare experience</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">$1,999/year</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited premium healthcare access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 specialist consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quarterly health check-ups</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/membership/platinum">Buy Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/membership">View All Benefits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Network Section with YouTube Video */}
      <section className="py-24 bg-white section-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-4">Global Healthcare Network</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Access world-class healthcare services through our extensive network of hospitals, clinics, and
                  healthcare professionals across the globe.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Globe2 className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">International Coverage</h3>
                    <p className="text-gray-600">Healthcare access in over 50 countries</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Hospital className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Premium Facilities</h3>
                    <p className="text-gray-600">Partnerships with top 500+ medical institutions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Expert Professionals</h3>
                    <p className="text-gray-600">Access to over 10,000 specialized medical experts</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Activity className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Quality Care</h3>
                    <p className="text-gray-600">Highest standards of healthcare delivery</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/network">Explore Our Network</Link>
              </Button>
            </div>
            <div className="lg:mt-0 mt-8">
              <YouTubeSection />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gray-50 section-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-4">Our Global Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading the way in healthcare innovation and accessibility across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id} className="text-center pt-8 overflow-hidden">
                <div className="relative h-40 mb-4">
                  <Image
                    src={stat.image || "/placeholder.svg"}
                    alt={stat.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent>
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-medium text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-base text-gray-600">{stat.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-24 bg-white section-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Our Healthcare Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium healthcare products designed for your well-being
            </p>
          </div>
          <ProductList />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 section-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how HNW.one is making a difference in people's lives across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Testimonial by ${testimonial.author}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wealth Management Section */}
      <WealthManagementSection className="section-highlight" />

      {/* Network Partners Scroll Section */}
      <NetworkPartnersScroll className="section-highlight" />

      {/* Footer is rendered in the layout.tsx file */}
    </div>
  )
}

