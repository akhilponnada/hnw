import Link from "next/link"

const partnerCategories = [
  {
    name: "Hospitals",
    href: "/partners/hospitals",
    submenu: [
      { name: "City General Hospital", href: "/partners/hospitals/city-general" },
      { name: "Mercy Medical Center", href: "/partners/hospitals/mercy-medical" },
      { name: "St. John's Health", href: "/partners/hospitals/st-johns-health" },
      { name: "University Hospital", href: "/partners/hospitals/university-hospital" },
    ],
  },
  { name: "Labs", href: "/partners/labs" },
  { name: "Clinics", href: "/partners/clinics" },
  { name: "Pharmacy", href: "/partners/pharmacy" },
  { name: "Blood Banks", href: "/partners/blood-banks" },
  { name: "Insurance", href: "/partners/insurance" },
  { name: "Telehealth", href: "/partners/telehealth" },
  { name: "Medical Equipment", href: "/partners/medical-equipment" },
  { name: "Wellness Centers", href: "/partners/wellness-centers" },
  { name: "Home Healthcare", href: "/partners/home-healthcare" },
]

export function VerticalMenu() {
  return (
    <nav className="space-y-1">
      {partnerCategories.map((category) => (
        <div key={category.name}>
          <Link
            href={category.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
          >
            {category.name}
          </Link>
          {category.submenu && (
            <div className="ml-4 mt-1 space-y-1">
              {category.submenu.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

