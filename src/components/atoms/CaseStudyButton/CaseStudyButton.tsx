"use client";

import { motion } from "framer-motion";

const CaseStudyButton = () => {
  return (
    <motion.a
      animate={{ y: [-200, 0, 200] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: 0,
        transition: { duration: 0 },
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.1 }}
      href="#casestudies"
      className="flex justify-center items-center sm:w-28 w-16 h-16 sm:h-28 min-w-16 min-h-16 bg-[#FFD166] rounded-full text-black hover:bg-[#FFD166]/80 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </motion.a>
  );
};

export default CaseStudyButton;
