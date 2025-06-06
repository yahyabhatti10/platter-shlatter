import Link from "next/link"
import Image from "next/image"

export default function Gallery() {
  const galleryCategories = [
    {
      id: "wedding-reception",
      title: "Wedding Reception",
      description: "Elegant platters for your special day celebrations.",
      image: "/placeholder.svg?height=256&width=400",
    },
    {
      id: "mehandi-ceremonies",
      title: "Mehandi Ceremonies",
      description: "Colorful and festive arrangements for traditional events.",
      image: "/placeholder.svg?height=256&width=400",
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      description: "Professional catering for business gatherings.",
      image: "/placeholder.svg?height=256&width=400",
    },
    {
      id: "birthday-parties",
      title: "Birthday Parties",
      description: "Fun and delicious platters for birthday celebrations.",
      image: "/placeholder.svg?height=256&width=400",
    },
    {
      id: "family-gatherings",
      title: "Family Gatherings",
      description: "Warm and inviting spreads for family moments.",
      image: "/placeholder.svg?height=256&width=400",
    },
    {
      id: "intimate-dinners",
      title: "Intimate Dinners",
      description: "Carefully curated platters for special dinners.",
      image: "/placeholder.svg?height=256&width=400",
    },
  ]

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            Gallery
          </h1>
          <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
            Moments captured at our events and by our customers.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-4 font-lexend font-semibold text-accent-orange">{category.title}</h3>
                <p className="text-text-primary mb-4 leading-relaxed">{category.description}</p>
                <Link
                  href={`/gallery/${category.id}`}
                  className="inline-block mt-4 text-accent-orange bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white transition-all duration-200"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
