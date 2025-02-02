import { SearchResults } from "@/components/search-results"
import { SearchSidebar } from "@/components/search-sidebar"

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <SearchResults />
        </div>
        <div className="md:w-1/3">
          <SearchSidebar />
        </div>
      </div>
    </div>
  )
}

