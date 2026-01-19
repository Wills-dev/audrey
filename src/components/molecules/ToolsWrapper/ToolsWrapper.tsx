"use client";

import { motion } from "framer-motion";

import { tools } from "@/lib/constants";

import ToolList from "../ToolList/ToolList";

const ToolsWrapper = () => {
  return (
    <motion.div
      className="flex justify-center flex-wrap gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {tools?.map((tool, columnIndex) => (
        <ToolList
          key={tool?.caption}
          caption={tool?.caption}
          items={tool?.items}
          columnIndex={columnIndex}
        />
      ))}
    </motion.div>
  );
};

export default ToolsWrapper;
