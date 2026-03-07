"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import StatsSection from "@/components/StatsCounter";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import { programs, danceInstructors, siteConfig, performances, galleryImages } from "@/lib/data";
import {
  staggerContainer,
  fadeInUp,
  heroTitle,
  heroWord,
  fadeIn,
  scaleIn,
} from "@/lib/animations";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleWords = ["Where", "Art", "Comes", "Alive"];

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="/images/P27A0317_edited.jpg"
            alt="HCA Performance"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hca-dark/90 via-hca-dark/60 to-hca-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-hca-dark via-transparent to-transparent" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Holmes Center for the Arts
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            className="font-playfair text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-8 text-shadow-dark perspective-1000"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                variants={heroWord}
                className={`block ${i === 1 || i === 2 ? "text-gradient" : "text-hca-cream"}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="font-grotesk text-hca-cream/70 text-lg max-w-md mb-10 leading-relaxed"
          >
            Dance. Music. Art. Theatre. World-class education in the heart of Ohio&apos;s Amish Country.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={siteConfig.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-hca-gold text-hca-dark font-bold hover:bg-hca-gold-light transition-colors duration-200 font-grotesk text-xs tracking-widest uppercase"
            >
              Register for Classes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={siteConfig.ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-hca-cream/25 text-hca-cream hover:border-hca-cream/60 hover:bg-white/5 transition-all duration-200 font-grotesk text-xs tracking-widest uppercase"
            >
              Buy Tickets
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hca-cream/40"
        >
          <span className="font-grotesk text-xs tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── PROGRAMS ── */}
      <section className="section-padding bg-hca-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-hca-navy/30 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Our Programs
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl lg:text-6xl text-hca-cream mb-4">
              Four Disciplines,
              <br />
              <em className="text-gradient">Infinite Possibilities</em>
            </h2>
            <p className="font-grotesk text-hca-cream/60 text-lg max-w-2xl mx-auto">
              From preschool movement to pre-professional performance — HCA offers arts education for every age, ability, and aspiration.
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <Link href={program.href}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/95 via-hca-dark/30 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at bottom left, ${program.accent}33 0%, transparent 70%)` }}
                  />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                      <p className="font-grotesk text-xs tracking-[0.3em] uppercase mb-2"
                        style={{ color: program.accent }}>
                        {program.stats}
                      </p>
                      <h3 className="font-playfair text-4xl lg:text-5xl text-hca-cream font-bold mb-3">
                        {program.title}
                      </h3>
                      <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {program.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                        <span className="font-grotesk text-sm text-hca-cream/80">Explore {program.title}</span>
                        <ArrowRight className="w-4 h-4 text-hca-cream/80" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20 lg:py-32 bg-hca-navy/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_9951_edited.jpg"
            alt="Performance"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hca-dark via-hca-dark/80 to-hca-dark" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-hca-gold/40" />
              <span className="font-trirong text-hca-gold text-sm tracking-[0.3em] uppercase italic">
                Our Mission
              </span>
              <div className="w-16 h-px bg-hca-gold/40" />
            </div>
            <blockquote className="font-playfair text-2xl lg:text-4xl text-hca-cream/90 leading-relaxed italic font-light">
              &ldquo;To provide educational and performing opportunities in the arts for individuals of{" "}
              <span className="text-gradient not-italic font-semibold">all economic and social backgrounds</span>{" "}
              within a wholesome, family-oriented atmosphere.&rdquo;
            </blockquote>
            <div className="mt-8 font-grotesk text-hca-cream/40 text-sm tracking-widest uppercase">
              Holmes Center for the Arts · Non-profit 501(c)(3)
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PERFORMANCES ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                On Stage
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl lg:text-6xl text-hca-cream">
              Unforgettable <em className="text-gradient">Performances</em>
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {performances.map((perf) => (
              <motion.div
                key={perf.title}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={perf.image}
                    alt={perf.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/95 via-hca-dark/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-grotesk text-xs text-hca-gold tracking-widest uppercase">
                      {perf.season}
                    </span>
                    <span className="text-hca-cream/30">·</span>
                    <span className="font-grotesk text-xs text-hca-cream/40">{perf.venue}</span>
                  </div>
                  <h3 className="font-playfair text-2xl text-hca-cream font-semibold mb-2">
                    {perf.title}
                  </h3>
                  <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed">
                    {perf.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ── */}
      <section className="py-12 overflow-hidden bg-hca-black">
        <ScrollReveal className="text-center mb-8">
          <p className="font-grotesk text-hca-cream/30 text-xs tracking-[0.4em] uppercase">
            Life at HCA
          </p>
        </ScrollReveal>
        <div className="flex gap-4 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 flex-shrink-0"
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="256px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSTRUCTORS SPOTLIGHT ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-hca-gold/50" />
                <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                  World-Class Faculty
                </span>
              </div>
              <h2 className="font-playfair text-5xl text-hca-cream">
                Meet Our <em className="text-gradient">Instructors</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" className="hidden md:block">
              <Link
                href="/instructors"
                className="flex items-center gap-2 font-grotesk text-hca-accent hover:text-hca-light transition-colors text-sm"
              >
                View All Faculty <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          >
            {danceInstructors.slice(0, 4).map((instructor) => (
              <motion.div
                key={instructor.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
              >
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-playfair text-hca-cream font-semibold text-lg leading-tight">
                    {instructor.name}
                  </h4>
                  <p className="font-grotesk text-hca-accent text-xs mt-1">{instructor.role}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-hca-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                  <p className="font-grotesk text-hca-cream/80 text-xs leading-relaxed line-clamp-6">
                    {instructor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/instructors"
              className="inline-flex items-center gap-2 font-grotesk text-hca-accent text-sm"
            >
              View All Faculty <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── UPCOMING PRODUCTION BANNER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Nutcraker_2018_PRINT-90.jpg"
            alt="Theatre Production"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hca-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-trirong text-hca-gold italic text-sm tracking-widest uppercase mb-4">
              Summer 2026
            </p>
            <h2 className="font-playfair text-5xl lg:text-7xl text-hca-cream font-bold mb-4">
              The Prince of Egypt
            </h2>
            <p className="font-grotesk text-hca-cream/60 text-lg mb-2">
              Performances June 25–29 · Auditions May 4–8
            </p>
            <p className="font-grotesk text-hca-cream/40 text-sm mb-10">
              Center Stage Theater · Holmes Center for the Arts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/theatre#auditions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-hca-gold text-hca-dark font-bold hover:bg-hca-gold-light transition-colors font-grotesk text-xs tracking-widest uppercase"
              >
                Audition Information
              </Link>
              <a
                href={siteConfig.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-hca-cream/25 text-hca-cream hover:border-hca-cream/60 hover:bg-white/5 transition-colors font-grotesk text-xs tracking-widest uppercase"
              >
                Buy Tickets
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-hca-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Register for Classes",
                description: "Enroll in dance, music, or art classes through our online portal.",
                href: siteConfig.registerUrl,
                external: true,
                variant: "gold",
              },
              {
                title: "Theater Rental",
                description: "Book the Center Stage blackbox theater for your event or production.",
                href: "/contact",
                external: false,
                variant: "outline",
              },
              {
                title: "Support HCA",
                description: "Help us serve 633+ students with a tax-deductible donation.",
                href: "https://www.paypal.com/donate",
                external: true,
                variant: "outline",
              },
            ].map((item) => (
              <ScrollReveal key={item.title} className="p-8 border border-white/12 bg-hca-dark/50 hover:border-hca-accent/40 hover:bg-hca-navy/40 transition-all duration-300 group">
                <h3 className="font-playfair text-2xl text-hca-cream mb-3">{item.title}</h3>
                <p className="font-grotesk text-hca-cream/50 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-grotesk text-sm text-hca-gold group-hover:gap-3 transition-all duration-200"
                  >
                    {item.variant === "gold" ? "Get Started" : "Learn More"}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 font-grotesk text-sm text-hca-gold group-hover:gap-3 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
