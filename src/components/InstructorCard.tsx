"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  disciplines?: string[];
}

interface InstructorCardProps {
  instructor: Instructor;
  onClick: (instructor: Instructor) => void;
  delay?: number;
}

export default function InstructorCard({ instructor, onClick, delay = 0 }: InstructorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="group relative cursor-pointer overflow-hidden bg-[#0E0E0E] aspect-[3/4]"
      onClick={() => onClick(instructor)}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="img-grayscale object-cover object-top"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Bottom overlay — always present, name/role reveal on hover */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 px-4 pb-4">
        {/* Gold border line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C09050] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

        <p className="font-playfair text-lg font-medium text-[#F2EDE4] leading-tight">
          {instructor.name}
        </p>
        <p className="label-gold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          {instructor.role}
        </p>
        <p className="mt-2 text-xs text-[#F2EDE4]/60 font-grotesk opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
          {instructor.bio}
        </p>
      </div>

      {/* Click hint */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-[#C09050]/90 text-[#060606] text-[10px] tracking-widest uppercase font-grotesk px-2 py-1 font-semibold">
          View Bio
        </div>
      </div>
    </motion.div>
  );
}
