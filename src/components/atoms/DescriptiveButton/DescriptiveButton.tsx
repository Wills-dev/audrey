"use client";

import { motion } from "framer-motion";

const DescriptiveButton = ({ description }: { description: string }) => {
  return (
    <motion.p
      initial={{ x: -200 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#E8DFF566] text-[#9B7EDE] h-10 rounded-full px-6 uppercase text-xs font-medium w-fit flex items-center text-center"
    >
      {description}
    </motion.p>
  );
};

export default DescriptiveButton;
