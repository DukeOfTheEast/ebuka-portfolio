import { experience } from "@/app/lib/data";
import SectionHeader from "@/app/components/ui/SectionHeader";
import FadeUp from "@/app/components/ui/FadeUp";

export default function Experience() {
  return (
    <section
      id="experience"
      className="sm:px-12 px-6 py-24 border-b border-border"
    >
      <SectionHeader num="02" title="Experience" />

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-8 py-8 border-b border-border first:border-t first:border-border">
              {/* Left */}
              <div>
                <p className="text-[11px] text-muted tracking-[0.06em] leading-relaxed">
                  {job.period}
                </p>
                <p className="text-[11px] text-muted-2 mt-1">{job.company}</p>
              </div>

              {/* Right */}
              <div>
                <h3
                  className="text-[16px] font-semibold text-accent mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {job.role}
                </h3>
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="relative text-[12px] text-muted leading-[1.7] pl-5"
                    >
                      <span className="absolute left-0 text-muted-2">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
