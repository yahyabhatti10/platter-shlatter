import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface GalleryDetailProps {
  params: {
    category: string
  }
}

export default function GalleryDetail({ params }: GalleryDetailProps) {
  const categoryTitles: { [key: string]: string } = {
    "wedding-reception": "Wedding Reception",
    "mehandi-ceremonies": "Mehandi Ceremonies",
    "corporate-events": "Corporate Events",
    "birthday-parties": "Birthday Parties",
    "family-gatherings": "Family Gatherings",
    "intimate-dinners": "Intimate Dinners",
  }

  const title = categoryTitles[params.category] || "Gallery"

  // Generate placeholder images for the gallery
  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=400&width=400&text=${title}-${i + 1}`,
    alt: `${title} - Image ${i + 1}`,
  }))

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/gallery"
          className="inline-flex items-center text-accent-orange hover:text-accent-brown transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary mb-8">{title}</h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
