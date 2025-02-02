"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TelemedicinePage() {
  const [isCallStarted, setIsCallStarted] = useState(false)

  const handleStartCall = () => {
    // In a real application, this would initiate a video call
    setIsCallStarted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Telemedicine Consultation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Schedule a Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="doctor">Select a Doctor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dr-smith">Dr. Smith (General Physician)</SelectItem>
                    <SelectItem value="dr-johnson">Dr. Johnson (Cardiologist)</SelectItem>
                    <SelectItem value="dr-williams">Dr. Williams (Pediatrician)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input type="date" id="date" />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input type="time" id="time" />
              </div>
              <Button type="submit">Schedule Consultation</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Start Immediate Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            {isCallStarted ? (
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p>Video call in progress...</p>
                {/* In a real application, this would be replaced with an actual video component */}
              </div>
            ) : (
              <div className="space-y-4">
                <p>Connect with an available doctor immediately for urgent consultations.</p>
                <Button onClick={handleStartCall}>Start Video Call</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

