import React from "react";
import CircularTestimonials from "./CircularTestimonials";

const certs = [
  {
    quote: "Foundational understanding of Generative AI principles, capabilities, and applications in modern technology landscapes.",
    name: "Introduction to Generative AI",
    designation: "Google Cloud",
    src: "/cert pics/google genai.png",
  },
  {
    quote: "Comprehensive training on leveraging Generative AI tools ethically and effectively in professional environments.",
    name: "Career Essentials in Generative AI",
    designation: "Microsoft & LinkedIn",
    src: "/cert pics/career essentials in gen ai by microsoft and linkedin.png",
  },
  {
    quote: "Exploring the ethical implications, biases, and responsibilities associated with deploying Generative AI models.",
    name: "Ethics in the Age of Generative AI",
    designation: "LinkedIn Learning",
    src: "/cert pics/ethics in the age of gen ai.png",
  },
  {
    quote: "Key principles of responsible AI development, focusing on fairness, privacy, and transparency in machine learning systems.",
    name: "Introduction to Responsible AI",
    designation: "Google Cloud",
    src: "/cert pics/google responsible ai.png",
  },
  {
    quote: "Addressing top questions and building foundational AI literacy for navigating the modern AI-driven world.",
    name: "AI Literacy for Everyone",
    designation: "LinkedIn Learning",
    src: "/cert pics/ai literacy for everyone.png",
  },
  {
    quote: "Fundamentals of Artificial Intelligence, covering core concepts, terminology, and real-world use cases.",
    name: "AI Fundamentals",
    designation: "IBM",
    src: "/cert pics/ibm ai fundamentals.png",
  }
];

export default function Certifications() {
  return (
    <section className="py-16 md:py-32 flex justify-center">
      <div className="w-full max-w-[860px] px-6">
        <header className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.12em] text-text-muted font-bold">Certifications</span>
        </header>
        
        <div className="flex items-center justify-center -mx-6 md:mx-0">
        <CircularTestimonials
          testimonials={certs}
          autoplay={true}
          colors={{
            name: "var(--text-primary)",
            designation: "var(--text-secondary)",
            testimony: "var(--text-secondary)",
            arrowBackground: "var(--nav-bg)",
            arrowForeground: "var(--text-primary)",
            arrowHoverBackground: "rgba(255,255,255,0.1)",
          }}
          fontSizes={{
            name: "1.5rem",
            designation: "1rem",
            quote: "1.125rem",
          }}
        />
        </div>
      </div>
    </section>
  );
}
