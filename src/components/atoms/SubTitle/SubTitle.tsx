"use client";

import { motion } from "framer-motion";

const SubTitle = ({
  subTitle,
  maxWidth = "max-w-[786px]",
  fontSize = "sm:text-[24px] text-lg",
}: {
  subTitle: string;
  maxWidth?: string;
  fontSize?: string;
}) => {
  return (
    <motion.p
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${maxWidth} ${fontSize} w-full  text-[#3A3A3AB2]`}
    >
      {subTitle}
    </motion.p>
  );
};

export default SubTitle;
