"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import InstructorCard from "@/components/InstructorCard";
import InstructorDrawer from "@/components/InstructorDrawer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { danceStyles, danceInstructors, siteConfig } from "@/lib/data";

type Instructor = typeof danceInstructors[0];

export default function DancePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const [openStyle, setOpenStyle] = useState<string | null>(null);
  const [activeInstructor, setActiveInstructor] = useState<Instructor | null>(null);

  return (
    <>
      <InstructorDrawer instructor={activeInstructor} onClose={() => setActiveInstructor(null)} />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ height: "85vh", minHeight: "560px" }}>
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/dance2.jpeg"
            alt="HCA Dance"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </motion.div>

        {/* Huge italic title — bottom left */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 pb-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <p className="label-gold mb-4">42 Classes · All Levels · All Ages</p>
            <h1 className="font-playfair text-[clamp(5rem,16vw,12rem)] italic text-[#F2EDE4] leading-none">
              Dance
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <p className="font-playfair text-[clamp(1.4rem,3vw,2rem)] italic text-[#F2EDE4]/80 leading-relaxed">
              From Pre-Ballet to advanced Company level, HCA's dance program has trained students who
              perform with the City Ballet of Cleveland, Ballet 5:8, Ohio Northern, and Kent State.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── STYLES ACCORDION ─────────────────────────────────────────────── */}
      <section className="bg-[#060606] px-5 lg:px-10 pb-24">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <p className="label-gold mb-3 pt-20">Classes</p>
            <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] italic text-[#F2EDE4] mb-12">
              Find your style.
            </h2>
          </RevealOnScroll>

          <div className="divide-y divide-white/5">
            {danceStyles.map((style) => {
              const isOpen = openStyle === style.id;
              return (
                <div key={style.id}>
                  <button
                    onClick={() => setOpenStyle(isOpen ? null : style.id)}
                    className="group w-full flex items-center justify-between py-7 text-left"
                  >
                    <div className="flex items-center gap-6">
                      {/* Gold bar — visible when open */}
                      <div
                        className={`w-1 self-stretch rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-[#C09050]" : "bg-transparent"
                        }`}
                        style={{ minHeight: "2rem" }}
                      />
                      <h3 className={`font-playfair text-[clamp(1.5rem,3vw,2.25rem)] italic transition-colors duration-300 ${
                        isOpen ? "text-[#C09050]" : "text-[#F2EDE4] group-hover:text-[#D4AA70]"
                      }`}>
                        {style.title}
                      </h3>
                    </div>
                    <div className={`text-[#C09050] transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-0"}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-7">
                          <p className="font-grotesk text-sm text-[#F2EDE4]/60 leading-relaxed mb-6 max-w-2xl">
                            {style.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {style.levels.map((level) => (
                              <div key={level} className="flex items-start gap-3">
                                <div className="w-1 h-1 rounded-full bg-[#C09050] mt-1.5 shrink-0" />
                                <p className="font-grotesk text-xs text-[#F2EDE4]/50 leading-relaxed">
                                  {level}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DANCE IMAGERY STRIP ──────────────────────────────────────────── */}
      <section className="grid grid-cols-3" style={{ height: "40vh", minHeight: "260px" }}>
        {["/images/dance4.jpeg", "/images/dance3.jpeg", "/images/IMG_9648.jpg"].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt="Dance at HCA"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </section>

      {/* ─── FACULTY ─────────────────────────────────────────────────────── */}
      <section className="bg-[#060606] px-5 lg:px-10 py-24">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="label-gold mb-3">Your Instructors</p>
            <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] italic text-[#F2EDE4] mb-14">
              Trained to inspire.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#141414]">
            {danceInstructors.map((inst, i) => (
              <InstructorCard
                key={inst.id}
                instructor={inst}
                onClick={(ins) => setActiveInstructor(ins)}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── REGISTER BAND ────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] border-t border-[#C09050]/15 py-24 text-center px-6">
        <RevealOnScroll>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] italic text-[#F2EDE4]">
            Classes are forming now.
          </h2>
          <p className="mt-4 font-grotesk text-sm text-[#6B6560] tracking-wide">
            All levels welcome. Register online — it takes less than 5 minutes.
          </p>
          <a
            href={siteConfig.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-[#C09050] text-[#060606] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-8 py-4 hover:bg-[#D4AA70] transition-colors font-semibold"
          >
            Register for Classes →
          </a>
        </RevealOnScroll>
      </section>
    </>
  );
}
