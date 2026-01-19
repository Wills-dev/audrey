"use client";

import { motion } from "framer-motion";
import Image from "next/image";



const ToolContent = ({
  title,
  icon,
  columnIndex,
  itemIndex,
}: {
  title: string;
  icon: string;
  columnIndex: number;
  itemIndex: number;
}) => {
  return (
    <motion.div
      key={title}
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        scale: 1.03,
        x: 5,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(155, 126, 222, 0.3)",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="border border-white/10 bg-white/5 rounded-2xl p-[21px] flex items-center gap-4 w-full min-w-full overflow-hidden cursor-default"
    >
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.4 + columnIndex * 0.2 + itemIndex * 0.08,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="object-contain"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5 + columnIndex * 0.2 + itemIndex * 0.08,
        }}
        className="text-white/90 font-medium max-sm:text-sm"
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default ToolContent;
