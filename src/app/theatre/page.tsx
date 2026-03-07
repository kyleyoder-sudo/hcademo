"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, MapPin, Spotlight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { theatreProductions, siteConfig } from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn, scaleIn } from "@/lib/animations";

const theatreImages = [
  "/images/Nutcraker_2018_PRINT-90.jpg",
  "/images/A%20Night%20at%20the%20Art%20Museum%20April%202022%20nw-193.jpg",
  "/images/A%20Night%20at%20the%20Art%20Museum%20April%202022%20nw-205.jpg",
  "/images/Dancing%20Under%20the%20Stars.jpg",
];

const pastProductions = theatreProductions.filter((p) => p.status === "past");
const upcomingProductions = theatreProductions.filter((p) => p.status === "upcoming");

export default function TheatrePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Nutcraker_2018_PRINT-90.jpg"
            alt="Theatre at HCA"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Spotlight effect */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 70% 40%, rgba(75,128,160,0.15) 0%, transparent 60%)",
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/98 via-hca-dark/50 to-hca-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-hca-dark/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                The Center Stage
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-7xl lg:text-9xl text-hca-cream font-bold leading-none mb-6"
          >
            Theatre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-grotesk text-hca-cream/70 text-xl max-w-2xl leading-relaxed"
          >
            Full-scale musical productions in our intimate blackbox theater — a hidden gem in the heart of Ohio&apos;s Amish Country. An immersive theatrical experience unlike any other.
          </motion.p>
        </div>
      </section>

      {/* ── UPCOMING PRODUCTION ── */}
      <section className="py-0 bg-hca-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hca-dark to-hca-black opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-hca-gold/20 bg-hca-navy">
              {/* Production image side */}
              <div className="relative h-64 lg:h-auto min-h-[400px]">
                <Image
                  src="/images/audition.png"
                  alt="The Prince of Egypt"
                  fill
                  className="object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/Nutcraker_2018_PRINT-90.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:to-hca-navy/80" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-hca-gold text-hca-dark text-xs font-semibold rounded-full font-grotesk uppercase tracking-wider">
                    Upcoming · Summer 2026
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="font-trirong text-hca-gold italic text-sm tracking-widest uppercase mb-3">
                  HCA Summer Musical 2026
                </p>
                <h2 className="font-playfair text-5xl text-hca-cream font-bold mb-2 leading-tight">
                  The Prince<br />of Egypt
                </h2>
                <p className="font-grotesk text-hca-cream/60 mb-8 leading-relaxed">
                  Experience the epic story of Moses and Rameses in HCA&apos;s most ambitious production to date. Spectacular choreography, stunning costumes, and a live orchestra — right here in Holmes County.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Calendar, label: "Performances", value: "June 25–29, 2026" },
                    { icon: Calendar, label: "Auditions", value: "In-Person May 4–6 · Virtual by May 8" },
                    { icon: MapPin, label: "Venue", value: "Center Stage Theater · HCA" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-hca-gold flex-shrink-0" />
                      <div>
                        <span className="font-grotesk text-xs text-hca-cream/40 uppercase tracking-wider">{label}: </span>
                        <span className="font-grotesk text-sm text-hca-cream/80">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/theatre#auditions"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk text-sm"
                  >
                    Audition Info
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={siteConfig.ticketsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-hca-cream/20 text-hca-cream rounded-xl hover:border-hca-cream/40 transition-colors font-grotesk text-sm"
                  >
                    Buy Tickets
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CENTER STAGE THEATER ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-hca-gold/50" />
                <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                  Our Venue
                </span>
              </div>
              <h2 className="font-playfair text-5xl text-hca-cream mb-6">
                The Center Stage <em className="text-gradient">Theater</em>
              </h2>
              <p className="font-grotesk text-hca-cream/60 leading-relaxed mb-6">
                A hidden gem in the heart of Ohio&apos;s Amish Country — our intimate blackbox theater creates an immersive, world-class theatrical atmosphere. Every seat is a great seat.
              </p>
              <p className="font-grotesk text-hca-cream/60 leading-relaxed mb-8">
                The Center Stage is also available for private rentals — corporate events, community performances, film screenings, and more.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Format", value: "Blackbox Theater" },
                  { label: "Location", value: "Millersburg, OH" },
                  { label: "Atmosphere", value: "Intimate & Immersive" },
                  { label: "Rental", value: "Available to Book" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-hca-navy border border-white/5">
                    <p className="font-grotesk text-xs text-hca-cream/40 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="font-grotesk text-hca-cream text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-hca-accent/20 border border-hca-accent/30 text-hca-light rounded-xl hover:bg-hca-accent/30 transition-all duration-200 font-grotesk text-sm"
              >
                Inquire About Rental
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3">
                {theatreImages.map((img, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl overflow-hidden ${
                      i === 0 ? "col-span-2 aspect-video" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Center Stage Theater"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── AUDITION INFO ── */}
      <section className="section-padding bg-hca-black" id="auditions">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Get On Stage
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Audition for <em className="text-gradient">Prince of Egypt</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Prepare",
                description: "Review the audition requirements. Prepare a short song (16–32 bars) and monologue. Dance experience is a plus but not required.",
              },
              {
                step: "02",
                title: "Audition",
                description: "In-person auditions May 4–6 at the Center Stage Theater. Virtual auditions available by May 8. All ages and experience levels welcome.",
              },
              {
                step: "03",
                title: "Perform",
                description: "Cast members rehearse throughout the spring and perform June 25–29. A transformative theatrical experience you'll never forget.",
              },
            ].map((step) => (
              <ScrollReveal key={step.step} className="p-8 rounded-2xl bg-hca-navy border border-white/5">
                <div className="font-playfair text-6xl text-hca-gold/20 font-bold mb-4">{step.step}</div>
                <h3 className="font-playfair text-2xl text-hca-cream font-semibold mb-3">{step.title}</h3>
                <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
            >
              Email Us for Audition Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION HISTORY ── */}
      <section className="section-padding bg-hca-dark" id="productions">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Production History
              </span>
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Years of <em className="text-gradient">Excellence</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pastProductions.map((prod, i) => (
              <motion.div
                key={`${prod.title}-${prod.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="p-5 rounded-xl bg-hca-navy border border-white/5 hover:border-hca-accent/20 transition-all duration-200 group"
              >
                <p className="font-grotesk text-xs text-hca-accent mb-2 group-hover:text-hca-light transition-colors">
                  {prod.year}
                </p>
                <h4 className="font-playfair text-hca-cream text-base font-semibold leading-snug">
                  {prod.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RENTAL CTA ── */}
      <section className="py-20 bg-hca-navy" id="rental">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-trirong text-hca-gold italic text-sm tracking-widest uppercase mb-4">
              Book the Space
            </p>
            <h2 className="font-playfair text-4xl text-hca-cream mb-4">
              Rent the Center Stage Theater
            </h2>
            <p className="font-grotesk text-hca-cream/60 mb-8 leading-relaxed">
              Available for corporate events, community performances, rehearsals, film screenings, and private events. Contact Shannon for availability and rates.
            </p>
            <a
              href="mailto:shannon@holmescenterforthearts.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
            >
              Contact Shannon
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
