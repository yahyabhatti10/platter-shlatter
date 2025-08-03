import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  const galleryCategories = [
    {
      id: "birthday-bliss",
      title: "Birthday Bliss",
      description: "Wholesome treats that make birthdays extra special.",
      image: "/images/gallery/covers/birthday-bliss-cover.png",
    },
    {
      id: "candlelight-comforts",
      title: "Candlelight Comforts",
      description: "Warm and charming arrangements for intimate evenings.",
      image: "/images/gallery/covers/candlelight-comforts-cover.png",
    },
    {
      id: "gather-and-glow",
      title: "Gather & Glow",
      description: "Platters designed for cozy family and friends moments.",
      image: "/images/gallery/covers/gather-and-glow-cover.png",
    },
    {
      id: "love-in-layers",
      title: "Love in Layers",
      description: "Romantic platter experiences for Valentine's Day.",
      image: "/images/gallery/covers/love-in-layers-cover.png",
    },
    {
      id: "corporate-charm",
      title: "Corporate Charm",
      description: "Polished presentations for your professional events.",
      image: "/images/gallery/covers/corporate-charm-cover.png",
    },
    {
      id: "freshly-picked",
      title: "Freshly Picked",
      description:
        "Colorful and juicy fruit platters made with seasonal produce.",
      image: "/images/gallery/covers/freshly-picked-cover.png",
    },
    {
      id: "picnic-whispers",
      title: "Picnic Whispers",
      description: "Fresh and playful picnic-ready platter selections.",
      image: "/images/gallery/covers/picnic-whispers-cover.png",
    },
    {
      id: "eid-elegance",
      title: "Eid Elegance",
      description: "Joyful spreads crafted to enhance your Eid celebrations.",
      image: "/images/gallery/covers/eid-elegance-cover.png",
    },
    {
      id: "noor-e-iftar",
      title: "Noor-e-Iftar",
      description:
        "Blessed arrangements to make your Ramazan evenings memorable.",
      image: "/images/gallery/covers/noor-e-iftar-cover.png",
    },
    {
      id: "ring-and-revel",
      title: "Ring & Revel",
      description: "Delightful bites for your engagement celebrations.",
      image: "/images/gallery/covers/ring-and-revel-cover.png",
    },
    {
      id: "henna-and-harmony",
      title: "Henna & Harmony",
      description: "Festive platters for vibrant Mehndi celebrations.",
      image: "/images/gallery/covers/henna-and-harmony-cover.png",
    },
    {
      id: "hello-little-one",
      title: "Hello, Little One",
      description: "Welcoming platters to celebrate newborn arrivals.",
      image: "/images/gallery/covers/hello-little-one-cover.png",
    },
  ];

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
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
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
                <h3 className="text-2xl mb-4 font-lexend font-semibold text-accent-orange">
                  {category.title}
                </h3>
                <p className="text-text-primary mb-4 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  href={`/gallery/${category.id}`}
                  className="w-full text-center inline-block mt-4 text-accent-orange bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white transition-all duration-200"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
