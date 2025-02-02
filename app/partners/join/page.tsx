"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { registerPartner } from "@/app/actions/partner-actions"
import { PartnerBenefits } from "@/components/partner-benefits"
import { NewsAndEvents } from "@/components/news-and-events"
import { CrmAd } from "@/components/crm-ad"

const categories = [
  "Hospitals",
  "Labs",
  "Clinics",
  "Pharmacy",
  "Blood Banks",
  "Insurance",
  "Telehealth",
  "Medical Equipment",
  "Wellness Centers",
  "Home Healthcare",
]

export default function JoinPartnerPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [formData, setFormData] = useState({
    name: "",
    category: initialCategory || "",
    description: "",
    website: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await registerPartner(formData)
      alert("Thank you for your interest! We will review your application and get back to you soon.")
      // Reset form or redirect to a thank you page
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your form. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Partner with HNW.one</h1>
        <p className="text-xl text-gray-600">Join our growing network of healthcare providers and services.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <PartnerBenefits />
          <div className="mt-8">
            <NewsAndEvents />
          </div>
        </div>
        <div className="lg:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Join Our Network</CardTitle>
              <CardDescription>
                Fill out the form below to register as a partner with HNW.one. We'll review your application and get
                back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Organization Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" value={formData.category} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactName">Contact Person Name</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/4 space-y-8">
          <CrmAd />
          <CrmAd />
        </div>
      </div>
    </div>
  )
}

