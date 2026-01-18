"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" flex-1 max-w-[530px] sm:min-w-[350px] min-w-[280px] h-[707px] w-full"
    >
      <Image
        src="/assets/images/profile.jpg"
        alt="profile-pic"
        width={530}
        height={707}
        className="object-cover rounded-3xl"
        loading="eager"
      />
    </motion.div>
  );
};

export default AboutImage;
