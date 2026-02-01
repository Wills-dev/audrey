import About from "@/components/organisms/About/About";
import BeyondScreenSection from "@/components/organisms/BeyondScreenSection/BeyondScreenSection";
import CaseStudiesSection from "@/components/organisms/CaseStudiesSection/CaseStudiesSection";
import Footer from "@/components/organisms/Footer/Footer";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import LetsWorkSection from "@/components/organisms/LetsWorkSection/LetsWorkSection";
import Navbar from "@/components/organisms/Navbar/Navbar";
import ProjectSection from "@/components/organisms/ProjectSection/ProjectSection";
import ServicesSection from "@/components/organisms/ServicesSection/ServicesSection";
import TooolsSection from "@/components/organisms/TooolsSection/TooolsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <CaseStudiesSection />
      <ProjectSection />
      <ServicesSection />
      <TooolsSection />
      <BeyondScreenSection />
      <LetsWorkSection />
      <Footer />
    </div>
  );
}
