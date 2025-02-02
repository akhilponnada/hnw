"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About HNW",
    href: "/about",
    subItems: [
      { name: "Overview", href: "/about/overview" },
      { name: "The Concept", href: "/about/concept" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Advisory Board", href: "/about/advisory-board" },
      { name: "Founder", href: "/about/founder" },
      { name: "Core Team", href: "/about/core-team" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    subItems: [
      { name: "Health Cards", href: "/products/health-cards" },
      { name: "Insurance Plans", href: "/products/insurance-plans" },
      { name: "Wellness Packages", href: "/products/wellness-packages" },
      { name: "Medical Devices", href: "/products/medical-devices" },
      { name: "Healthcare CRM", href: "/healthcare-crm" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subItems: [
      { name: "Telehealth", href: "/services/telehealth" },
      { name: "Diagnostics", href: "/services/diagnostics" },
      { name: "Hospital Network", href: "/services/hospital-network" },
      { name: "Pharmacy Benefits", href: "/services/pharmacy-benefits" },
    ],
  },
  {
    name: "Packages",
    href: "/packages",
    subItems: [
      { name: "Corporate Packages", href: "/packages/corporate" },
      { name: "Society Packages", href: "/packages/society" },
      { name: "Family Packages", href: "/packages/family" },
      { name: "Elder Packages", href: "/packages/elder" },
      { name: "Industry Packages", href: "/packages/industry" },
      { name: "Group Packages", href: "/packages/group" },
    ],
  },
  {
    name: "Partners",
    href: "/partners",
    subItems: [
      { name: "Hospitals", href: "/partners/hospitals" },
      { name: "Labs", href: "/partners/labs" },
      { name: "Clinics", href: "/partners/clinics" },
      { name: "Blood Banks", href: "/partners/blood-banks" },
      { name: "Pharmacy", href: "/partners/pharmacy" },
      { name: "Fitness Centers", href: "/partners/fitness-centers" },
      { name: "Telehealth", href: "/partners/telehealth" },
      { name: "Insurance", href: "/partners/insurance" },
      { name: "Finance", href: "/partners/finance" },
      { name: "NGO", href: "/partners/ngo" },
    ],
  },
  { name: "Become Member", href: "/membership" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as Element).closest(".dropdown-container")) {
        setDropdownOpen(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [dropdownOpen])

  const handleDropdownToggle = (itemName: string) => {
    setDropdownOpen((prevState) => (prevState === itemName ? null : itemName))
  }

  return (
    <header className="bg-white shadow-sm pt-2 relative z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 mr-8">
            <div className="relative w-[120px] h-[40px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-HNW-NleisJIzlnk92HY9FMCs0w3eJXPLEO.png"
                alt="HNW Health & Wealth Club Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <div className="dropdown-container">
                  <button
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline uppercase transition-colors flex items-center"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out z-50 ${
                      dropdownOpen === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline uppercase transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button variant="outline" asChild>
            <Link href="/auth">Log in / Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

