"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Loader2, RefreshCcw } from "lucide-react"
import Link from "next/link"
import { searchWikipedia } from "@/app/actions/wikipedia-search"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const RESULTS_PER_PAGE = 5

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchSearchResults = async () => {
    if (!query) return

    setIsLoading(true)
    setError(null)

    try {
      const searchResults = await searchWikipedia(query)
      setResults(searchResults)
    } catch (error) {
      console.error("Error fetching search results:", error)
      setError("Failed to fetch search results. Please try again later.")
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSearchResults()
  }, [query])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex items-center justify-between">
          <span>{error}</span>
          <Button variant="outline" size="sm" onClick={fetchSearchResults} className="ml-4">
            <RefreshCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE)
  const paginatedResults = results.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found for "{query}". Please try a different search term.</p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {paginatedResults.map((result, index) => (
              <Card key={result.pageid}>
                <CardHeader>
                  <CardTitle>
                    <span className="text-gray-500 mr-2">{(currentPage - 1) * RESULTS_PER_PAGE + index + 1}.</span>
                    <Link
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {result.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <div className="text-sm text-muted-foreground">{result.snippet}</div>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex flex-col items-center space-y-4">
              <div className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

