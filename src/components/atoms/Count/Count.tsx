"use client";

import { motion } from "framer-motion";

const Count = ({
  textColor,
  count,
  title,
  plusSign,
}: {
  textColor: string;
  count: number;
  title: string;
  plusSign?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-2 "
    >
      <h6
        className={`sm:text-[72px] text-[48px] font-bold tracking-0 sm:leading-[72px] leading-12 special-font ${textColor} flex items-center`}
      >
        {count}
        {plusSign && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="sm:size-8 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </h6>
      <p className="sm:text-sm text-xs text-white/50 uppercase">{title}</p>
    </motion.div>
  );
};

export default Count;
