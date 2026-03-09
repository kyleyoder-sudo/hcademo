"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 py-18 lg:py-22">
      <div className="spot-orb left-[8%] top-[2rem] h-28 w-28 bg-cyan-300/30" />
      <div className="spot-orb bottom-[1rem] right-[10%] h-32 w-32 bg-amber-300/24" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="prism-frame p-[1px]"
            >
              <div className="prism-content flex h-full flex-col justify-between bg-hca-dark/76 px-5 py-6 text-center backdrop-blur-xl lg:px-6 lg:py-8">
                <div className="font-grotesk text-[0.64rem] tracking-[0.3em] text-hca-accent uppercase">
                  {stat.label}
                </div>
                <div className="my-4 font-playfair text-4xl font-bold leading-none lg:text-6xl">
                  <span className="shimmer-text">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <div className="mx-auto h-px w-12 bg-[linear-gradient(90deg,transparent,rgba(255,191,97,0.9),transparent)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
