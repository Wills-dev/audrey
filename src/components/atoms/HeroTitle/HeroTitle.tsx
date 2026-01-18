"use client";

import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className=""
    >
      <h2 className="md:text-[104px] sm:text-[65px] font-light text-5xl p-0 m-0 leading-tight max-w-[788px] special-font text-white tracking-[-3px]">
        {["Most", "products"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="inline-block mr-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}

        {["fail", "quietly"].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7 + i * 0.1,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="inline-block mr-4 last:mr-0 text-[#FFFFFF]/50"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  );
};

export default HeroTitle;
