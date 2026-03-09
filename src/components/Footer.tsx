import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const footerPrograms = [
  { label: "Dance", href: "/dance" },
  { label: "Music", href: "/music" },
  { label: "Visual Arts", href: "/art" },
  { label: "Theatre", href: "/theatre" },
];

const footerInfo = [
  { label: "Instructors", href: "/instructors" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#C09050]/20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div>
          <div className="relative h-10 w-10 mb-6">
            <Image
              src="/images/HCA-full-logo-DarkBlue.png"
              alt="HCA"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <p className="font-playfair italic text-[#F2EDE4]/60 text-base leading-relaxed max-w-xs">
            An arts house built for performance, education, and wonder.
          </p>
          <div className="mt-8 space-y-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="block font-grotesk text-xs text-[#6B6560] hover:text-[#C09050] transition-colors tracking-wide"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block font-grotesk text-xs text-[#6B6560] hover:text-[#C09050] transition-colors tracking-wide"
            >
              {siteConfig.email}
            </a>
            <p className="font-grotesk text-xs text-[#6B6560] leading-relaxed">
              {siteConfig.address}
            </p>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="label-gold mb-5">Programs</h4>
          <ul className="space-y-3">
            {footerPrograms.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-grotesk text-sm text-[#F2EDE4]/50 hover:text-[#F2EDE4] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="label-gold mb-5">Info</h4>
          <ul className="space-y-3">
            {footerInfo.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-grotesk text-sm text-[#F2EDE4]/50 hover:text-[#F2EDE4] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Register */}
        <div>
          <h4 className="label-gold mb-5">Connect</h4>
          <ul className="space-y-3">
            <li>
              <a
                href={siteConfig.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk text-sm text-[#F2EDE4]/50 hover:text-[#F2EDE4] transition-colors"
              >
                Register for Classes
              </a>
            </li>
            <li>
              <a
                href={siteConfig.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk text-sm text-[#F2EDE4]/50 hover:text-[#F2EDE4] transition-colors"
              >
                Buy Tickets
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-5 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-grotesk text-[11px] text-[#6B6560] tracking-wide">
            © {new Date().getFullYear()} Holmes Center for the Arts · Non-profit 501(c)(3)
          </p>
          <p className="font-grotesk text-[11px] text-[#6B6560] tracking-wide">
            Millersburg, Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}
