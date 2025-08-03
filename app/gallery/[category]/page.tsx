"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useInView } from "react-intersection-observer";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

export default function GalleryDetail() {
  const params = useParams();
  const category = params?.category as string;

  const categoryTitles: { [key: string]: string } = {
    "henna-and-harmony": "Henna & Harmony",
    "corporate-charm": "Corporate Charm",
    "birthday-bliss": "Birthday Bliss",
    "gather-and-glow": "Gather & Glow",
    "candlelight-comforts": "Candlelight Comforts",
    "love-in-layers": "Love in Layers",
    "picnic-whispers": "Picnic Whispers",
    "eid-elegance": "Eid Elegance",
    "noor-e-iftar": "Noor-e-Iftar",
    "ring-and-revel": "Ring & Revel",
    "hello-little-one": "Hello, Little One",
    "freshly-picked": "Freshly Picked",
  };

  const title = categoryTitles[category] || "Gallery";
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    if (!category) return;

    const loadImages = async () => {
      const loaded: ImageItem[] = [];
      const maxImages = 50;

      for (let i = 1; i <= maxImages; i++) {
        const src = `/images/gallery/${category}/${i}.png`;

        try {
          const res = await fetch(src, { method: "HEAD" });
          if (res.ok) {
            loaded.push({
              id: i,
              src,
              alt: `${title} - Image ${i}`,
            });
          } else {
            break;
          }
        } catch {
          break;
        }
      }

      setImages(loaded);
    };

    loadImages();
  }, [category]);

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
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary mb-8">
            {title}
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <LazyImageCard key={image.id} image={image} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LazyImageCard({ image, delay }: { image: ImageItem; delay: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  return (
    <div
      ref={ref}
      className="aspect-square overflow-hidden rounded-2xl shadow-lg animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {inView && (
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-2xl"
          loading="lazy"
        />
      )}
    </div>
  );
}
