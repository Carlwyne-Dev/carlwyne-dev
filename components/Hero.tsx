"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const } },
};

const avatars = [
  "/av/avatar_default.png",
  "/av/avatar_wink.png",
  "/av/avatar_shocked.png",
  "/av/avatar_sad.png",
];

export default function Hero() {
  const [avatarIdx, setAvatarIdx] = useState(0);

  const handleMouseEnter = () => {
    const randomIdx = Math.floor(Math.random() * (avatars.length - 1)) + 1;
    setAvatarIdx(randomIdx);
  };

  const handleMouseLeave = () => {
    setAvatarIdx(0);
  };

  return (
    <section className="min-h-[75vh] md:min-h-screen flex items-start md:items-center justify-center pt-32 pb-12 md:py-0" suppressHydrationWarning>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-[860px] px-6 flex flex-col md:flex-row items-center justify-between gap-12"
        suppressHydrationWarning
      >
        {/* Left — Text */}
        <div className="flex-1">
          <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-light tracking-tighter leading-[1.05] mb-8 cursor-default">
            <div className="flex flex-wrap pb-2">
              {"Carlwyne".split("").map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  initial={{ y: 30, opacity: 0, filter: "blur(12px)", scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.04, ease: [0.2, 0.65, 0.3, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap pb-2 -mt-4 sm:-mt-2">
              {"R. Maghari".split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  initial={{ y: 30, opacity: 0, filter: "blur(12px)", scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.04, ease: [0.2, 0.65, 0.3, 1] }}
                  className={`inline-block ${char === " " ? "w-[clamp(1rem,2vw,1.5rem)]" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </h1>
          
          <motion.div variants={item} className="mb-10">
            <h2 className="text-xl font-medium text-text-primary mb-4">Full-Stack Developer · AI & Automation</h2>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Self-driven developer specializing in building production-ready web applications, automation pipelines, and AI-assisted workflows. A fast learner who ships.
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

        {/* Right — Interactive Avatar (Desktop Only) */}
        <motion.div 
          variants={item}
          className="hidden md:block flex-shrink-0 w-[260px] h-[260px] relative rounded-full overflow-hidden border border-border bg-surface cursor-none group -translate-y-8 lg:-translate-y-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            <motion.img 
              key={avatarIdx}
              src={avatars[avatarIdx]} 
              alt="Carlwyne Avatar" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </AnimatePresence>
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-full pointer-events-none" />
        </motion.div>

      </motion.div>
    </section>
  );
}
