import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const coreTeam = [
  {
    name: "Dr. Sophia Lee",
    position: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Lee oversees all medical operations and ensures the highest standards of care across our global network.",
  },
  {
    name: "Mr. James Rodriguez",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Mr. Rodriguez leads our technology initiatives, driving innovation in telemedicine and digital health solutions.",
  },
  {
    name: "Ms. Aisha Patel",
    position: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Ms. Patel manages our global operations, ensuring seamless service delivery across all our locations.",
  },
  {
    name: "Mr. Daniel Kim",
    position: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Mr. Kim oversees our financial strategies, driving sustainable growth and value for our members.",
  },
  {
    name: "Dr. Elena Sanchez",
    position: "Head of Research & Development",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Sanchez leads our R&D efforts, focusing on breakthrough medical technologies and treatments.",
  },
  {
    name: "Mr. Thomas Müller",
    position: "Global Partnerships Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Mr. Müller manages our relationships with healthcare providers and partners worldwide.",
  },
]

export default function CoreTeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2070&h=768"
          alt="HNW.one Core Team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Core Team</h1>
          <p className="text-xl max-w-3xl">The driving force behind HNW.one's success</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core team brings together diverse expertise and a shared passion for revolutionizing global
              healthcare. Each member plays a crucial role in driving HNW.one's mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <p className="text-sm text-primary">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collaborative Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Interdisciplinary Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our core team brings together professionals from various fields including medicine, technology,
                  operations, and finance. This interdisciplinary approach allows us to tackle complex healthcare
                  challenges from multiple perspectives, leading to innovative and comprehensive solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Global Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With team members from diverse cultural backgrounds and experiences in international healthcare
                  systems, we bring a truly global perspective to our work. This enables us to create solutions that are
                  adaptable and effective across different regions and healthcare landscapes.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Continuous Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team is committed to staying at the forefront of healthcare innovation. We continuously explore
                  new technologies, methodologies, and partnerships to enhance our services and provide cutting-edge
                  solutions to our members.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Member-Centric Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  At the heart of our team's efforts is a dedication to our members. We prioritize understanding and
                  addressing the unique needs of our global membership, ensuring that every decision and innovation is
                  aimed at improving their healthcare experience and outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-700 mb-8">
            We're always looking for passionate individuals to join our mission of revolutionizing global healthcare. If
            you're driven by innovation and committed to making a difference in people's lives, we'd love to hear from
            you.
          </p>
          <a
            href="/careers"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            Explore Career Opportunities
          </a>
        </div>
      </section>
    </div>
  )
}

