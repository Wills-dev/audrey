"use client";

import { motion } from "framer-motion";

const HeroSubTitle = () => {
  const subTextTitle = "Good design feels obvious. That's never an accident.";
  return (
    <div className="flex items-end justify-between flex-wrap gap-6 md:gap-12">
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
        <h2 className="md:text-[110px] sm:text-[80px] font-bold text-6xl p-0 m-0 sm:leading-24 leading-14 tracking-[-3.96px] max-w-[788px] special-font text-[#FFD166]">
          {["I", "design", "the", "ones", "that", "don't."].map((word, i) => (
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
        </h2>
      </motion.div>
      <div className="flex-1 flex items-end justify-end w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            type: "spring",
            stiffness: 100,
          }}
          className="flex-1 flex items-end justify-end max-w-md w-full sm:min-w-[350px] min-w-[280px]"
        >
          <p className="sm:text-[24px] text-lg text-white/60 text-end font-light">
            {subTextTitle?.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.4,
                  delay: 1.0 + i * 0.05,
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSubTitle;
