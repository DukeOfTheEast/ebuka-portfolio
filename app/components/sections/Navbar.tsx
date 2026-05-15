"use client";

import { useState, useEffect } from "react";
import { navLinks, siteData } from "@/app/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between sm:px-12 px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_#1e1e1e]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="text-[15px] font-bold text-accent tracking-wide hover:opacity-70 transition-opacity duration-200"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {siteData.shortName}
      </a>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-[12px] tracking-[0.08em] rounded transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted hover:text-[#888]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded bg-white/5" />
                )}
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Open to work badge */}
      <div className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-green-500 text-[11px] font-medium tracking-[0.06em]">
        {/* Pulsing dot */}
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
        </span>
        OPEN TO WORK
      </div>
    </nav>
  );
}
