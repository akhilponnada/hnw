"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Currency } from "@/lib/currencies"
import { currencies } from "@/lib/currencies"

type CurrencyContextType = {
  currentCurrency: Currency
  setCurrentCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(currencies.IN)

  // Load saved currency preference from localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem("preferredCurrency")
    if (savedCurrency && currencies[savedCurrency]) {
      setCurrentCurrency(currencies[savedCurrency])
    }
  }, [])

  // Save currency preference to localStorage when it changes
  useEffect(() => {
    const countryCode = Object.keys(currencies).find((key) => currencies[key].code === currentCurrency.code)
    if (countryCode) {
      localStorage.setItem("preferredCurrency", countryCode)
    }
  }, [currentCurrency])

  return <CurrencyContext.Provider value={{ currentCurrency, setCurrentCurrency }}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}

