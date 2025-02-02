"use client"

import Image from "next/image"
import { useState } from "react"

interface FallbackImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export function FallbackImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
}: FallbackImageProps) {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  return (
    <Image
      src={error ? "/placeholder.svg" : src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      onError={handleError}
    />
  )
} 