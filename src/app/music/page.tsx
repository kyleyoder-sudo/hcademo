"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Music2, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { musicInstructors, siteConfig } from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn } from "@/lib/animations";

const instruments = [
  {
    name: "Guitar",
    icon: "🎸",
    instructor: "Brad Olsen",
    price: "$25 / 30 min",
    description: "Acoustic, electric, and fingerstyle guitar for beginners through advanced. Weekday mornings and afternoons.",
    color: "#C9A87A",
  },
  {
    name: "Piano",
    icon: "🎹",
    instructor: "Susan Weaver",
    price: "Contact for pricing",
    description: "Classical and contemporary piano technique for all ages. Thursday mornings and Friday afternoons/evenings.",
    color: "#ACD3EA",
  },
  {
    name: "Voice",
    icon: "🎤",
    instructor: "Timothy Frye",
    price: "$30 / 30 min",
    description: "Vocal technique, breath control, and performance coaching. Tuesday afternoons and evenings.",
    color: "#4B80A0",
  },
  {
    name: "Strings",
    icon: "🎻",
    instructor: "Daniel Bolton",
    price: "$25 / 30 min",
    description: "Violin, cello, and viola for all skill levels. Classical technique from a conservatory-trained performer.",
    color: "#32566B",
  },
];

export default function MusicPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hca-dark via-hca-navy to-hca-dark" />
          {/* Decorative lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
            {Array.from({ length: 5 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={160 + i * 80}
                x2="1200"
                y2={160 + i * 80}
                stroke="#ACD3EA"
                strokeWidth="1"
              />
            ))}
            {/* Treble clef-like curves */}
            <path d="M600 50 Q650 100 600 150 Q550 200 600 250" stroke="#C9A87A" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <Image
              src="/images/DSC08686_JPG.jpg"
              alt="Music"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-hca-dark" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Private Lessons
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-7xl lg:text-9xl text-hca-cream font-bold leading-none mb-6"
          >
            Music
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-grotesk text-hca-cream/70 text-xl max-w-2xl leading-relaxed mb-8"
          >
            One-on-one private lessons with nationally recognized professional musicians. Guitar, Piano, Strings, and Voice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
            >
              <Phone className="w-4 h-4" />
              Call to Register
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-hca-cream/20 text-hca-cream rounded-xl hover:border-hca-cream/40 transition-colors font-grotesk"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── INSTRUMENTS ── */}
      <section className="section-padding bg-hca-dark" id="lessons">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Private Lessons
              </span>
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Choose Your <em className="text-gradient">Instrument</em>
            </h2>
            <p className="font-grotesk text-hca-cream/60 mt-4 max-w-2xl">
              All lessons are private (one-on-one) with professional instructors. Register by calling {siteConfig.phone} or emailing {siteConfig.email}.
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {instruments.map((instrument) => (
              <motion.div
                key={instrument.name}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-hca-navy border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: instrument.color }}
                />
                <div className="text-5xl mb-5">{instrument.icon}</div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-3xl text-hca-cream font-bold">{instrument.name}</h3>
                    <p className="font-grotesk text-sm mt-1" style={{ color: instrument.color }}>
                      with {instrument.instructor}
                    </p>
                  </div>
                  <span className="font-grotesk text-hca-gold text-sm font-semibold bg-hca-gold/10 px-3 py-1 rounded-full">
                    {instrument.price}
                  </span>
                </div>
                <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed">
                  {instrument.description}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <Music2 className="w-4 h-4 text-hca-accent" />
                    <span className="font-grotesk text-xs text-hca-cream/40">All skill levels welcome</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSTRUCTORS ── */}
      <section className="section-padding bg-hca-black" id="instructors">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Meet Your Teachers
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              World-Class <em className="text-gradient">Faculty</em>
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {musicInstructors.map((instructor, i) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden bg-hca-navy border border-white/5 hover:border-hca-accent/20 transition-all duration-300`}
              >
                {/* Photo */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-hca-navy/80 to-transparent" />
                </div>

                {/* Info */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-grotesk text-xs tracking-widest uppercase text-hca-accent">
                      {instructor.disciplines.join(" · ")}
                    </span>
                  </div>
                  <h3 className="font-playfair text-3xl text-hca-cream font-bold mb-1">
                    {instructor.name}
                  </h3>
                  <p className="font-grotesk text-hca-gold text-sm mb-4">{instructor.role}</p>
                  <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed mb-6">
                    {instructor.bio}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <div>
                      <p className="font-grotesk text-xs text-hca-cream/40 uppercase tracking-widest mb-1">
                        Rate
                      </p>
                      <p className="font-grotesk text-hca-gold font-semibold">{instructor.pricing}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-hca-gold fill-hca-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER CTA ── */}
      <section className="py-24 bg-hca-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Music2 className="w-12 h-12 text-hca-gold mx-auto mb-6 opacity-60" />
            <h2 className="font-playfair text-4xl text-hca-cream mb-4">
              Begin Your Musical Journey
            </h2>
            <p className="font-grotesk text-hca-cream/60 mb-8 leading-relaxed">
              Private music lessons are available for all ages and skill levels. Contact us to schedule your first lesson or ask about lesson times.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center gap-2 px-6 py-4 border border-hca-cream/20 text-hca-cream rounded-xl hover:border-hca-cream/40 transition-colors font-grotesk"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
