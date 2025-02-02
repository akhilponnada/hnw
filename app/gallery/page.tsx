"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const galleryItems = [
  {
    id: 1,
    title: "State-of-the-art Medical Facility",
    description: "Our cutting-edge medical center equipped with the latest technology.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 2,
    title: "Dedicated Medical Professionals",
    description: "Our team of expert doctors and nurses providing compassionate care.",
    imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 3,
    title: "Advanced Diagnostic Equipment",
    description: "High-precision imaging and diagnostic tools for accurate health assessments.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 4,
    title: "Comfortable Patient Rooms",
    description: "Welcoming and restful environments for patient recovery and comfort.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 5,
    title: "Telemedicine Services",
    description: "Remote healthcare consultations for convenient and accessible medical advice.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 6,
    title: "Wellness and Rehabilitation Center",
    description: "Comprehensive facilities for physical therapy and holistic wellness programs.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 7,
    title: "Pharmacy Services",
    description: "On-site pharmacy providing a wide range of medications and health products.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 8,
    title: "Emergency Response Unit",
    description: "Fully equipped emergency department ready to handle critical situations 24/7.",
    imageUrl: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=600&h=400",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HNW.one Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative h-48">
              <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="relative h-[400px] mt-4">
              <Image
                src={selectedImage.imageUrl || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

