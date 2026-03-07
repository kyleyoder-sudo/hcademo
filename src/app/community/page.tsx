"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, Users, BookOpen, Award, Music, ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  siteConfig,
  adminStaff,
  boardOfTrustees,
  communityPrograms,
  sponsorTiers,
  stats,
} from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn, scaleIn } from "@/lib/animations";

const iconMap: Record<string, typeof Heart> = {
  heart: Heart,
  star: Star,
  users: Users,
  book: BookOpen,
  award: Award,
  music: Music,
};

export default function CommunityPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Holmes%20Centerfor%20the%20Arts%20(Photo%20Collage)%20(2).png"
            alt="Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/98 via-hca-dark/60 to-hca-dark/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Rooted in Community
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-7xl lg:text-8xl text-hca-cream font-bold leading-none mb-6"
          >
            About &amp; Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-grotesk text-hca-cream/70 text-xl max-w-2xl leading-relaxed"
          >
            HCA exists to serve everyone — regardless of background, ability, or means. We believe the arts transform lives, strengthen communities, and deserve to be accessible to all.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-hca-gold/50" />
                <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                  Mission
                </span>
              </div>
              <h2 className="font-playfair text-5xl text-hca-cream mb-6">
                Why We <em className="text-gradient">Exist</em>
              </h2>
              <blockquote className="font-playfair text-xl text-hca-cream/80 italic leading-relaxed border-l-2 border-hca-gold pl-6 mb-6">
                &ldquo;To provide educational and performing opportunities in the arts for individuals of all economic and social backgrounds within a wholesome, family-oriented atmosphere and to enrich our community through those artistic experiences.&rdquo;
              </blockquote>
              <p className="font-grotesk text-hca-cream/50 text-sm">
                Holmes Center for the Arts · Non-profit 501(c)(3) · Est. in Millersburg, OH
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl bg-hca-navy border border-white/5 text-center"
                  >
                    <div className="font-playfair text-4xl text-gradient font-bold mb-1">
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="font-grotesk text-xs text-hca-cream/50 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY PROGRAMS ── */}
      <section className="section-padding bg-hca-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Giving Back
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Community <em className="text-gradient">Connections</em>
            </h2>
            <p className="font-grotesk text-hca-cream/60 mt-4 max-w-2xl mx-auto">
              HCA is more than a studio — we&apos;re a catalyst for community enrichment and access to the arts.
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {communityPrograms.map((program) => {
              const Icon = iconMap[program.icon] || Heart;
              return (
                <motion.div
                  key={program.title}
                  variants={scaleIn}
                  className="p-7 rounded-2xl bg-hca-navy border border-white/5 hover:border-hca-accent/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-hca-accent/15 flex items-center justify-center mb-5 group-hover:bg-hca-accent/25 transition-colors">
                    <Icon className="w-5 h-5 text-hca-accent" />
                  </div>
                  <h3 className="font-playfair text-xl text-hca-cream font-semibold mb-3">
                    {program.title}
                  </h3>
                  <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── ADMIN STAFF ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Leadership
              </span>
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Admin <em className="text-gradient">Staff</em>
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {adminStaff.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group rounded-2xl overflow-hidden bg-hca-navy border border-white/5 hover:border-hca-accent/20 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hca-navy/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-playfair text-hca-cream font-semibold text-lg leading-tight">
                    {member.name}
                  </h4>
                  <p className="font-grotesk text-hca-gold text-xs mt-1 mb-3">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="font-grotesk text-hca-cream/40 hover:text-hca-cream/70 text-xs transition-colors truncate block"
                  >
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOARD OF TRUSTEES ── */}
      <section className="py-16 bg-hca-black">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-10">
            <h2 className="font-playfair text-4xl text-hca-cream">
              Board of <em className="text-gradient">Trustees</em>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {boardOfTrustees.map((member) => (
              <ScrollReveal key={member.name} className="p-4 rounded-xl bg-hca-navy border border-white/5 text-center">
                <div className="w-10 h-10 rounded-full bg-hca-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-playfair text-hca-accent text-lg font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-grotesk text-hca-cream text-sm font-medium leading-tight">
                  {member.name}
                </h4>
                <p className="font-grotesk text-hca-cream/40 text-xs mt-1">{member.role}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOLARSHIP ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-hca-gold/15">
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <Image
                src="/images/IMG_9951_edited.jpg"
                alt="Scholarship students"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-hca-navy/90" />
            </div>
            <div className="bg-hca-navy p-10 lg:p-12 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-hca-gold/15 flex items-center justify-center mb-5">
                <Award className="w-5 h-5 text-hca-gold" />
              </div>
              <h2 className="font-playfair text-4xl text-hca-cream font-bold mb-4">
                Scholarship Program
              </h2>
              <p className="font-grotesk text-hca-cream/60 leading-relaxed mb-4">
                In 2024, 42 students received scholarships to participate in HCA programs. We believe that financial circumstances should never be a barrier to arts education.
              </p>
              <p className="font-grotesk text-hca-cream/60 leading-relaxed mb-8">
                Scholarships are available for dance, music, and visual arts classes. Apply online or contact us to learn more about eligibility and the application process.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk text-sm w-fit"
              >
                Apply for Scholarship
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSOR / DONATE ── */}
      <section className="section-padding bg-hca-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Support the Arts
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Sponsor &amp; <em className="text-gradient">Donate</em>
            </h2>
            <p className="font-grotesk text-hca-cream/60 mt-4 max-w-2xl mx-auto">
              Your support directly funds scholarships, community outreach programs, and world-class performances. All donations are tax-deductible.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {sponsorTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-hca-navy border border-white/5 hover:border-hca-gold/20 transition-all duration-300 group flex flex-col"
              >
                <div className="font-playfair text-3xl text-gradient font-bold mb-2">{tier.price}</div>
                <h3 className="font-grotesk text-hca-cream text-sm font-semibold mb-3 flex-1">{tier.name}</h3>
                <p className="font-grotesk text-hca-cream/50 text-xs leading-relaxed">{tier.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
            >
              Donate Now
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="font-grotesk text-hca-cream/40 text-xs mt-4">
              Holmes Center for the Arts is a 501(c)(3) non-profit. All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
