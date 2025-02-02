"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function submitQuoteRequest(data: {
  fullName: string
  email: string
  phoneNumber: string
  age: number
  coverageAmount: number
  message?: string
}) {
  try {
    await prisma.insuranceQuote.create({
      data: {
        name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        age: data.age,
        coverage: data.coverageAmount,
        message: data.message,
      },
    })
    revalidatePath("/products/insurance-plans")
    return { success: true }
  } catch (error) {
    console.error("Failed to submit quote request:", error)
    throw new Error("Failed to submit quote request. Please try again.")
  }
}

