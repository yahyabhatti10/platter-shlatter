"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
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

  function handleNavClick(href: string) {
    setIsMenuOpen(false);
    router.push(href);
  }

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary border-b border-accent-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" onClick={() => handleNavClick("/")}>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Platter Shlatter Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Link>
            <span
              className="font-lexend font-extrabold text-2xl text-accent-orange cursor-pointer"
              onClick={() => handleNavClick("/")}
            >
              PlatterShlatter.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-text-primary py-2 relative group focus:outline-none"
                >
                  {link.label}
                  <span
                    className={[
                      "absolute bottom-0 left-0 h-0.5 bg-accent-orange transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-bg-primary absolute top-16 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-text-primary hover:text-accent-orange text-lg transition-colors duration-200 text-left w-full focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
