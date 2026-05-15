import { siteData } from "@/app/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-12 py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-[11px] text-muted-2">
        © {year} {siteData.name}
      </p>

      <div className="flex items-center gap-6">
        <a
          href={siteData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-muted-2 hover:text-muted transition-colors duration-200 tracking-[0.06em]"
        >
          GITHUB
        </a>
        <a
          href={siteData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-muted-2 hover:text-muted transition-colors duration-200 tracking-[0.06em]"
        >
          LINKEDIN
        </a>
        <a
          href={`mailto:${siteData.email}`}
          className="text-[11px] text-muted-2 hover:text-muted transition-colors duration-200 tracking-[0.06em]"
        >
          EMAIL
        </a>
      </div>

      <a
        href="#hero"
        className="text-[11px] text-muted-2 hover:text-muted transition-colors duration-200 tracking-[0.06em]"
      >
        BACK TO TOP ↑
      </a>
    </footer>
  );
}
