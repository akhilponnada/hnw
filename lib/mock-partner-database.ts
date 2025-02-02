export interface Partner {
  id: number
  name: string
  description: string
  website: string
  category: string
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "City General Hospital",
    description: "A leading healthcare institution providing comprehensive medical services.",
    website: "https://www.citygeneralhospital.com",
    category: "Hospitals",
  },
  {
    id: 2,
    name: "Advanced Diagnostics Lab",
    description: "Cutting-edge diagnostic services with rapid result delivery.",
    website: "https://www.advanceddiagnosticslab.com",
    category: "Labs",
  },
  {
    id: 3,
    name: "MediCare Clinic",
    description: "Your neighborhood clinic for primary care and specialist consultations.",
    website: "https://www.medicareclinic.com",
    category: "Clinics",
  },
  {
    id: 4,
    name: "PharmaCare Plus",
    description: "24/7 pharmacy with a wide range of medications and health products.",
    website: "https://www.pharmacareplus.com",
    category: "Pharmacy",
  },
  {
    id: 5,
    name: "LifeSave Blood Bank",
    description: "Ensuring a safe and adequate blood supply for the community.",
    website: "https://www.lifesavebloodbank.org",
    category: "Blood Banks",
  },
  {
    id: 6,
    name: "HealthGuard Insurance",
    description: "Comprehensive health insurance plans for individuals and families.",
    website: "https://www.healthguardinsurance.com",
    category: "Insurance",
  },
  {
    id: 7,
    name: "TeleMed Solutions",
    description: "Innovative telehealth platform for remote consultations and follow-ups.",
    website: "https://www.telemedsolutions.com",
    category: "Telehealth",
  },
  {
    id: 8,
    name: "MedTech Innovations",
    description: "Cutting-edge medical equipment for hospitals and clinics.",
    website: "https://www.medtechinnovations.com",
    category: "Medical Equipment",
  },
  {
    id: 9,
    name: "Wellness360 Center",
    description: "Holistic wellness programs and preventive care services.",
    website: "https://www.wellness360center.com",
    category: "Wellness Centers",
  },
  {
    id: 10,
    name: "HomeCare Experts",
    description: "Professional medical care services provided in the comfort of your home.",
    website: "https://www.homecareexperts.com",
    category: "Home Healthcare",
  },
]

export function searchPartners(query: string): Partner[] {
  const lowercaseQuery = query.toLowerCase()
  return partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(lowercaseQuery) ||
      partner.description.toLowerCase().includes(lowercaseQuery) ||
      partner.category.toLowerCase().includes(lowercaseQuery),
  )
}

