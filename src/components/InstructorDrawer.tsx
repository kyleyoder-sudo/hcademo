"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  disciplines?: string[];
}

interface InstructorDrawerProps {
  instructor: Instructor | null;
  onClose: () => void;
}

export default function InstructorDrawer({ instructor, onClose }: InstructorDrawerProps) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock scroll while open
  useEffect(() => {
    if (instructor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [instructor]);

  return (
    <AnimatePresence>
      {instructor && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="drawer-overlay"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[101] w-full max-w-lg bg-[#0E0E0E] overflow-y-auto flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-[#6B6560] hover:text-[#F2EDE4] transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Portrait */}
            <div className="relative w-full aspect-[4/5] shrink-0 overflow-hidden">
              <Image
                src={instructor.image}
                alt={instructor.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 512px) 100vw, 512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="px-8 py-8 flex-1">
              {/* Gold line */}
              <div className="w-12 h-px bg-[#C09050] mb-6" />

              <h2 className="font-playfair text-3xl font-medium text-[#F2EDE4] leading-tight">
                {instructor.name}
              </h2>
              <p className="label-gold mt-2">{instructor.role}</p>

              {instructor.disciplines && instructor.disciplines.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {instructor.disciplines.map((d) => (
                    <span
                      key={d}
                      className="border border-[#C09050]/30 text-[#C09050] text-[10px] tracking-widest uppercase font-grotesk px-3 py-1"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-6 text-[#F2EDE4]/75 font-grotesk text-sm leading-relaxed">
                {instructor.bio}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
