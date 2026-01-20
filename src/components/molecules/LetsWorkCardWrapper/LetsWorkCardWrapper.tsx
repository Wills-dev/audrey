"use client";

import LetsWorkCard from "@/components/atoms/LetsWorkCard/LetsWorkCard";
import { letsWork } from "@/lib/constants";
import { motion } from "framer-motion";

const LetsWorkCardWrapper = () => {
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
      {letsWork?.map((card, index) => (
        <LetsWorkCard
          key={card?.caption}
          index={index}
          caption={card?.caption}
          desc={card?.desc}
          color={card?.color}
          icon={card?.icon}
          linkTitle={card?.linkTitle}
        />
      ))}
    </motion.div>
  );
};

export default LetsWorkCardWrapper;
