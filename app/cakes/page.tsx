"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CakeCarouselProps {
  images: string[];
  alt: string;
}

function CakeCarousel({ images, alt }: CakeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange relative">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={alt}
            width={256}
            height={256}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-accent-orange" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-accent-orange" />
            </button>
          </>
        )}

        {/* Always three dots indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() =>
                setCurrentIndex(
                  (prev) => prev + (dot - (prev % 3)) + images.length
                )
              }
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex % 3 === dot ? "bg-accent-orange" : "bg-white/60"
              }`}
              aria-label={`Go to image ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CakeCardProps {
  name: string;
  description: string;
  images: string[];
  index: number;
}

function CakeCard({ name, description, images, index }: CakeCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CakeCarousel images={images} alt={name} />

      <div className="text-center mt-6">
        <h3 className="font-lexend font-bold text-2xl text-text-primary mb-4">
          {name}
        </h3>
        <p className="text-text-primary leading-relaxed mb-4">{description}</p>

        {/* Size and Price Display */}
        <div className="bg-accent-orange/10 border-2 border-accent-orange rounded-full px-6 py-3 inline-block mb-6">
          <div className="font-lexend font-semibold text-text-primary text-sm">
            Standard Size
          </div>
          <div className="text-accent-orange font-bold text-lg">2 Pounds</div>
        </div>
      </div>
    </div>
  );
}

export default function Cakes() {
  const cakes = [
    {
      name: "Classic Vanilla Cake",
      description:
        "A timeless favorite with rich Vanilla flavor and smooth Choclate Fudge frosting frosting. Light, fluffy, and perfect for any celebration. Made with premium vanilla extract and the finest ingredients for an unforgettable taste.",
      images: [
        "/images/cakes/vanilla-1.png",
        "/images/cakes/vanilla-2.png",
        "/images/cakes/vanilla-3.png",
        "/images/cakes/vanilla-4.png",
        "/images/cakes/vanilla-5.png",
      ],
    },
    {
      name: "Chocolate Fudge Cake",
      description:
        "Rich, moist chocolate cake layered with Creamy Chocolate ganache. A chocolate lover's dream come true. Made with premium cocoa and dark chocolate for an intensely satisfying experience.",
      images: [
        "/images/cakes/choclate-1.png",
        "/images/cakes/choclate-2.png",
        "/images/cakes/choclate-3.png",
        "/images/cakes/choclate-4.png",
        "/images/cakes/choclate-5.png",
      ],
    },
    {
      name: "Elegant Red Velvet Cake",
      description:
        "Luxurious red velvet cake with Cream Cheese frosting. Perfectly balanced flavors with a stunning presentation. The classic Southern favorite that adds elegance to any occasion.",
      images: [
        "/images/cakes/red-velvet-1.png",
        "/images/cakes/red-velvet-2.png",
        "/images/cakes/red-velvet-3.png",
        "/images/cakes/red-velvet-4.png",
        "/images/cakes/red-velvet-5.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            Signature Cakes
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-primary leading-relaxed mb-6">
              Complete your platter experience with our handcrafted cakes. Our
              signature cakes are available as add-ons to any platter order,
              perfect for making your special occasions even more memorable.
            </p>
            <div className="bg-accent-orange/10 border-l-4 border-accent-orange p-6 rounded-r-xl">
              <p className="text-text-primary font-medium">
                <strong>Please Note:</strong> Our cakes are delivered
                exclusively with platter orders. They cannot be ordered
                separately and serve as the perfect complement to our
                handcrafted platters for weddings, birthdays, corporate events,
                and other special celebrations. The price of each cake is PKR
                2000 per pound.
              </p>
            </div>
          </div>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cakes.map((cake, index) => (
            <CakeCard
              key={cake.name}
              name={cake.name}
              description={cake.description}
              images={cake.images}
              index={index}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-bg-primary rounded-2xl p-8 text-center">
          <h2 className="font-lexend font-bold text-2xl text-text-primary mb-4">
            How to Order
          </h2>
          <p className="text-text-primary leading-relaxed mb-6 max-w-3xl mx-auto">
            To add any of our signature cakes to your platter order, simply
            mention your preferred flavor when placing your platter order. Our
            team will coordinate the delivery to ensure both your platter and
            cake arrive fresh and perfectly timed for your event.
          </p>
          <Link
            href="/contact"
            className="bg-accent-orange text-white px-8 py-3 rounded-xl font-medium hover:scale-105 hover:bg-accent-brown transition-all duration-300 inline-block"
          >
            Place Your Order
          </Link>
        </div>
      </div>
    </div>
  );
}
