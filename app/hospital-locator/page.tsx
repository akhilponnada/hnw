"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// In a real application, this data would come from an API
const hospitals = [
  { id: 1, name: "City General Hospital", address: "123 Main St, Cityville", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "Sunset Medical Center", address: "456 Park Ave, Townsburg", lat: 40.7282, lng: -73.7949 },
  { id: 3, name: "Riverside Clinic", address: "789 River Rd, Villageton", lat: 40.8224, lng: -73.9496 },
]

export default function HospitalLocatorPage() {
  const [search, setSearch] = useState("")
  const [selectedHospital, setSelectedHospital] = useState<(typeof hospitals)[0] | null>(null)

  const filteredHospitals = hospitals.filter((hospital) => hospital.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Hospital & Clinic Locator</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Find a Hospital</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="search"
              placeholder="Search hospitals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4"
            />
            <div className="space-y-2">
              {filteredHospitals.map((hospital) => (
                <Button
                  key={hospital.id}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setSelectedHospital(hospital)}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {hospital.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              {selectedHospital ? (
                <div className="text-center">
                  <h3 className="font-semibold">{selectedHospital.name}</h3>
                  <p>{selectedHospital.address}</p>
                  <p>
                    Lat: {selectedHospital.lat}, Lng: {selectedHospital.lng}
                  </p>
                </div>
              ) : (
                <p>Select a hospital to view on the map</p>
              )}
              {/* In a real application, this would be replaced with an actual map component */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

