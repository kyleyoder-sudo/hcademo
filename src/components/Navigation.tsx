"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(6,6,6,0.94)"
            : "transparent",
          borderBottom: scrolled ? "1px solid rgba(192,144,80,0.2)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex shrink-0 items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/images/HCA-full-logo-DarkBlue.png"
                alt="HCA Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="hidden sm:block font-playfair text-base font-medium text-[#F2EDE4]">
              Holmes Center for the Arts
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-grotesk text-[0.75rem] tracking-[0.22em] uppercase transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-[#C09050]"
                    : "text-[#F2EDE4]/60 hover:text-[#F2EDE4]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Buy Tickets */}
          <div className="hidden lg:block">
            <a
              href={siteConfig.ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#C09050] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase text-[#C09050] px-5 py-2.5 hover:bg-[#C09050] hover:text-[#060606] transition-all duration-300"
            >
              Buy Tickets
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#F2EDE4]/70 hover:text-[#F2EDE4] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060606] flex flex-col justify-center px-8"
          >
            <div className="space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-playfair text-4xl py-3 transition-colors ${
                      pathname === item.href
                        ? "text-[#C09050]"
                        : "text-[#F2EDE4]/80 hover:text-[#F2EDE4]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-12"
            >
              <a
                href={siteConfig.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#C09050] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase text-[#C09050] px-6 py-3 hover:bg-[#C09050] hover:text-[#060606] transition-all duration-300"
              >
                Buy Tickets
              </a>
            </motion.div>

            {/* Bottom contact */}
            <div className="absolute bottom-10 left-8 right-8">
              <div className="w-8 h-px bg-[#C09050]/40 mb-4" />
              <p className="font-grotesk text-xs text-[#6B6560] tracking-widest uppercase">
                {siteConfig.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
