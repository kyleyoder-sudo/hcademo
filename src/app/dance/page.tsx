"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import ScrollReveal, { RevealItem } from "@/components/ScrollReveal";
import { danceStyles, danceInstructors, performances, siteConfig, galleryImages } from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn, scaleIn } from "@/lib/animations";

export default function DancePage() {
  const danceGallery = galleryImages.slice(0, 8);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/P27A0317_edited.jpg"
            alt="Dance at HCA"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hca-dark/90 via-hca-dark/60 to-hca-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-hca-dark via-transparent to-hca-dark/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Programs
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-7xl lg:text-9xl text-hca-cream font-bold leading-none mb-6"
          >
            Dance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-grotesk text-hca-cream/70 text-xl max-w-2xl leading-relaxed"
          >
            From first steps in Creative Movement to the spotlight of The Nutcracker — HCA&apos;s dance programs inspire excellence, artistry, and lifelong love of movement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            {["42 Classes / Week", "7+ Styles", "Pre-K to Adult", "Competition Team"].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-hca-gold" />
                <span className="font-grotesk text-hca-cream/60 text-sm">{stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DANCE STYLES ── */}
      <section className="section-padding bg-hca-dark" id="ballet">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Dance Disciplines
              </span>
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Find Your <em className="text-gradient">Style</em>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {danceStyles.map((style, i) => (
              <motion.div
                key={style.id}
                id={style.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden ${
                  i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image */}
                <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-hca-navy/80 lg:to-hca-navy/60" />
                </div>

                {/* Content */}
                <div className="bg-hca-navy p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-8 h-0.5 bg-hca-gold mb-5" />
                  <h3 className="font-playfair text-4xl text-hca-cream font-bold mb-4">
                    {style.title}
                  </h3>
                  <p className="font-grotesk text-hca-cream/60 text-base leading-relaxed mb-6">
                    {style.description}
                  </p>
                  <div className="space-y-2">
                    {style.levels.slice(0, 4).map((level) => (
                      <div key={level} className="flex items-start gap-3">
                        <Clock className="w-3.5 h-3.5 text-hca-gold mt-0.5 flex-shrink-0" />
                        <span className="font-grotesk text-hca-cream/70 text-sm">{level}</span>
                      </div>
                    ))}
                    {style.levels.length > 4 && (
                      <p className="font-grotesk text-hca-accent text-xs pl-6.5 mt-2">
                        +{style.levels.length - 4} more levels...
                      </p>
                    )}
                  </div>
                  <div className="mt-8">
                    <a
                      href={siteConfig.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-hca-gold/10 border border-hca-gold/30 text-hca-gold hover:bg-hca-gold/20 rounded-xl transition-all duration-200 font-grotesk text-sm font-medium"
                    >
                      Register for {style.title}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCES ── */}
      <section className="section-padding bg-hca-black" id="performances">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                On Stage
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Performance <em className="text-gradient">Opportunities</em>
            </h2>
            <p className="font-grotesk text-hca-cream/60 mt-4 max-w-2xl mx-auto">
              HCA students perform before live audiences throughout the year — from The Nutcracker at Ohio Star Theater to community events across Holmes County.
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {performances.map((perf) => (
              <motion.div
                key={perf.title}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={perf.image}
                    alt={perf.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/90 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-3 h-3 text-hca-gold fill-hca-gold" />
                    <span className="font-grotesk text-hca-gold text-xs tracking-widest uppercase">
                      {perf.season} · {perf.venue}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl text-hca-cream">{perf.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Community Performances */}
          <ScrollReveal>
            <div className="p-8 lg:p-12 rounded-2xl bg-hca-navy border border-white/5">
              <h3 className="font-playfair text-3xl text-hca-cream mb-4">Community Performances</h3>
              <p className="font-grotesk text-hca-cream/60 mb-6">
                HCA students also perform throughout the community, bringing the arts to audiences of all ages and backgrounds.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Walnut Hills Retirement Home",
                  "Majora Lane Retirement Home",
                  "Broadway Showcase at Hiland High School",
                  "Holmes County Fair",
                  "Share-a-Christmas",
                  "Holmes County Chamber of Commerce Christmas Luncheon",
                ].map((venue) => (
                  <div key={venue} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hca-gold mt-1.5 flex-shrink-0" />
                    <span className="font-grotesk text-hca-cream/60 text-sm">{venue}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DANCE INSTRUCTORS ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Faculty
              </span>
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Dance <em className="text-gradient">Instructors</em>
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5"
          >
            {danceInstructors.map((instructor) => (
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
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-playfair text-hca-cream font-semibold text-lg leading-tight">
                    {instructor.name}
                  </h4>
                  <p className="font-grotesk text-hca-accent text-xs mt-1">{instructor.role}</p>
                  <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                    {instructor.disciplines.map((d) => (
                      <span
                        key={d}
                        className="font-grotesk text-xs px-2 py-0.5 bg-hca-accent/20 text-hca-light rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-hca-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
                  <p className="font-grotesk text-hca-cream/80 text-xs leading-relaxed text-center line-clamp-8">
                    {instructor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-padding bg-hca-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-playfair text-4xl text-hca-cream">
              Life in the <em className="text-gradient">Studio</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {danceGallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-hca-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl text-hca-cream mb-4">
              Ready to Start Dancing?
            </h2>
            <p className="font-grotesk text-hca-cream/60 mb-8">
              Register for classes online or call us at {siteConfig.phone} to find the perfect class for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-hca-cream/20 text-hca-cream rounded-xl hover:border-hca-cream/40 transition-colors font-grotesk"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
