"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface PartnerFilterBarProps {
  onFilter: (filters: { city: string; pinCode: string; area: string }) => void
}

export function PartnerFilterBar({ onFilter }: PartnerFilterBarProps) {
  const [city, setCity] = useState("")
  const [pinCode, setPinCode] = useState("")
  const [area, setArea] = useState("")

  const handleFilter = () => {
    onFilter({ city, pinCode, area })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="flex-grow" />
      <Input
        placeholder="PIN Code"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
        className="flex-grow"
      />
      <Input placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)} className="flex-grow" />
      <Button onClick={handleFilter} className="w-full sm:w-auto">
        <Search className="mr-2 h-4 w-4" /> Filter
      </Button>
    </div>
  )
}

