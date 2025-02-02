"use server"

import { sql } from "@vercel/postgres"

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
    await sql`
      INSERT INTO partners (name, category, description, website, contact_name, contact_email, contact_phone, status)
      VALUES (${formData.name}, ${formData.category}, ${formData.description}, ${formData.website}, ${formData.contactName}, ${formData.contactEmail}, ${formData.contactPhone}, 'pending')
    `
    return { success: true }
  } catch (error) {
    console.error("Error registering partner:", error)
    return { success: false, error: "Failed to register partner" }
  }
}

export async function getPartnersByCategory(category: string) {
  try {
    const partners = await sql`
      SELECT * FROM partners
      WHERE category = ${category} AND status = 'approved'
    `
    return partners.rows
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
    },
    {
      id: 2,
      name: `${category} Partner 2`,
      description: `An innovative ${category} partner in our network`,
      category: category,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
      id: 3,
      name: `${category} Partner 3`,
      description: `A trusted ${category} partner for HNW.one members`,
      category: category,
      image: "https://images.unsplash.com/photo-1516549655669-df64cee12a2a?auto=format&fit=crop&q=80&w=300&h=200",
    },
  ]
  return mockPartners
}

