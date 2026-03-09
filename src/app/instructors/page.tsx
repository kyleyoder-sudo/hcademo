"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import InstructorCard from "@/components/InstructorCard";
import InstructorDrawer from "@/components/InstructorDrawer";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  danceInstructors,
  musicInstructors,
  artInstructors,
  adminStaff,
  siteConfig,
} from "@/lib/data";

type Instructor = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  disciplines?: string[];
};

type FilterKey = "all" | "dance" | "music" | "art" | "admin";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "dance", label: "Dance" },
  { key: "music", label: "Music" },
  { key: "art", label: "Visual Arts" },
  { key: "admin", label: "Administration" },
];

// Normalize adminStaff to match Instructor interface
const adminInstructors: Instructor[] = adminStaff.map((s) => ({
  id: s.name.toLowerCase().replace(/\s+/g, "-"),
  name: s.name,
  role: s.role,
  image: s.image,
  bio: `${s.name} serves as ${s.role} at the Holmes Center for the Arts.`,
}));

const GROUPS: { filter: FilterKey; label: string; instructors: Instructor[] }[] = [
  { filter: "dance", label: "Dance Faculty", instructors: danceInstructors },
  { filter: "music", label: "Music Faculty", instructors: musicInstructors },
  { filter: "art", label: "Visual Arts Faculty", instructors: artInstructors },
  { filter: "admin", label: "Administration", instructors: adminInstructors },
];

export default function InstructorsPage() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [active, setActive] = useState<Instructor | null>(null);

  const visibleGroups = GROUPS.filter(
    (g) => filter === "all" || g.filter === filter
  );

  return (
    <>
      <InstructorDrawer instructor={active} onClose={() => setActive(null)} />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "55vh", minHeight: "380px" }}>
        <Image
          src="/images/dance3.jpeg"
          alt="HCA faculty"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-gold mb-4">The Faculty</p>
            <h1 className="font-playfair text-[clamp(3rem,7vw,6rem)] italic text-[#F2EDE4] leading-tight">
              Meet the Artists
            </h1>
            <p className="mt-4 font-grotesk text-sm text-[#F2EDE4]/50 tracking-wide">
              The people who bring Holmes Center to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTER BAR ───────────────────────────────────────────────────── */}
      <div className="bg-[#0E0E0E] border-b border-white/5 sticky top-[4.5rem] z-30">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex gap-0 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`relative shrink-0 font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-5 py-4 transition-colors duration-200 ${
                  filter === f.key
                    ? "text-[#C09050]"
                    : "text-[#6B6560] hover:text-[#F2EDE4]"
                }`}
              >
                {f.label}
                {filter === f.key && (
                  <motion.div
                    layoutId="filter-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#C09050]"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── INSTRUCTOR GROUPS ────────────────────────────────────────────── */}
      <main className="bg-[#060606] px-5 lg:px-10 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {visibleGroups.map((group) => (
              <section key={group.filter} className="pt-20">
                <RevealOnScroll>
                  <p className="label-gold mb-2">{group.label}</p>
                  <div className="w-8 h-px bg-[#C09050]/30 mb-10" />
                </RevealOnScroll>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#141414]">
                  {group.instructors.map((inst, i) => (
                    <InstructorCard
                      key={inst.id}
                      instructor={inst}
                      onClick={(ins) => setActive(ins)}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] border-t border-[#C09050]/15 py-24 text-center px-6">
        <RevealOnScroll>
          <p className="label-gold mb-4">Join Us</p>
          <h2 className="font-playfair text-4xl italic text-[#F2EDE4] mb-8">
            Study with the best.
          </h2>
          <a
            href={siteConfig.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C09050] text-[#060606] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-8 py-4 hover:bg-[#D4AA70] transition-colors font-semibold"
          >
            Register for Classes
          </a>
        </RevealOnScroll>
      </section>
    </>
  );
}
