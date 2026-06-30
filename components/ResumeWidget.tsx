"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, FileBadge } from "lucide-react";

const docs = [
  { id: "cv", label: "CV", icon: FileBadge, href: "/Carlwyne_Maghari_CV.pdf" },
  { id: "resume", label: "RESUME", icon: FileText, href: "/Carlwyne_Dev_Resume.pdf" }
];

export default function ResumeWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % docs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="hidden sm:block fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-[120px] transition-all duration-300"
      style={{ height: isHovered ? "110px" : "48px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {docs.map((doc, index) => {
        const isActive = index === activeIndex;
        
        let yPos = 0;
        let xPos = 0;
        let scale = 1;
        let zIndex = 10;
        let opacity = 1;
        
        if (isHovered) {
          yPos = index === 0 ? -56 : 0;
          xPos = 0;
          scale = 1;
          zIndex = 20;
          opacity = 1;
        } else {
          if (isActive) {
            yPos = 0;
            xPos = 0;
            scale = 1;
            zIndex = 20;
            opacity = 1;
          } else {
            yPos = -12;
            xPos = 8;
            scale = 0.95;
            zIndex = 10;
            opacity = 1; // 100% solid, no transparency ghosts!
          }
        }

        return (
          <motion.a
            key={doc.id}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={false}
            animate={{
              y: yPos,
              x: xPos,
              scale: scale,
              opacity: opacity,
              zIndex: zIndex,
              filter: "blur(0px)" // Force clear any stuck blur from hot-reload
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className={`absolute bottom-0 right-0 flex w-[120px] h-[44px] justify-center items-center gap-2 rounded-full font-bold text-[11px] tracking-widest uppercase border cursor-none ${
              !isHovered
                ? (isActive 
                    ? "bg-surface text-text-primary border-border" 
                    : "bg-text-primary text-background border-transparent")
                : "bg-surface text-text-primary border-border hover:bg-text-primary hover:text-background"
            }`}
          >
            <doc.icon size={15} />
            {doc.label}
          </motion.a>
        );
      })}
    </div>
  );
}
