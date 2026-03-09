"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import InstructorCard from "@/components/InstructorCard";
import InstructorDrawer from "@/components/InstructorDrawer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { danceInstructors, siteConfig, programs, stats } from "@/lib/data";

// Animated counter
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [activeInstructor, setActiveInstructor] = useState<typeof danceInstructors[0] | null>(null);

  return (
    <>
      <InstructorDrawer instructor={activeInstructor} onClose={() => setActiveInstructor(null)} />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Parallax image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/dance4.jpeg"
            alt="HCA dancers on stage"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          {/* Single clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
        </motion.div>

        {/* Content — left-aligned, vertically centered */}
        <div className="relative z-10 flex min-h-screen items-center px-6 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="label-gold mb-6">Holmes Center for the Arts · Millersburg, Ohio</p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-playfair text-[clamp(3.5rem,9vw,7.5rem)] font-medium italic leading-[0.88] text-[#F2EDE4]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Where Art<br />
              Takes the<br />
              Stage.
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="mt-8 font-grotesk text-sm tracking-[0.28em] uppercase text-[#F2EDE4]/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Dance · Music · Visual Arts · Theatre
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <a
                href={siteConfig.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C09050] text-[#060606] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-7 py-3.5 hover:bg-[#D4AA70] transition-colors duration-300 font-semibold"
              >
                Register for Classes
              </a>
              <a
                href={siteConfig.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2EDE4]/40 text-[#F2EDE4] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-7 py-3.5 hover:border-[#F2EDE4] transition-colors duration-300"
              >
                Buy Tickets →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Logo — bottom right */}
        <motion.div
          className="absolute bottom-8 right-8 z-10 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5 }}
        >
          <div className="relative h-14 w-14">
            <Image
              src="/images/HCA-full-logo-DarkBlue.png"
              alt="HCA"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#C09050]/60 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ─── PROGRAMS ────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 lg:grid-cols-4" style={{ height: "60vh", minHeight: "400px" }}>
        {programs.map((prog) => (
          <Link
            key={prog.id}
            href={prog.href}
            className="group relative overflow-hidden"
          >
            <Image
              src={prog.image}
              alt={prog.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />
            {/* Gold border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C09050] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-grotesk text-[0.65rem] tracking-[0.28em] uppercase text-[#C09050] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {prog.description}
              </p>
              <p className="font-playfair text-2xl lg:text-3xl italic text-[#F2EDE4]">
                {prog.title}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* ─── STATS ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-16 lg:py-20 border-y border-[#C09050]/15">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-[#C09050]/15">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:px-8">
              <div className="font-playfair text-[clamp(2.5rem,5vw,4rem)] text-[#C09050]">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 font-grotesk text-[0.65rem] tracking-[0.24em] uppercase text-[#6B6560]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FACULTY ─────────────────────────────────────────────────────── */}
      <section className="bg-[#060606] py-24 lg:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <p className="label-gold mb-4">The Faculty</p>
            <h2 className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] italic text-[#F2EDE4] leading-tight mb-2">
              Artists who teach.
            </h2>
            <p className="font-grotesk text-sm text-[#6B6560] tracking-wide">
              World-trained. Community-rooted.
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#141414]">
            {danceInstructors.map((inst, i) => (
              <InstructorCard
                key={inst.id}
                instructor={inst}
                onClick={(ins) => setActiveInstructor(ins)}
                delay={i * 0.06}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/instructors"
              className="inline-block font-grotesk text-[0.7rem] tracking-[0.24em] uppercase text-[#C09050] border-b border-[#C09050]/40 pb-0.5 hover:border-[#C09050] transition-colors"
            >
              Meet All Instructors →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: "70vh", minHeight: "500px" }}>
        <Image
          src="/images/Nutcraker_2018_PRINT-90.jpg"
          alt="The Nutcracker at Ohio Star Theater"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-16 pb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <RevealOnScroll direction="left">
              <p className="label-gold mb-3">On Stage</p>
              <h3 className="font-playfair text-[clamp(2.5rem,6vw,5rem)] italic text-[#F2EDE4] leading-tight">
                The Nutcracker
              </h3>
              <p className="mt-2 font-grotesk text-sm text-[#F2EDE4]/50">
                December · Ohio Star Theater
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <a
                href={siteConfig.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#C09050] text-[#C09050] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-6 py-3 hover:bg-[#C09050] hover:text-[#060606] transition-all duration-300"
              >
                Get Tickets →
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#060606] py-36 lg:py-48 text-center px-6">
        <RevealOnScroll>
          <h2 className="font-playfair text-[clamp(2.5rem,6vw,5rem)] italic text-[#F2EDE4]">
            Ready to Begin?
          </h2>
          <p className="mt-4 font-grotesk text-sm text-[#6B6560] tracking-wide">
            Classes forming now. All levels welcome.
          </p>
          <a
            href={siteConfig.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-[#C09050] text-[#060606] font-grotesk text-[0.7rem] tracking-[0.22em] uppercase px-8 py-4 hover:bg-[#D4AA70] transition-colors duration-300 font-semibold"
          >
            Register for Classes
          </a>
        </RevealOnScroll>
      </section>
    </>
  );
}
