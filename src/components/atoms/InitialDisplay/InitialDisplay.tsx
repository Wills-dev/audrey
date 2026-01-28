"use client";

import { motion } from "framer-motion";

const InitialDisplay = ({
  className,
  initial,
}: {
  className: string;
  initial: string;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.5 },
      }}
      className={`sm:w-16 sm:h-16 h-12 w-12 sm:rounded-2xl rounded-xl flex justify-center items-center ${className}`}
    >
      <p className="font-bold sm:text-[30px] text-[24px] text-white">
        {initial}
      </p>
    </motion.div>
  );
};

export default InitialDisplay;
