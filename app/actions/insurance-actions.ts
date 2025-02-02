"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function submitQuoteRequest(data: {
  fullName: string
  email: string
  phoneNumber: string
  age: number
  gender: string
  coverageAmount: string
}) {
  try {
    await prisma.insuranceQuoteRequest.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        age: data.age,
        gender: data.gender,
        coverageAmount: data.coverageAmount,
      },
    })
    revalidatePath("/products/insurance-plans")
  } catch (error) {
    console.error("Failed to submit quote request:", error)
    throw new Error("Failed to submit quote request. Please try again.")
  }
}

