import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data";

const footerLinks = {
  Programs: [
    { label: "Dance", href: "/dance" },
    { label: "Music", href: "/music" },
    { label: "Visual Arts", href: "/art" },
    { label: "Theatre", href: "/theatre" },
  ],
  "Get Involved": [
    { label: "Register for Classes", href: siteConfig.registerUrl, external: true },
    { label: "Buy Tickets", href: siteConfig.ticketsUrl, external: true },
    { label: "Donate", href: "https://www.paypal.com/donate", external: true },
    { label: "Volunteer", href: "/community" },
  ],
  Facilities: [
    { label: "Theater Rental", href: "/contact" },
    { label: "Birthday Parties", href: "/contact" },
    { label: "HCA Merchandise", href: siteConfig.merchandiseUrl, external: true },
    { label: "Scholarship Application", href: "/community" },
  ],
  About: [
    { label: "Our Mission", href: "/community" },
    { label: "Admin Staff", href: "/community" },
    { label: "Instructors", href: "/instructors" },
    { label: "Sponsors", href: "/community" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-hca-black border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/HCA-full-logo-DarkBlue.png"
                  alt="HCA"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <p className="font-playfair text-hca-cream font-semibold">Holmes Center</p>
                <p className="font-grotesk text-hca-accent text-xs tracking-widest uppercase">
                  for the Arts
                </p>
              </div>
            </Link>
            <p className="font-grotesk text-hca-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
              Enriching Holmes County through arts education and performance — where every voice, movement, and brushstroke matters.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-hca-cream/50 hover:text-hca-cream transition-colors text-sm font-grotesk"
              >
                <Phone className="w-4 h-4 text-hca-accent flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-hca-cream/50 hover:text-hca-cream transition-colors text-sm font-grotesk"
              >
                <Mail className="w-4 h-4 text-hca-accent flex-shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-hca-cream/50 text-sm font-grotesk">
                <MapPin className="w-4 h-4 text-hca-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-grotesk text-hca-cream text-sm font-semibold tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-hca-cream/50 hover:text-hca-cream transition-colors text-sm font-grotesk"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-hca-cream/50 hover:text-hca-cream transition-colors text-sm font-grotesk"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-grotesk text-hca-cream/30 text-xs">
            © {new Date().getFullYear()} Holmes Center for the Arts. Non-profit 501(c)(3).
          </p>
          <p className="font-grotesk text-hca-cream/30 text-xs">
            West side of Berlin, Ohio · Off State Route 39
          </p>
        </div>
      </div>
    </footer>
  );
}
