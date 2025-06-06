"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Leaf, Heart, Smile, Users } from "lucide-react"

export default function OurStory() {
  const [counters, setCounters] = useState({
    orders: 0,
    customers: 0,
    events: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { orders: 1000, customers: 500, events: 300 }
      const duration = 2000
      const steps = 60
      const increment = {
        orders: targets.orders / steps,
        customers: targets.customers / steps,
        events: targets.events / steps,
      }

      let step = 0
      const timer = setInterval(() => {
        step++
        setCounters({
          orders: Math.min(Math.floor(increment.orders * step), targets.orders),
          customers: Math.min(Math.floor(increment.customers * step), targets.customers),
          events: Math.min(Math.floor(increment.events * step), targets.events),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, duration / steps)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )

    const statsSection = document.getElementById("stats-section")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            Our Story
          </h1>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-left">
            <h2 className="font-lexend font-bold text-3xl text-text-primary mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-text-primary max-w-2xl">
              At Platter Shlatter, we believe in food that looks stunning and tastes amazing. We are Zainab Abdullah and
              Abdullah Asim, two friends from Lahore who started sharing handmade platters on Instagram. Our mission is
              to bring flavour and warmth to every bite.
            </p>
          </div>
          <div className="animate-fade-in-right">
            <Image
              src="/images/about-us.jpg"
              alt="About Platter Shlatter"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Our Team */}
        <div className="text-center mb-16">
          <h2 className="font-lexend font-bold text-3xl text-text-primary section-underline mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Zainab Abdullah", role: "Co-Founder" },
              { name: "Abdullah Asim", role: "Co-Founder" },
            ].map((founder, index) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-accent-orange/20">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt={founder.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-lexend font-bold text-xl text-text-primary mb-2">{founder.name}</h3>
                <p className="text-accent-orange font-medium">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="text-center mb-8 bg-white py-16 px-4 rounded-2xl shadow-lg">
          <h2 className="font-lexend font-bold text-3xl text-text-primary section-underline mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Freshness First",
                description: "We use fresh, locally sourced ingredients.",
              },
              {
                icon: Heart,
                title: "Handcrafted with Care",
                description: "Each platter is assembled by hand.",
              },
              {
                icon: Smile,
                title: "Joy in Every Bite",
                description: "We spark happiness in every meal.",
              },
              {
                icon: Users,
                title: "Community Focused",
                description: "We celebrate Lahore's food culture.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-bg-primary border border-accent-brown rounded-xl p-6 hover:-translate-y-2 hover:border-accent-orange transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-accent-orange mx-auto mb-4" />
                <h3 className="font-lexend font-bold text-lg text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-primary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
