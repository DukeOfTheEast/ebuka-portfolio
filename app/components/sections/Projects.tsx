"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
import { projects } from "@/app/lib/data";
import SectionHeader from "@/app/components/ui/SectionHeader";
import FadeUp from "@/app/components/ui/FadeUp";

export default function Projects() {
  return (
    <section id="projects" className="px-12 py-24 border-b border-border">
      <SectionHeader num="01" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border">
        {projects.map((project, i) => (
          <FadeUp key={project.num} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-bg hover:bg-bg-2 transition-colors duration-200 h-full"
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-bg-3">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-[28px] font-extrabold text-border-2 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.name.toUpperCase()}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[12px] text-white tracking-widest border border-white/30 px-5 py-2 rounded-sm">
            VISIT LIVE SITE →
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-2 tracking-widest">
            {project.num}
          </span>
          <span className="text-[10px] text-muted tracking-[0.06em] border border-border-2 px-2 py-0.5 rounded-sm">
            {project.type.toUpperCase()}
          </span>
        </div>

        <h3
          className="text-[18px] font-bold text-accent tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name}
        </h3>

        <p className="text-[12px] text-muted leading-[1.7]">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-muted bg-bg-3 px-2.5 py-1 rounded-sm tracking-[0.04em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
