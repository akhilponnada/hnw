import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PartnersDropdown() {
  return (
    <Button variant="outline" asChild>
      <Link href="/partners">Partners</Link>
    </Button>
  )
}

