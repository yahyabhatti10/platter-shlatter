"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // current URL path (e.g. "/platters")

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Our Story" },
    { href: "/platters", label: "Platters" },
    { href: "/gallery", label: "Gallery" },
    { href: "/love-stories", label: "Love Stories" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-accent-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Platter Shlatter Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-lexend font-extrabold text-2xl text-accent-orange">
              PlatterShlatter.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-primary py-2 relative group"
                  onClick={() => {
                    // scroll to top when link clicked
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link.label}
                  {/* Underline span */}
                  <span
                    className={[
                      "absolute bottom-0 left-0 h-0.5 bg-accent-orange transition-all duration-300",
                      // if active, width is full immediately; otherwise start at 0 and expand on hover
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-text-primary" />
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className={`fixed top-0 right-0 h-full w-4/5 bg-bg-primary z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-xl ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close button positioned at top right */}
              <div className="absolute top-4 right-4">
                <button
                  className="p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-text-primary" />
                </button>
              </div>

              <div className="p-6 pt-20">
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-text-primary hover:text-accent-orange py-3 text-lg transition-colors duration-200"
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
