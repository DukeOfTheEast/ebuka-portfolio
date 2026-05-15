export const siteData = {
  name: "Ebuka Francis Ukachukwu",
  shortName: "Ebuka.dev",
  role: "Frontend Engineer",
  location: "Nigeria",
  status: "Open to work",
  bio: "4+ years turning complex UI/UX designs into fast, cross-browser compatible web applications. Specialized in React, Next.js, and TypeScript — with a passion for clean code and outstanding user experience.",
  email: "ukachukwu.ebuka1999@gmail.com",
  phone: "+234 802 122 6974",
  linkedin: "https://linkedin.com/in/ukachukwu-ebuka",
  linkedinHandle: "in/ukachukwu-ebuka",
  github: "https://github.com/DukeOfTheEast",
  githubHandle: "DukeOfTheEast",
};

export const projects = [
  {
    num: "01",
    name: "Flipeet Pay",
    type: "Professional",
    description:
      "Stablecoin-to-fiat offramp platform enabling users to convert USDC/USDT to local currencies with real-time exchange rates, cross-chain bridge, transaction tracking, and utility bill payments across African markets.",
    image: "/flipeet.png",
    liveUrl: "https://pay.flipeet.io",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
  },
  {
    num: "02",
    name: "Vaultr",
    type: "Personal",
    description:
      "Crypto portfolio tracker where users manage all their holdings in one place, track live prices via CoinGecko API, and analyse coin pairs using integrated TradingView charts — all in a clean dark dashboard.",
    image: "/vaultr.png",
    liveUrl: "https://vaultr.vercel.app",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui", "Firebase"],
  },
  {
    num: "03",
    name: "Tessium",
    type: "Professional",
    description:
      "Full-stack web application built with Next.js and Supabase delivering a scalable, performant product with a modern interface and robust backend data layer.",
    image: null,
    liveUrl: "https://tessium.io",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui", "Supabase"],
  },
];

export const experience = [
  {
    period: "Jan 2025 — Present",
    company: "Flipeet Inc.",
    role: "Frontend Engineer",
    bullets: [
      "Built responsive stablecoin-to-fiat web app with real-time exchange rates and transaction tracking.",
      "Developed a cross-chain bridge feature for seamless digital asset transfers across blockchain networks.",
      "Built a utility services page enabling stablecoin payments for airtime, data, and electricity bills.",
      "Integrated Polymarket API for decentralized prediction markets within the platform.",
      "Led frontend development with Git workflows and code quality standards across the team.",
    ],
  },
  {
    period: "Jan 2024 — Dec 2024",
    company: "Flipeet Inc.",
    role: "Frontend Engineer Intern",
    bullets: [
      "Developed and maintained responsive web applications using Next.js with cross-platform compatibility.",
      "Collaborated with interns implementing Git version control for code collaboration and project management.",
    ],
  },
  {
    period: "Aug 2023 — Dec 2023",
    company: "Treekle Inc.",
    role: "Frontend Engineer Intern",
    bullets: [
      "Built dynamic web applications using React.js and TailwindCSS, transforming design specs into fully functional, cross-browser-compatible websites.",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    group: "Frameworks",
    items: ["React.js", "Next.js", "TailwindCSS", "Shadcn/ui"],
  },
  {
    group: "Backend / Data",
    items: ["Firebase", "Supabase", "REST APIs", "PostgreSQL"],
  },
  {
    group: "Tools",
    items: ["Git & GitHub", "Figma", "Vercel", "Framer Motion"],
  },
];

export const contactLinks = [
  {
    label: "EMAIL",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
  },
  {
    label: "LINKEDIN",
    value: siteData.linkedinHandle,
    href: siteData.linkedin,
  },
  {
    label: "GITHUB",
    value: siteData.githubHandle,
    href: siteData.github,
  },
  {
    label: "PHONE",
    value: siteData.phone,
    href: `tel:${siteData.phone.replace(/\s/g, "")}`,
  },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
