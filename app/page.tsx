"use client";

import Link from "next/link";
import Image from "next/image";
import { Package, UserCheck, PartyPopper, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [counters, setCounters] = useState({
    orders: 0,
    customers: 0,
    events: 0,
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { orders: 1000, customers: 500, events: 300 };
      const duration = 2000;
      const steps = 60;
      const increment = {
        orders: targets.orders / steps,
        customers: targets.customers / steps,
        events: targets.events / steps,
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          orders: Math.min(Math.floor(increment.orders * step), targets.orders),
          customers: Math.min(
            Math.floor(increment.customers * step),
            targets.customers
          ),
          events: Math.min(Math.floor(increment.events * step), targets.events),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center food-pattern-bg rounded-2xl p-8">
            {/* Left Column */}
            <div className="animate-fade-in-left">
              <h1 className="font-festive font-bold text-5xl sm:text-6xl lg:text-8xl text-accent-orange mb-6">
                Handcrafted Platters from Lahore
              </h1>
              <p className="text-xl text-text-primary mb-8 leading-relaxed">
                Curated bites for every occasion—made with love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/platters"
                  className="bg-accent-orange text-white px-8 py-3 rounded-xl font-medium hover:scale-105 hover:bg-accent-brown transition-all duration-300 text-center"
                >
                  Explore Our Platters
                </Link>
                <Link
                  href="/contact"
                  className="bg-accent-orange text-white px-8 py-3 rounded-xl font-medium hover:scale-105 hover:bg-accent-brown transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="animate-fade-in-right">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/platter.jpg"
                  alt="Beautiful handmade platter with various foods"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Success Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
              Our Success
            </h2>
          </div>

          <div
            id="stats-section"
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: Package,
                  count: counters.orders,
                  label: "Orders Completed",
                  suffix: "+",
                },
                {
                  icon: UserCheck,
                  count: counters.customers,
                  label: "Happy Customers",
                  suffix: "+",
                },
                {
                  icon: PartyPopper,
                  count: counters.events,
                  label: "Large Events Served",
                  suffix: "+",
                },
              ].map((stat, index) => (
                <div key={index} className="animate-counter">
                  <stat.icon className="w-12 h-12 text-accent-orange mx-auto mb-4" />
                  <div className="text-3xl font-lexend font-bold text-accent-orange mb-2">
                    {stat.count}
                    {stat.suffix}
                  </div>
                  <div className="text-text-primary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-primary leading-relaxed">
              Everything you need to know about our handmade platters
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How far in advance should I place my order?",
                answer:
                  "We recommend placing orders at least 24-48 hours in advance to ensure availability. For large events or special occasions, please contact us 3-5 days ahead.",
              },
              {
                question: "What areas do you deliver to in Lahore?",
                answer:
                  "We deliver throughout Lahore city. Delivery charges may vary based on location. Contact us for specific delivery information to your area.",
              },
              {
                question: "Can you accommodate dietary restrictions?",
                answer:
                  "Yes! We can customize platters for various dietary needs including vegetarian, vegan, gluten-free, and other specific requirements. Please mention your needs when ordering.",
              },
              {
                question: "What's included in a typical platter?",
                answer:
                  "Our platters include a variety of fresh ingredients, dips, crackers, fruits, nuts, and artisanal items arranged on beautiful wooden trays. Each platter is unique and crafted with care.",
              },
              {
                question: "Do you provide platters for large events?",
                answer:
                  "Absolutely! We specialize in catering for weddings, corporate events, parties, and large gatherings. Contact us to discuss your event requirements and get a custom quote.",
              },
              {
                question: "How do I place an order?",
                answer:
                  "You can contact us through Instagram @plattershlatter, WhatsApp, or use our contact form. We'll discuss your requirements and provide pricing details.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-bg-primary border border-accent-brown rounded-xl overflow-hidden hover:border-accent-orange transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-lexend font-bold text-lg text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-accent-orange flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent-orange flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-text-primary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-primary mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="bg-accent-orange text-white px-8 py-3 rounded-xl font-medium hover:scale-105 hover:bg-accent-brown transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
