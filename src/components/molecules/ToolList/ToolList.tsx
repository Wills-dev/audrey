"use client";

import { motion } from "framer-motion";

import ToolContent from "@/components/atoms/ToolContent/ToolContent";

const ToolList = ({
  caption,
  columnIndex,
  items,
}: {
  caption: string;
  columnIndex: number;
  items: { title: string; icon: string }[];
}) => {
  return (
    <motion.div
      className="max-w-[303.75px] w-full min-w-[280px] space-y-6"
      key={caption}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <motion.h6
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="flex items-center gap-2 text-white/60 uppercase sm:text-sm text-xs"
      >
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3 + columnIndex * 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-8 h-px bg-linear-to-r from-[#9B7EDE] to-[#FF8FA3] block origin-left"
        />
        <span className="block">{caption}</span>
      </motion.h6>

      <motion.div
        className="space-y-4 w-full"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {items?.map((item, itemIndex) => (
          <ToolContent
            key={item?.title}
            title={item?.title}
            icon={item?.icon}
            itemIndex={itemIndex}
            columnIndex={columnIndex}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ToolList;
