"use client"

import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Comprehensive Health Check",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 2,
    name: "Advanced Genetic Screening",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 3,
    name: "Executive Wellness Package",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=300&h=200",
  },
  {
    id: 4,
    name: "Mental Health Care Plan",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=300&h=200",
  },
]

export function ProductList() {
  const { addItem, items } = useCart()

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Premium healthcare service tailored to your needs.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => addItem(product)} className="w-full">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {items.length > 0 && (
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/cart">View Cart ({items.length} items)</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

