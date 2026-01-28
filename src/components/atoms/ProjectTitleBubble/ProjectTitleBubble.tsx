"use client";

import { motion } from "framer-motion";

const ProjectTitleBubble = ({
  className,
  title,
  index = 0,
}: {
  className: string;
  title: string;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ scale: 0, x: -20 }}
      whileInView={{ scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.4 + index * 0.2,
        type: "spring",
        stiffness: 200,
      }}
      className={`${className} sm:h-[34px] h-[25px] rounded-full px-4 flex items-center justify-center text-center gap-2 border`}
    >
      <p className="text-center sm:text-sm text-xs font-medium">{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="sm:size-4 size-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </motion.div>
  );
};

export default ProjectTitleBubble;
