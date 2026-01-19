import About from "@/components/organisms/About/About";
import CaseStudiesSection from "@/components/organisms/CaseStudiesSection/CaseStudiesSection";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import Navbar from "@/components/organisms/Navbar/Navbar";
import ProjectSection from "@/components/organisms/ProjectSection/ProjectSection";
import ServicesSection from "@/components/organisms/ServicesSection/ServicesSection";
import TooolsSection from "@/components/organisms/TooolsSection/TooolsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <About />
      <CaseStudiesSection />
      <ProjectSection />
      <ServicesSection />
      <TooolsSection />
    </div>
  );
}
