"use client";

import { motion } from "framer-motion";

const LetsTalkButton = () => {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      className="border-2 border-white w-[119.78px] h-12 rounded-full max-sm:text-sm hover:bg-white/10 transition-colors duration-300 flex items-center justify-center text-center text-white cursor-pointer"
    >
      Let&apos;s Talk
    </motion.button>
  );
};

export default LetsTalkButton;
