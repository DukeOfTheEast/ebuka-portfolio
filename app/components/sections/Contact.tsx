import { ArrowUpRight } from "lucide-react";
// import { siteData } from '@/app/lib/data'
import SectionHeader from "@/app/components/ui/SectionHeader";
import FadeUp from "@/app/components/ui/FadeUp";
import { contactLinks } from "@/app/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="sm:px-12 px-6 py-24">
      <SectionHeader num="04" title="Contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <FadeUp>
          <h3
            className="text-[clamp(36px,5vw,64px)] font-extrabold text-accent leading-none tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build
            <br />
            something
            <br />
            great.
          </h3>
          <p className="text-[12px] text-muted leading-[1.8] max-w-90">
            Currently open to new opportunities — whether that&apos;s a
            full-time role, freelance project, or just a conversation.
            Don&apos;t hesitate to reach out.
          </p>
        </FadeUp>

        {/* Right — links */}
        <FadeUp delay={0.15}>
          <div className="flex flex-col">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between py-5 border-b border-border first:border-t first:border-border hover:text-accent transition-colors duration-200"
              >
                <span className="text-[12px] text-muted tracking-[0.06em] group-hover:text-accent transition-colors duration-200">
                  {link.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-muted-2 group-hover:text-accent transition-colors duration-200">
                    {link.value}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="text-muted-2 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
