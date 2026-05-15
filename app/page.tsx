import Navbar from "@/app/components/sections/Navbar";
import Hero from "@/app/components/sections/Hero";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
import Skills from "@/app/components/sections/Skills";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
