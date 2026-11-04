import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationCertSection from "@/components/EducationCertSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationCertSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

