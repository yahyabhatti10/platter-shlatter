import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-text-primary border-t-2 border-accent-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-lexend font-bold mb-4 text-accent-orange">
              About Platter Shlatter
            </h3>
            <p className="text-sm leading-relaxed">
              Handcrafted platters from Lahore. Follow us on social channels for
              daily updates and beautiful food moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-lexend font-bold mb-4 text-accent-orange">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/our-story", label: "Our Story" },
                { href: "/platters", label: "Platters" },
                { href: "/cakes", label: "Cakes" },
                { href: "/gallery", label: "Gallery" },
                { href: "/love-stories", label: "Love Stories" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:text-accent-orange transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-lexend font-bold mb-4 text-accent-orange">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <Phone className="w-4 h-4 text-accent-orange" />
                <span>+92 331 4696825</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <Mail className="w-4 h-4 text-accent-orange" />
                <span>contact@plattershlatter.com</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent-orange" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-lexend font-bold mb-4 text-accent-orange">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/plattershlatter/",
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: "https://web.facebook.com/100083201597162/about/?_rdc=1&_rdr#",
                  label: "Facebook",
                },
                { icon: Mail, href: "#", label: "Email" },
                {
                  icon: Phone,
                  href: "https://wa.link/3ydfwf",
                  label: "WhatsApp",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full border-2 border-accent-orange flex items-center justify-center text-accent-orange hover:bg-accent-orange hover:text-white transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-accent-orange mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2025 Platter Shlatter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
