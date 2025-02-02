"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const initialData = [
  { date: "2023-05-01", weight: 70, bloodPressure: 120, bloodSugar: 100 },
  { date: "2023-05-08", weight: 69, bloodPressure: 118, bloodSugar: 98 },
  { date: "2023-05-15", weight: 69, bloodPressure: 122, bloodSugar: 102 },
  { date: "2023-05-22", weight: 68, bloodPressure: 119, bloodSugar: 99 },
]

export default function HealthTrackerPage() {
  const [healthData, setHealthData] = useState(initialData)
  const [newEntry, setNewEntry] = useState({
    date: "",
    weight: "",
    bloodPressure: "",
    bloodSugar: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEntry((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry = {
      date: newEntry.date,
      weight: Number.parseFloat(newEntry.weight),
      bloodPressure: Number.parseInt(newEntry.bloodPressure),
      bloodSugar: Number.parseInt(newEntry.bloodSugar),
    }
    setHealthData([...healthData, entry])
    setNewEntry({ date: "", weight: "", bloodPressure: "", bloodSugar: "" })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Health Tracker</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Health Data</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input type="date" id="date" name="date" value={newEntry.date} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  type="number"
                  id="weight"
                  name="weight"
                  value={newEntry.weight}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="bloodPressure">Blood Pressure (systolic)</Label>
                <Input
                  type="number"
                  id="bloodPressure"
                  name="bloodPressure"
                  value={newEntry.bloodPressure}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="bloodSugar">Blood Sugar (mg/dL)</Label>
                <Input
                  type="number"
                  id="bloodSugar"
                  name="bloodSugar"
                  value={newEntry.bloodSugar}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit">Add Entry</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Health Metrics Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="weight" stroke="#8884d8" />
                <Line yAxisId="left" type="monotone" dataKey="bloodPressure" stroke="#82ca9d" />
                <Line yAxisId="right" type="monotone" dataKey="bloodSugar" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

