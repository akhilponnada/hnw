import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advisoryBoard = [
  {
    name: "Dr. Emily Chen",
    position: "Chief Medical Advisor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Chen is a renowned cardiologist with over 20 years of experience in global healthcare management.",
  },
  {
    name: "Prof. Michael Johnson",
    position: "Healthcare Policy Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Prof. Johnson specializes in international healthcare policies and has advised numerous governments on healthcare reform.",
  },
  {
    name: "Dr. Sarah Patel",
    position: "Digital Health Innovator",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Patel is at the forefront of integrating AI and machine learning into healthcare systems.",
  },
  {
    name: "Mr. David Thompson",
    position: "Global Health Economist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Mr. Thompson brings expertise in healthcare financing and sustainable economic models for global health initiatives.",
  },
]

export default function AdvisoryBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=2070&h=768"
          alt="Advisory Board"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Advisory Board</h1>
          <p className="text-xl max-w-3xl">Expert guidance shaping the future of global healthcare</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Advisors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advisory board comprises world-renowned experts in various fields of healthcare, ensuring that HNW.one
              remains at the forefront of global health innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((advisor) => (
              <Card key={advisor.name} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={advisor.image || "/placeholder.svg"} alt={advisor.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{advisor.name}</CardTitle>
                  <p className="text-sm text-primary">{advisor.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">The Role of Our Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Strategic Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our advisory board provides invaluable insights and strategic direction, helping HNW.one navigate the
                  complex landscape of global healthcare and ensure we're always at the cutting edge of medical
                  innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The board oversees the quality of our services, ensuring that we maintain the highest standards of
                  healthcare delivery across all our global operations.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Innovation Catalyst</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  By bringing together diverse expertise, our advisory board fosters innovation, encouraging the
                  development of groundbreaking healthcare solutions that benefit our members worldwide.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Ethical Oversight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The board ensures that all our operations and innovations adhere to the highest ethical standards,
                  prioritizing patient safety and well-being above all else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

