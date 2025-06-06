import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Platters() {
  const platters = [
    {
      id: 1,
      name: "Classic Mezze Platter",
      description:
        "A traditional Middle Eastern spread featuring hummus, baba ganoush, fresh vegetables, and artisanal crackers. Perfect for intimate gatherings and casual dining.",
      ingredients:
        "Hummus, baba ganoush, olives, cherry tomatoes, cucumber, pita bread, crackers",
      image: "/images/platter.png",
      reverse: false,
    },
    {
      id: 2,
      name: "Festive Celebration Board",
      description:
        "An elaborate arrangement of sweet and savory delights designed for special occasions. Features premium nuts, dried fruits, and gourmet treats.",
      ingredients:
        "Mixed nuts, dried fruits, chocolate, cheese, crackers, honey, preserves",
      image: "/images/platter.png",
      reverse: true,
    },
    {
      id: 3,
      name: "Garden Fresh Platter",
      description:
        "A vibrant collection of fresh seasonal vegetables, homemade dips, and healthy snacks. Ideal for health-conscious gatherings.",
      ingredients:
        "Fresh vegetables, yogurt dips, quinoa salad, seeds, herbs, whole grain crackers",
      image: "/images/platter.png",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Deals Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
              Deals
            </h2>
            <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
              Special offers and combo deals for your events and gatherings.
            </p>
          </div>

          <div className="space-y-20">
            {/* Deal entries would go here - similar structure to platters */}
            <div className="text-center">
              <p className="text-text-primary text-lg">
                Coming Soon - Exciting deals and packages!
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            Signature Platters
          </h1>
          <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
            Explore our handcrafted wooden trays filled with savoury bites,
            sweet delights, dips, salads, and more.
          </p>
        </div>

        {/* Platter Entries */}
        <div className="space-y-20">
          {platters.map((platter, index) => (
            <div
              key={platter.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className={`${platter.reverse ? "lg:order-2" : ""}`}>
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                  <Image
                    src={platter.image || "/placeholder.svg"}
                    alt={platter.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  platter.reverse ? "lg:order-1 lg:text-right" : ""
                } ${platter.reverse ? "lg:flex lg:flex-col lg:items-end" : ""}`}
              >
                <h2 className="font-lexend font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                  {platter.name}
                </h2>
                <p
                  className={`text-text-primary leading-relaxed mb-4 max-w-lg ${
                    platter.reverse ? "lg:text-right" : ""
                  }`}
                >
                  {platter.description}
                </p>
                <p
                  className={`text-text-primary italic text-sm mb-6 max-w-lg ${
                    platter.reverse ? "lg:text-right" : ""
                  }`}
                >
                  <strong>Ingredients:</strong> {platter.ingredients}
                </p>
                <Link
                  href={`/platters/${platter.id}`}
                  className="inline-flex items-center text-accent-orange font-medium hover:text-accent-brown transition-colors duration-200 group bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  View Full Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Create Your Own Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
              Create Your Own
            </h2>
            <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
              Design a custom platter tailored to your specific needs and
              preferences.
            </p>
          </div>

          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
              {/* Image */}
              <div>
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                  <Image
                    src="/images/platter.png"
                    alt="Custom Platter Design"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-lexend font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                  Custom Platter Design
                </h3>
                <p className="text-text-primary leading-relaxed mb-4 max-w-lg">
                  Work with our team to create the perfect platter for your
                  event. Choose your favorite ingredients, dietary preferences,
                  and presentation style. Every custom platter is uniquely
                  crafted to match your vision.
                </p>
                <p className="text-text-primary italic text-sm mb-6 max-w-lg">
                  <strong>Options:</strong> Your choice of ingredients, custom
                  dietary requirements, personalized presentation,
                  event-specific themes
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-accent-orange font-medium hover:text-accent-brown transition-colors duration-200 group bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Start Designing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
