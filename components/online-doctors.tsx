import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const onlineDoctors = [
  {
    name: "Dr. Emily Chen",
    specialty: "General Practitioner",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Dr. Michael Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Dr. Sarah Patel",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    name: "Dr. David Kim",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
  },
]

export function OnlineDoctors() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Doctors Available Online</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {onlineDoctors.map((doctor, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-4">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>
              <Button className="ml-auto">Connect</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

