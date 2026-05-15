"use client";

import { motion } from "framer-motion";
import { siteData } from "@/app/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-12 pt-32 pb-20 border-b border-border"
    >
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center gap-3 mb-6 text-[11px] text-muted tracking-[0.14em]"
      >
        <span className="block w-8 h-px bg-muted-2" />
        {siteData.role.toUpperCase()} · {siteData.location.toUpperCase()}
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="text-[clamp(52px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.02em] mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Ukachukwu
        <br />
        <span className="text-[#2a2a2a]">Ebuka</span> Francis
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-[clamp(18px,3vw,32px)] text-[#444] mb-9 tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Building interfaces that feel alive.
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="max-w-120 text-[#444] text-[13px] leading-[1.8] mb-10"
      >
        {siteData.bio}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex items-center gap-4"
      >
        <a
          href="#projects"
          className="px-7 py-3 rounded text-[12px] font-medium tracking-[0.06em] text-accent border border-[#3a3a3a] hover:border-[#666] hover:bg-white/5 transition-all duration-200"
        >
          VIEW PROJECTS
        </a>
        <a
          href="#contact"
          className="text-muted text-[12px] tracking-[0.06em] border-b border-border-2 pb-px hover:text-accent hover:border-muted transition-colors duration-200"
        >
          GET IN TOUCH →
        </a>
      </motion.div>
    </section>
  );
}
