"use client";

import { motion } from "framer-motion";

const LetsWorkCard = ({
  caption,
  index,
  color,
  icon,
  desc,
  linkTitle,
}: {
  caption: string;
  index: number;
  color: string;
  icon: React.ReactElement;
  desc: string;
  linkTitle: string;
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
      className={`w-full h-[297px] border border-[#3A3A3A0D] rounded-3xl sm:p-8 p-6 space-y-6 bg-white/60 `}
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
        className={`w-[73px] h-[73px] rounded-2xl flex justify-center items-center`}
        style={{ background: color }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          className="text-white"
        >
          {icon}
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
        className="sm:text-[27.5px] text-xl special-font text-[#3A3A3A] m-0 p-0 pt-2"
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
        className="text-[#3A3A3AB2] sm:text-sm text-xs pt-2 m-0"
      >
        {desc}
      </motion.p>
      {linkTitle === "audreyoji.m@gmail.com" ? (
        <motion.a
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          href="mailto:audreyoji.m@gmail.com"
          className={`max-sm:text-sm font-bold flex items-center gap-2 group pt-2`}
          style={{ color }}
        >
          <span className="block group-hover:scale-105 transition-all duration-300">
            {linkTitle}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.a>
      ) : (
        <motion.a
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className={`max-sm:text-sm font-bold flex items-center gap-2 group pt-2`}
          style={{ color }}
        >
          <span className="block group-hover:scale-105 transition-all duration-300">
            {linkTitle}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.a>
      )}
    </motion.div>
  );
};

export default LetsWorkCard;
