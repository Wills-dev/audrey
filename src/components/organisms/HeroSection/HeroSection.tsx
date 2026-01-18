"use client";

import { motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";
import HeroTitle from "@/components/atoms/HeroTitle/HeroTitle";
import HeroSubTitle from "@/components/atoms/HeroSubTitle/HeroSubTitle";
import DownloadButton from "@/components/atoms/DownloadButton/DownloadButton";
import CaseStudyButton from "@/components/atoms/CaseStudyButton/CaseStudyButton";
import Dot from "@/components/atoms/Dot/Dot";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="bg-[linear-gradient(180deg,#1F1535_0%,#2A1A4A_50%,#1F1535_100%)] min-h-screen w-full"
    >
      <Container>
        <div className="sm:py-24 py-20 space-y-6">
          <HeroTitle />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-0.5 bg-[#FFD166]" />
            <Dot />
          </motion.div>
          <HeroSubTitle />
          <div className="flex items-center gap-4 justify-between">
            <DownloadButton />
            <CaseStudyButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
