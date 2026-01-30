"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const ProjectCardImg = ({
  className,
  imgUrl,
}: {
  className: string;
  imgUrl: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`md:min-h-[812.75px] md:rounded-r-3xl max-md:rounded-3xl p-8 max-sm:px-4 flex items-end justify-center ${className}`}
    >
      <Image
        src={imgUrl}
        alt="project image"
        width={468}
        height={716.75}
        className="object-contain"
        priority
      />
    </motion.div>
  );
};

export default ProjectCardImg;
