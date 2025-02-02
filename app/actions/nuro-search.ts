"use server"

interface NuroSearchResult {
  title: string
  link: string
  snippet: string
}

export async function searchNuro(query: string): Promise<NuroSearchResult[]> {
  try {
    const response = await fetch(`https://search.nuro.one/api/search?q=${encodeURIComponent(query)}`)
    const data = await response.json()

    if (!data || !Array.isArray(data)) {
      return []
    }

    return data.map((result: any) => ({
      title: result.title || "",
      link: result.link || "",
      snippet: result.snippet || result.description || "",
    }))
  } catch (error) {
    console.error("Error searching Nuro:", error)
    return []
  }
}

