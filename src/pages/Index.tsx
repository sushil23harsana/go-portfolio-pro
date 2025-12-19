import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sushil Harsana | Backend Developer & Golang Engineer</title>
        <meta
          name="description"
          content="Sushil Harsana - Software Engineer specializing in Golang, Django, and FastAPI. Building scalable backend systems and distributed architectures."
        />
        <meta property="og:title" content="Sushil Harsana | Backend Developer" />
        <meta
          property="og:description"
          content="Software Engineer specializing in Golang, Django, and FastAPI. Building scalable backend systems."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
