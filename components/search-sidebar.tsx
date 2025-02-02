"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FallbackImage } from "@/components/fallback-image"

const featuredArticles = [
  {
    title: "Understanding Health Insurance",
    image: "/images/health-insurance.jpg",
    link: "/blog/understanding-health-insurance",
  },
  {
    title: "Top 10 Wellness Tips",
    image: "/images/wellness-tips.jpg",
    link: "/blog/top-10-wellness-tips",
  },
  {
    title: "Choosing the Right Healthcare Provider",
    image: "/images/healthcare-provider.jpg",
    link: "/blog/choosing-healthcare-provider",
  },
]

export function SearchSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Featured Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {featuredArticles.map((article, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden">
                  <FallbackImage
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 64px) 100vw, 64px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{article.title}</h3>
                  <Button variant="link" asChild className="p-0">
                    <Link href={article.link}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Our team is here to assist you with any questions about our healthcare services.</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

