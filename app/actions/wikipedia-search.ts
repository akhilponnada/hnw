"use server"

interface WikipediaSearchResult {
  pageid: number
  title: string
  snippet: string
  url: string
}

export async function searchWikipedia(query: string): Promise<WikipediaSearchResult[]> {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`

  try {
    const response = await fetch(endpoint, {
      headers: {
        'User-Agent': 'HNW Health & Wealth Club/1.0',
        'Accept': 'application/json',
      },
      next: {
        revalidate: 3600 // Cache for 1 hour
      }
    })

    if (!response.ok) {
      throw new Error(`Wikipedia API responded with status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.query || !data.query.search) {
      return []
    }

    const results = data.query.search.map((result: any) => ({
      pageid: result.pageid,
      title: result.title,
      snippet: result.snippet.replace(/<\/?[^>]+(>|$)/g, ""), // Remove HTML tags
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title.replace(/ /g, "_"))}`,
    }))

    return results
  } catch (error) {
    console.error("Error searching Wikipedia:", error)
    return []
  }
}

