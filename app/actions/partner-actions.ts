"use server"

import { prisma } from "@/lib/prisma"

export async function registerPartner(formData: {
  name: string
  category: string
  description: string
  website: string
  contactName: string
  contactEmail: string
  contactPhone: string
}) {
  try {
    await prisma.partner.create({
      data: {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        website: formData.website,
        contactName: formData.contactName,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      },
    })
    return { success: true }
  } catch (error) {
    console.error("Error registering partner:", error)
    return { success: false, error: "Failed to register partner" }
  }
}

export async function getPartnersByCategory(category: string) {
  try {
    const partners = await prisma.partner.findMany({
      where: {
        category,
        status: "approved",
      },
    })
    return partners
  } catch (error) {
    console.error("Error fetching partners:", error)
    return getMockPartners(category)
  }
}

// Add a helper function to return mock data when the database is unavailable
function getMockPartners(category: string) {
  const mockPartners = [
    {
      id: 1,
      name: `${category} Partner 1`,
      description: `A leading ${category} partner for HNW.one`,
      category: category,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300&h=200",
      website: "https://example.com",
      contactName: "John Doe",
      contactEmail: "john@example.com",
      contactPhone: "1234567890",
      status: "approved",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: `${category} Partner 2`,
      description: `An innovative ${category} partner in our network`,
      category: category,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300&h=200",
      website: "https://example.com",
      contactName: "Jane Smith",
      contactEmail: "jane@example.com",
      contactPhone: "0987654321",
      status: "approved",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: `${category} Partner 3`,
      description: `A trusted ${category} partner for HNW.one members`,
      category: category,
      image: "https://images.unsplash.com/photo-1516549655669-df64cee12a2a?auto=format&fit=crop&q=80&w=300&h=200",
      website: "https://example.com",
      contactName: "Bob Wilson",
      contactEmail: "bob@example.com",
      contactPhone: "1122334455",
      status: "approved",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
  return mockPartners
}

