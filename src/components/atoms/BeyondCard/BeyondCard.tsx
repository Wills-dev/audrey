"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const BeyondCard = ({
  caption,
  index,
  bgColor,
  icon,
  desc,
  iconBg,
}: {
  caption: string;
  index: number;
  bgColor: string;
  icon: string;
  desc: string;
  iconBg: string;
}) => {
  return (
    <motion.div
      key={caption}
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotateX: 10,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      className={`w-full h-[268px] shadow-sm border border-[#3A3A3A0D] rounded-3xl sm:p-8 p-6 space-y-6 ${bgColor}`}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.2 + index * 0.12,
          type: "spring",
          stiffness: 150,
          damping: 12,
        }}
        whileHover={{
          scale: 1.15,
          rotate: [0, -5, 5, -5, 0],
          transition: {
            duration: 0.6,
            rotate: {
              duration: 0.5,
              repeat: 0,
            },
          },
        }}
        className={`w-20 h-20 rounded-2xl flex justify-center items-center ${iconBg}`}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={icon}
            alt={caption}
            width={28}
            height={28}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
      <motion.h6
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3 + index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sm:text-[30px] text-2xl special-font text-[#3A3A3A] m-0 p-0 pt-2"
      >
        {caption}
      </motion.h6>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.5 + index * 0.12,
        }}
        className="text-[#3A3A3AB2] max-sm:text-sm pt-2"
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};

export default BeyondCard;
