"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCardSmall = ({
  className,
  title,
  description,
  link,
  subTitle,
  index = 0,
}: {
  className: string;
  title: string;
  description: string;
  link: string;
  subTitle: string;
  index?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
            delayChildren: 0.2 + index * 0.15,
          },
        },
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`max-w-2xl w-full min-h-[312px] h-[312px] rounded-3xl relative p-8 max-sm:px-4 space-y-3 ${className} text-[#3A3A3A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] flex flex-col justify-center overflow-hidden`}
    >
      {/* Bottom Left Fly - Floating Animation */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 30, rotate: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4 + index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          rotate: [0, 5, 0],
        }}
        className="absolute -bottom-4 left-0"
      >
        <Image
          src="/assets/images/fly.svg"
          width={113.14}
          height={113.14}
          alt="fly"
          className="object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30, y: -30, rotate: -45 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: -45 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5 + index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        animate={{
          y: [0, 10, 0],
          x: [0, -5, 0],
          rotate: [-45, -40, -45],
        }}
        className="absolute top-0 right-4 -rotate-45"
      >
        <Image
          src="/assets/images/fly.svg"
          width={113.14}
          height={113.14}
          alt="fly"
          className="object-contain"
        />
      </motion.div>
      <motion.p
        variants={{
          hidden: { opacity: 0, scale: 0.8, y: 10 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            },
          },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className="h-8 w-fit px-3 flex justify-center items-center rounded-full bg-white/40 uppercase font-bold text-[10px]"
      >
        {subTitle}
      </motion.p>

      {/* Title */}
      <motion.h4
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="sm:text-[48px] text-[32px] special-font"
      >
        {title}
      </motion.h4>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="sm:text-[18px] text-[#3A3A3ACC]"
      >
        {description}
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="flex justify-end"
      >
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            x: 5,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-white/60 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full group"
        >
          <span>View project</span>
          <motion.div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <Image
              src="/assets/icons/arrow-up.svg"
              width={16}
              height={16}
              alt="arrow-up"
              className="object-contain"
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCardSmall;
