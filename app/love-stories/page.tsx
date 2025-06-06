import Image from "next/image"
import { Heart } from "lucide-react"

export default function LoveStories() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      event: "Wedding Reception",
      quote:
        "The platters were absolutely stunning! Our guests couldn't stop talking about how beautiful and delicious everything was.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Ali Hassan",
      event: "Corporate Event",
      quote: "Professional service and amazing presentation. Platter Shlatter made our company event memorable.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Fatima Khan",
      event: "Birthday Party",
      quote:
        "My daughter's birthday was made extra special with these beautiful platters. Thank you for the wonderful service!",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Ahmed Malik",
      event: "Family Gathering",
      quote: "The quality and taste exceeded our expectations. Will definitely order again for future family events.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "Zara Siddique",
      event: "Mehandi Ceremony",
      quote:
        "Perfect for our traditional celebration. The presentation was Instagram-worthy and the taste was incredible.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Hassan Ali",
      event: "Intimate Dinner",
      quote: "Romantic and elegant setup for our anniversary dinner. Couldn't have asked for better service.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-accent-orange mr-3" />
            <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline">
              Love Stories
            </h1>
            <Heart className="w-8 h-8 text-accent-orange ml-3" />
          </div>
          <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
            What our customers say, in photos and videos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative group h-96 rounded-lg overflow-hidden cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-70 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h3 className="text-2xl font-lexend mb-2">{testimonial.name}</h3>
                  <p className="text-sm mb-4 text-accent-orange">{testimonial.event}</p>
                  <p className="italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
