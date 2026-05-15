import { skills } from "@/app/lib/data";
import SectionHeader from "@/app/components/ui/SectionHeader";
import FadeUp from "@/app/components/ui/FadeUp";

export default function Skills() {
  return (
    <section id="skills" className="sm:px-12 px-6 py-24 border-b border-border">
      <SectionHeader num="03" title="Skills" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
        {skills.map((group, i) => (
          <FadeUp key={group.group} delay={i * 0.08}>
            <div className="bg-bg p-7 h-full">
              <p className="text-[10px] text-muted-2 tracking-[0.12em] mb-4">
                {group.group.toUpperCase()}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-muted hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
