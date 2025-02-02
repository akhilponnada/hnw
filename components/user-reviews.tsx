"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface Review {
  id: number
  user: string
  rating: number
  comment: string
  date: string
}

const initialReviews: Review[] = [
  { id: 1, user: "John D.", rating: 5, comment: "Excellent service and care!", date: "2023-05-15" },
  { id: 2, user: "Sarah M.", rating: 4, comment: "Very professional staff.", date: "2023-05-10" },
  { id: 3, user: "Mike R.", rating: 5, comment: "Top-notch facilities and doctors.", date: "2023-05-05" },
]

export function UserReviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" })

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }))
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prev) => ({ ...prev, comment: e.target.value }))
  }

  const handleSubmitReview = () => {
    if (newReview.rating === 0 || newReview.comment.trim() === "") return

    const review: Review = {
      id: reviews.length + 1,
      user: "Anonymous", // In a real app, this would be the logged-in user's name
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    }

    setReviews([review, ...reviews])
    setNewReview({ rating: 0, comment: "" })
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Write a Review</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button key={star} variant="ghost" size="sm" onClick={() => handleRatingChange(star)}>
                <Star
                  className={`h-6 w-6 ${
                    star <= newReview.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              </Button>
            ))}
          </div>
          <Textarea
            placeholder="Write your review here..."
            value={newReview.comment}
            onChange={handleCommentChange}
            className="mb-4"
          />
          <Button onClick={handleSubmitReview}>Submit Review</Button>
        </CardContent>
      </Card>
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{review.user}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p>{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

