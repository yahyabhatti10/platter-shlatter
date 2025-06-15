import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { allPlatters } from "../platterData";

interface PlatterDetailsProps {
  params: {
    id: string;
  };
}

export default function PlatterDetails({ params }: PlatterDetailsProps) {
  const platterId = parseInt(params.id);
  const platter = allPlatters.find((p) => p.id === platterId);

  if (!platter) return notFound();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/platters"
          className="inline-flex items-center text-accent-orange hover:text-accent-brown transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Platters
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            {platter.name}
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Side */}
          <div className="animate-fade-in-left">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                <Image
                  src={platter.image}
                  alt={platter.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              <div>
                <h2 className="font-lexend font-bold text-2xl text-text-primary mb-4">
                  Description
                </h2>
                <p className="text-text-primary leading-relaxed text-lg">
                  {platter.description}
                </p>
              </div>

              <div>
                <h3 className="font-lexend font-bold text-xl text-text-primary mb-3">
                  Ingredients
                </h3>
                <p className="text-text-primary italic">
                  <strong>Includes:</strong> {platter.ingredients}
                </p>
              </div>

              {/* Size Options if Available */}
              {platter.sizes && Array.isArray(platter.sizes) && (
                <div>
                  <h3 className="font-lexend font-bold text-xl text-text-primary mb-4">
                    Available Sizes
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {platter.sizes.map((sizeOption, index) => (
                      <div
                        key={index}
                        className="bg-accent-orange/10 border-2 border-accent-orange rounded-full px-6 py-3 text-center"
                      >
                        <div className="font-lexend font-semibold text-text-primary text-sm">
                          {sizeOption.size}
                        </div>
                        <div className="text-accent-orange font-bold text-lg">
                          {sizeOption.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Order Button */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="bg-accent-orange text-white px-8 py-3 rounded-xl font-medium hover:scale-105 hover:bg-accent-brown transition-all duration-300 inline-block"
                >
                  Order This Platter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
