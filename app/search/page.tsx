import { SearchResults } from "@/components/search-results"
import { SearchSidebar } from "@/components/search-sidebar"
import { Suspense } from "react"

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <Suspense fallback={<div>Loading search results...</div>}>
            <SearchResults />
          </Suspense>
        </div>
        <div className="md:w-1/3">
          <SearchSidebar />
        </div>
      </div>
    </div>
  )
}

