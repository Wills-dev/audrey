"use client";

import { motion } from "framer-motion";

import { beyondScreen } from "@/lib/constants";

import BeyondCard from "@/components/atoms/BeyondCard/BeyondCard";

const BeyondCardWrapper = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }}
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
    >
      {beyondScreen?.map((hobby, index) => (
        <BeyondCard
          key={hobby?.caption}
          index={index}
          caption={hobby?.caption}
          desc={hobby?.desc}
          icon={hobby?.icon}
          bgColor={hobby?.bgColor}
          iconBg={hobby?.iconBg}
        />
      ))}
    </motion.div>
  );
};

export default BeyondCardWrapper;
