"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-lexend font-extrabold text-4xl sm:text-5xl text-text-primary section-underline mb-8">
            Contact Us
          </h1>
        </div>

        {/* Contact Form */}
        <div className="glass-panel max-w-4xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 border border-accent-brown rounded-xl focus:border-accent-orange focus:border-2 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 border border-accent-brown rounded-xl focus:border-accent-orange focus:border-2 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-text-primary font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 border border-accent-brown rounded-xl focus:border-accent-orange focus:border-2 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/60 border border-accent-brown rounded-xl focus:border-accent-orange focus:border-2 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your event, preferred platter types, number of guests, and any special requirements..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-accent-orange text-white px-8 py-3 rounded-xl font-medium hover:scale-105 hover:bg-accent-brown transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="text-center animate-fade-in-up">
                <p className="font-bold text-text-primary bg-green-100 border border-green-400 rounded-xl p-4">
                  Thanks! We'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
