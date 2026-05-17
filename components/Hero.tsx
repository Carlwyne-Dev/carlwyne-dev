"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AvatarMood from "@/components/AvatarMood";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as any } },
};


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20" suppressHydrationWarning>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-[860px] px-6 flex items-start justify-between gap-12"
        suppressHydrationWarning
      >
        {/* Left — Text */}
        <div className="flex-1">
          <motion.h1 
            variants={item}
            className="text-[clamp(3.5rem,8vw,6.5rem)] font-light tracking-tighter leading-[1.05] mb-8"
          >
            Carlwyne <br /> R. Maghari
          </motion.h1>
          
          <motion.div variants={item} className="mb-10">
            <h2 className="text-xl font-medium text-text-primary mb-4">Full-Stack Developer</h2>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              BS Information Technology graduate (<span className="text-text-primary font-medium">Magna Cum Laude</span>) and self-driven full-stack developer. Experienced in building production-ready web and mobile applications with a genuine commitment to building things that work.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-8">
            <a 
              href="#projects"
              className="px-10 py-4 rounded-full bg-text-primary text-background font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              View Projects
            </a>
            
            <a 
              href="#contact"
              className="flex items-center gap-2 text-sm font-medium text-text-primary group"
            >
              Get in Touch
              <motion.span 
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight size={16} />
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Right — Large Avatar */}
        <motion.div variants={item} className="hidden md:flex flex-shrink-0">
          <AvatarMood />
        </motion.div>
      </motion.div>
    </section>
  );
}

