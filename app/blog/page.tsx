import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Healthy Heart",
    excerpt: "Discover simple lifestyle changes that can significantly improve your heart health.",
    date: "2023-05-15",
    author: "Dr. Jane Smith",
  },
  {
    id: 2,
    title: "Understanding Telemedicine",
    excerpt: "Learn about the benefits and limitations of virtual healthcare consultations.",
    date: "2023-05-10",
    author: "Dr. John Doe",
  },
  {
    id: 3,
    title: "The Importance of Mental Health",
    excerpt: "Explore the connection between mental and physical well-being.",
    date: "2023-05-05",
    author: "Dr. Emily Johnson",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Health & Wellness Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">
                {post.date} | By {post.author}
              </p>
              <p className="mb-4">{post.excerpt}</p>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

