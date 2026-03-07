"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { artClasses, artInstructors, siteConfig } from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn, scaleIn } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  "Kids": "#C9A87A",
  "Teen After School": "#ACD3EA",
  "Adults & Teens": "#4B80A0",
};

const galleryArtImages = [
  "/images/image0%20(8).jpeg",
  "/images/image2%20(1).jpeg",
  "/images/A%20Night%20at%20the%20Art%20Museum%20April%202022%20nw-193.jpg",
  "/images/A%20Night%20at%20the%20Art%20Museum%20April%202022%20nw-205.jpg",
  "/images/Holmes%20Centerfor%20the%20Arts%20(Photo%20Collage)%20(2).png",
  "/images/Green%20White%20Bold%20Minimalist%20Pottery%20Workshop%20Poster%20(Photo%20Collage)%20(2).png",
];

export default function ArtPage() {
  const categories = [...new Set(artClasses.map((c) => c.category))];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image0%20(8).jpeg"
            alt="Visual Arts at HCA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/95 via-hca-dark/50 to-hca-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-hca-dark/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Visual Arts
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-7xl lg:text-9xl text-hca-cream font-bold leading-none mb-6"
          >
            Art
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-grotesk text-hca-cream/70 text-xl max-w-2xl leading-relaxed"
          >
            Painting, ceramics, sculpture, cartooning, textiles, and more. HCA&apos;s Visual Arts program serves every age, from young children to adult learners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 mt-6"
          >
            {["Kids Classes", "Teen After School", "Adult Workshops", "Open Studio"].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-hca-gold" />
                <span className="font-grotesk text-hca-cream/60 text-sm">{stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ART GALLERY MOSAIC ── */}
      <section className="py-16 bg-hca-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {galleryArtImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" :
                  i === 4 ? "col-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={img}
                  alt="Art at HCA"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSES BY CATEGORY ── */}
      <section className="section-padding bg-hca-dark" id="kids">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => {
            const categoryClasses = artClasses.filter((c) => c.category === category);
            const color = categoryColors[category] || "#4B80A0";
            const anchorId = category === "Kids" ? "kids" : category === "Teen After School" ? "teens" : "adults";

            return (
              <div key={category} id={anchorId} className="mb-20 last:mb-0">
                <ScrollReveal className="mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-12 rounded-full" style={{ background: color }} />
                    <div>
                      <p className="font-grotesk text-xs tracking-[0.3em] uppercase mb-1" style={{ color }}>
                        {category}
                      </p>
                      <h2 className="font-playfair text-4xl text-hca-cream">
                        {category === "Kids"
                          ? "Classes for Kids"
                          : category === "Teen After School"
                          ? "Teen After School"
                          : "Adult & Teen Workshops"}
                      </h2>
                    </div>
                  </div>
                </ScrollReveal>

                {category === "Teen After School" ? (
                  // Special featured card for NextGen
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-hca-navy border border-hca-accent/20">
                      <div className="relative h-64 lg:h-auto">
                        <Image
                          src="/images/IMG_0258.jpg"
                          alt="Teen After School"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-hca-navy/80" />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-hca-light/10 rounded-full mb-5 w-fit">
                          <Heart className="w-3.5 h-3.5 text-hca-light" />
                          <span className="font-grotesk text-hca-light text-xs font-semibold tracking-wider uppercase">
                            100% Free Program
                          </span>
                        </div>
                        <h3 className="font-playfair text-4xl text-hca-cream font-bold mb-3">
                          NextGen After School
                        </h3>
                        <p className="font-grotesk text-hca-cream/60 mb-6 leading-relaxed">
                          Every Thursday after school until 6 PM. Snacks, homework help, devotional, and hands-on arts activities (painting, stained glass, woodworking, and more). Transportation provided.
                        </p>
                        <div className="space-y-3">
                          {[
                            "Thursdays after school until 6:00 PM",
                            "Snacks, homework help & games",
                            "5–6 PM: Arts activity",
                            "Transportation provided",
                            "Funded by United Way",
                          ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-hca-light flex-shrink-0" />
                              <span className="font-grotesk text-hca-cream/60 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="mt-8 inline-flex items-center gap-2 font-grotesk text-hca-light text-sm"
                        >
                          Email us to join
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ) : (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  >
                    {categoryClasses.map((cls) => (
                      <motion.div
                        key={cls.title}
                        variants={fadeInUp}
                        className="group p-6 rounded-2xl bg-hca-navy border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col"
                      >
                        <div
                          className="w-6 h-0.5 mb-5 rounded-full"
                          style={{ background: color }}
                        />
                        <h3 className="font-playfair text-xl text-hca-cream font-semibold mb-2">
                          {cls.title}
                        </h3>
                        <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed mb-4 flex-1">
                          {cls.description}
                        </p>
                        <div className="space-y-2 pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-hca-accent flex-shrink-0" />
                            <span className="font-grotesk text-hca-cream/50 text-xs">{cls.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-hca-accent flex-shrink-0" />
                            <span className="font-grotesk text-hca-cream/50 text-xs">{cls.ageRange}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-hca-gold flex-shrink-0" />
                            <span className="font-grotesk text-hca-gold text-xs font-semibold">{cls.price}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── INSTRUCTORS ── */}
      <section className="section-padding bg-hca-black" id="instructors">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Teaching Artists
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Art <em className="text-gradient">Instructors</em>
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {artInstructors.map((instructor) => (
              <motion.div
                key={instructor.id}
                variants={scaleIn}
                className="group rounded-2xl overflow-hidden bg-hca-navy border border-white/5 hover:border-hca-accent/20 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hca-navy/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl text-hca-cream font-semibold mb-1">
                    {instructor.name}
                  </h3>
                  <p className="font-grotesk text-hca-gold text-sm mb-3">{instructor.role}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {instructor.disciplines.map((d) => (
                      <span
                        key={d}
                        className="font-grotesk text-xs px-2 py-0.5 bg-hca-accent/15 text-hca-light rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <p className="font-grotesk text-hca-cream/50 text-sm leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-hca-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl text-hca-cream mb-4">
              Create Something Beautiful
            </h2>
            <p className="font-grotesk text-hca-cream/60 mb-8">
              Classes are available year-round. Contact us to register or learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-hca-cream/20 text-hca-cream rounded-xl hover:border-hca-cream/40 transition-colors font-grotesk"
              >
                {siteConfig.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
