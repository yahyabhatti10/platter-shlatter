import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { platters, occasionalPlatters, dealPlatters } from "./platterData";

export default function Platters() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Deals Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
              Deal Platters
            </h2>
            <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
              Special offers and combo deals for your events and gatherings.
            </p>
          </div>

          <div className="space-y-20">
            {dealPlatters.map((deal, index) => (
              <div
                key={deal.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={deal.reverse ? "lg:order-2" : ""}>
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    deal.reverse
                      ? "lg:order-1 lg:text-right lg:flex lg:flex-col lg:items-end"
                      : ""
                  }`}
                >
                  <h2 className="font-lexend font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                    {deal.name}
                  </h2>
                  <p className="text-text-primary leading-relaxed mb-4 max-w-lg">
                    {deal.description}
                  </p>
                  <p className="text-text-primary italic text-sm mb-4 max-w-lg">
                    <strong>Ingredients:</strong> {deal.ingredients}
                  </p>
                  {/* {deal.note && (
                    <p className="text-text-primary text-sm mb-4 max-w-lg italic">
                      <strong>Note:</strong> {deal.note}
                    </p>
                  )} */}
                  <Link
                    href={`/platters/${deal.id}`}
                    className="inline-flex items-center text-accent-orange font-medium transition-colors duration-200 group bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Platters */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            Signature Platters
          </h1>
          <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
            Explore our handcrafted wooden trays filled with savoury bites,
            sweet delights, dips, salads, and more.
          </p>
        </div>

        <div className="space-y-20">
          {platters.map((platter, index) => (
            <div
              key={platter.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className={platter.reverse ? "lg:order-2" : ""}>
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                  <Image
                    src={platter.image}
                    alt={platter.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  platter.reverse
                    ? "lg:order-1 lg:text-right lg:flex lg:flex-col lg:items-end"
                    : ""
                }`}
              >
                <h2 className="font-lexend font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                  {platter.name}
                </h2>
                <p className="text-text-primary leading-relaxed mb-4 max-w-lg">
                  {platter.description}
                </p>
                <p className="text-text-primary italic text-sm mb-6 max-w-lg">
                  <strong>Ingredients:</strong> {platter.ingredients}
                </p>
                <Link
                  href={`/platters/${platter.id}`}
                  className="inline-flex items-center text-accent-orange font-medium transition-colors duration-200 group bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  View Full Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Occasional Platters */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
              Occasional Platters
            </h2>
            <p className="text-lg text-text-primary max-w-3xl mx-auto leading-relaxed">
              Specially themed platters for birthdays, engagements, weddings,
              and more.
            </p>
          </div>

          <div className="space-y-20">
            {occasionalPlatters.map((platter, index) => (
              <div
                key={platter.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={platter.reverse ? "lg:order-2" : ""}>
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                    <Image
                      src={platter.image}
                      alt={platter.name}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    platter.reverse
                      ? "lg:order-1 lg:text-right lg:flex lg:flex-col lg:items-end"
                      : ""
                  }`}
                >
                  <h2 className="font-lexend font-bold text-2xl sm:text-3xl text-text-primary mb-4">
                    {platter.name}
                  </h2>
                  <p className="text-text-primary leading-relaxed mb-4 max-w-lg">
                    {platter.description}
                  </p>
                  <p className="text-text-primary italic text-sm mb-6 max-w-lg">
                    <strong>Ingredients:</strong> {platter.ingredients}
                  </p>
                  <Link
                    href={`/platters/${platter.id}`}
                    className="inline-flex items-center text-accent-orange font-medium transition-colors duration-200 group bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
              <div>
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent-orange">
                  <Image
                    src="/images/platter.png"
                    alt="Custom Platter Design"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

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
                  className="inline-flex items-center text-accent-orange font-medium transition-colors duration-200 group bg-white px-4 py-2 rounded-xl border border-accent-orange hover:bg-accent-orange hover:text-white"
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
