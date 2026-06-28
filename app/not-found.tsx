"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-[860px]"
      >
        <div className="rounded-[2.5rem] border border-border bg-surface p-10 sm:p-14 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-text-primary/5 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-text-primary/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-bold">
                  404 / Not Found
                </p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-light tracking-tighter text-text-primary">
                  This page doesn’t exist.
                </h1>
              </div>

              <div className="text-right">
                <div className="text-[11px] uppercase tracking-[0.25em] text-text-muted font-bold">
                  Tip
                </div>
                <div className="text-sm text-text-secondary mt-2 max-w-[22rem]">
                  If you were trying to open my resume, use the button below.
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/"
                className="group flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-text-primary hover:bg-text-primary hover:text-background transition-colors cursor-none"
              >
                <Home size={16} />
                Home
              </Link>

              <a
                href="/Carlwyne_Maghari_Resume_ATS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-text-primary hover:bg-text-primary hover:text-background transition-colors cursor-none"
              >
                <FileText size={16} />
                Open Resume
              </a>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="group flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-text-primary hover:bg-text-primary hover:text-background transition-colors cursor-none"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-border text-[11px] uppercase tracking-[0.2em] text-text-muted flex items-center justify-between gap-4 flex-wrap">
              <span>Try: /#projects, /#contact</span>
              <span>CM Portfolio</span>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

