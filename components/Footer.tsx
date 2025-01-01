import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-muted-foreground">
              Majestic Painting and Decorating Pty Ltd in Guildford transforms
              spaces with high-quality painting services. From residential to
              commercial projects, their skilled team delivers flawless results
              using premium materials, combining precision, style, and
              craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/15LUcv5mEB/?mibextid=wwXIfr"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                <Facebook size={32} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/majestic_painting_decorating_/profilecard/?igsh=MXF4Yjg3eDFydWV4"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
              >
                <Instagram size={32} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="https://goo.gl/maps/YourGoogleMapsLink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <MapPin size={16} className="mr-2" />
                <span>34 Bowden Street, Guildford, NSW 2161</span>
              </a>
              <a
                href="tel:+61415894507"
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <Phone size={16} className="mr-2" />
                <span>+61 415 894 507</span>
              </a>
              <a
                href="mailto:info.majesticpainters@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <Mail size={16} className="mr-2" />
                <span>info.majesticpainters@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2025 Majestic Painting and Decorating Pty Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
