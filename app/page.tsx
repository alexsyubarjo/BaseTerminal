import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { about, projects, contact } from "@/lib/data";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="about" title={about.title.replace("// ", "").replace("//", "")}>
        <About />
      </Section>

      <Section id="projects" title={projects.title.replace("// ", "").replace("//", "")}>
        <Projects />
      </Section>

      <Section id="contact" title={contact.title.replace("// ", "").replace("//", "")}>
        <Contact />
      </Section>

      <Footer />
    </main>
  );
}
