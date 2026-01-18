"use client";

import { motion } from "framer-motion";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import Paragraphs from "@/components/atoms/Paragraphs/Paragraphs";
import Count from "@/components/atoms/Count/Count";

const AboutContent = () => {
  return (
    <div className="sm:space-y-8 space-y-6 flex-1">
      <PageTitle title="About Me" showDot />
      <motion.div
        className="sm:space-y-6 space-y-4 max-w-2xl w-full sm:min-w-[350px] min-w-[280px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.6,
            },
          },
        }}
      >
        <Paragraphs
          text="I approach design as a system, not a surface. My work lives at the intersection of structure and feeling. I care deeply about how things function, and just as much about how they land with people."
          textColor="text-white/60"
          fontSize="sm:text-[20px]"
        />
        <Paragraphs
          text="In 5 years, I have shipped more than 30 products and contributed to 7+ design systems. I'm drawn to complex problems, thoughtful constraints, and the quiet satisfaction of shaping experiences that feel clear, grounded, and inevitable."
          textColor="text-white/60"
          fontSize="sm:text-[20px]"
        />
        <Paragraphs
          text="I love the work of asking better questions, refining details, and building products that help people move through the world with confidence."
          textColor="text-white/60"
          fontSize="sm:text-[20px]"
        />
      </motion.div>
      <div className="flex sm:gap-16 gap-10">
        <Count textColor="text-[#FFD166]" count={5} title="Years" plusSign />
        <Count
          textColor="text-[#FF8FA3]"
          count={30}
          title="Projects"
          plusSign
        />
        <Count textColor="text-[#6FB7E8]" count={7} title="Systems" />
      </div>
    </div>
  );
};

export default AboutContent;
