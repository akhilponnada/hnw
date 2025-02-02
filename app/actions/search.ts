"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function performSearch(query: string) {
  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Search query about healthcare: ${query}. Provide a concise, helpful response about healthcare services, medical information, or related topics.`,
    })

    return {
      success: true,
      result: text,
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to perform search",
    }
  }
}

