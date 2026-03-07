"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";
import { navDropdown } from "@/lib/animations";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-hca-dark/98 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/images/HCA-full-logo-DarkBlue.png"
                  alt="HCA Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-playfair text-hca-cream text-base lg:text-lg font-semibold leading-tight tracking-wide">
                  Holmes Center
                </p>
                <p className="font-grotesk text-hca-accent text-xs tracking-[0.2em] uppercase">
                  for the Arts
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 font-grotesk text-sm font-medium tracking-wide transition-all duration-200 animated-underline ${
                      pathname === item.href
                        ? "text-hca-gold"
                        : "text-hca-cream/80 hover:text-hca-cream"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        variants={navDropdown}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-1 min-w-[220px] bg-hca-dark border border-white/12 shadow-2xl overflow-hidden origin-top"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center px-5 py-2.5 text-sm text-hca-cream/70 hover:text-hca-cream hover:bg-white/5 transition-all duration-150 font-grotesk"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 border border-hca-accent/40 hover:border-hca-accent text-hca-light hover:text-hca-cream text-sm font-medium font-grotesk tracking-widest uppercase transition-all duration-200"
              >
                Register
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-hca-gold text-hca-dark text-sm font-bold font-grotesk tracking-widest uppercase hover:bg-hca-gold-light transition-colors duration-200"
              >
                Buy Tickets
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-hca-cream/80 hover:text-hca-cream transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-hca-dark/98 backdrop-blur-xl pt-24 overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item, i) => (
                <div key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-xl font-playfair text-hca-cream border-b border-white/5"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 py-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm font-grotesk text-hca-cream/60 hover:text-hca-cream transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 space-y-3"
              >
                <a
                  href={siteConfig.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 border border-hca-accent/40 hover:border-hca-accent text-hca-light font-medium font-grotesk tracking-widest uppercase transition-colors"
                >
                  Register for Classes
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.ticketsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 bg-hca-gold text-hca-dark font-bold font-grotesk tracking-widest uppercase hover:bg-hca-gold-light transition-colors"
                >
                  Buy Tickets
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
