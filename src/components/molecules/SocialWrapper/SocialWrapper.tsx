"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { socialHandles } from "@/lib/constants";

const SocialWrapper = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {socialHandles?.map((social, index) => (
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15 * index,
            ease: [0.22, 1, 0.36, 1],
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            y: [0, -10, 0],
            transition: {
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileTap={{ scale: 0.95 }}
          key={social?.name}
          href={social?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full h-[73px] px-[41px] flex justify-center items-center gap-4 min-w-[209px] group"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2 + 0.15 * index,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
          >
            <Image
              src={social?.icon}
              alt={social?.name}
              width={28}
              height={28}
              className="object-contain"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + 0.15 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block font-medium sm:text-[20px] text-[#3A3A3A] group-hover:text-[#9B7EDE] transition-colors duration-300"
          >
            {social?.name}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialWrapper;
