import About from "@/components/organisms/About/About";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import Navbar from "@/components/organisms/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}
