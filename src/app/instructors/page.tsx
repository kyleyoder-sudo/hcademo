"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { danceInstructors, musicInstructors, artInstructors, adminStaff } from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn, modalOverlay, modalContent } from "@/lib/animations";

type Instructor = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  disciplines?: string[];
  pricing?: string;
};

type Category = "All" | "Dance" | "Music" | "Art" | "Admin";

const allInstructors: { instructor: Instructor; category: string }[] = [
  ...danceInstructors.map((i) => ({ instructor: i, category: "Dance" })),
  ...musicInstructors.map((i) => ({ instructor: i, category: "Music" })),
  ...artInstructors.map((i) => ({ instructor: i, category: "Art" })),
  ...adminStaff.map((i) => ({
    instructor: { ...i, id: i.name.toLowerCase().replace(/\s+/g, "-"), disciplines: ["Administration"], bio: `${i.name} serves as ${i.role} at the Holmes Center for the Arts.` },
    category: "Admin",
  })),
];

const categoryColors: Record<string, string> = {
  Dance: "#4B80A0",
  Music: "#C9A87A",
  Art: "#ACD3EA",
  Admin: "#32566B",
};

export default function InstructorsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedInstructor, setSelectedInstructor] = useState<{ instructor: Instructor; category: string } | null>(null);

  const filtered =
    activeCategory === "All"
      ? allInstructors
      : allInstructors.filter((i) => i.category === activeCategory);

  const categories: Category[] = ["All", "Dance", "Music", "Art", "Admin"];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-hca-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hca-dark via-hca-navy/50 to-hca-dark" />
          <div
            className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #4B80A0, transparent)" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                World-Class Faculty
              </span>
            </div>
            <h1 className="font-playfair text-7xl lg:text-8xl text-hca-cream font-bold leading-none mb-6">
              Our Instructors
            </h1>
            <p className="font-grotesk text-hca-cream/60 text-xl max-w-2xl leading-relaxed">
              Professional artists, conservatory-trained musicians, and award-winning educators — meet the extraordinary people who bring HCA to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="sticky top-20 z-30 bg-hca-dark/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full font-grotesk text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-hca-gold text-hca-dark"
                    : "bg-hca-navy/50 text-hca-cream/60 hover:text-hca-cream hover:bg-hca-navy"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className={`ml-1.5 text-xs ${activeCategory === cat ? "opacity-60" : "opacity-40"}`}>
                    ({allInstructors.filter((i) => i.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {filtered.map(({ instructor, category }) => (
                <motion.div
                  key={instructor.id}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                  onClick={() => setSelectedInstructor({ instructor, category })}
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hca-dark/95 via-hca-dark/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="font-grotesk text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${categoryColors[category]}22`,
                        color: categoryColors[category],
                        border: `1px solid ${categoryColors[category]}44`,
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-hca-cream font-semibold text-xl leading-tight">
                      {instructor.name}
                    </h3>
                    <p className="font-grotesk text-xs mt-1 mb-3" style={{ color: categoryColors[category] }}>
                      {instructor.role}
                    </p>
                    {instructor.disciplines && (
                      <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                        {instructor.disciplines.slice(0, 3).map((d) => (
                          <span
                            key={d}
                            className="font-grotesk text-xs px-2 py-0.5 bg-white/10 text-hca-cream/80 rounded-full"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="font-grotesk text-xs text-hca-cream/50 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Click to read bio →
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── BIO MODAL ── */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-hca-navy border border-white/10 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Photo */}
                <div className="md:col-span-2 relative h-64 md:h-auto min-h-[300px]">
                  <Image
                    src={selectedInstructor.instructor.image}
                    alt={selectedInstructor.instructor.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-hca-navy/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className="font-grotesk text-xs tracking-wider uppercase mb-2 block"
                        style={{ color: categoryColors[selectedInstructor.category] }}
                      >
                        {selectedInstructor.category}
                      </span>
                      <h2 className="font-playfair text-3xl text-hca-cream font-bold">
                        {selectedInstructor.instructor.name}
                      </h2>
                      <p className="font-grotesk text-hca-gold text-sm mt-1">
                        {selectedInstructor.instructor.role}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedInstructor(null)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-hca-cream/60 hover:text-hca-cream flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {selectedInstructor.instructor.disciplines && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedInstructor.instructor.disciplines.map((d) => (
                        <span
                          key={d}
                          className="font-grotesk text-xs px-3 py-1 rounded-full"
                          style={{
                            background: `${categoryColors[selectedInstructor.category]}15`,
                            color: categoryColors[selectedInstructor.category],
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="font-grotesk text-hca-cream/70 leading-relaxed mb-6">
                    {selectedInstructor.instructor.bio}
                  </p>

                  {"pricing" in selectedInstructor.instructor && selectedInstructor.instructor.pricing && (
                    <div className="pt-5 border-t border-white/5">
                      <p className="font-grotesk text-xs text-hca-cream/40 uppercase tracking-wider mb-1">Lesson Rate</p>
                      <p className="font-grotesk text-hca-gold font-semibold">
                        {(selectedInstructor.instructor as { pricing?: string }).pricing}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-hca-gold fill-hca-gold" />
                    ))}
                    <span className="font-grotesk text-xs text-hca-cream/40 ml-2">Professional Faculty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
