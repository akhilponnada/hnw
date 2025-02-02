"use client"

import { useEffect } from "react"
import { useCurrency } from "@/contexts/CurrencyContext"
import { currencies } from "@/lib/currencies"

export function CurrencySelector() {
  const { setCurrentCurrency } = useCurrency()

  useEffect(() => {
    async function detectUserLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        const userCountry = data.country_code
        if (currencies[userCountry]) {
          setCurrentCurrency(currencies[userCountry])
        }
      } catch (error) {
        console.error("Error detecting user location:", error)
      }
    }

    detectUserLocation()
  }, [setCurrentCurrency])

  return null
}

