"use client";

import { motion } from "framer-motion";

import Dot from "../Dot/Dot";

const PageTitle = ({
  title,
  showDot,
  textColor = "text-white mb-10",
}: {
  title: string;
  showDot?: boolean;
  textColor?: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" flex items-center gap-1"
    >
      <h2
        className={`sm:text-[80px] text-[50px] special-font p-0 leading-none ${textColor}`}
      >
        {title}
      </h2>
      {showDot && <Dot />}
    </motion.div>
  );
};

export default PageTitle;
