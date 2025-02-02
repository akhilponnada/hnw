import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function YouTubeSection() {
  return (
    <Card className="border border-gray-200">
      <CardHeader>
        <CardTitle>Featured Video</CardTitle>
        <CardDescription>Watch our latest health tips and doctor messages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}

