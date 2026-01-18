"use client";

import { motion } from "framer-motion";

const Paragraphs = ({
  text,
  textColor,
  fontSize,
}: {
  text: string;
  textColor: string;
  fontSize: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
    >
      <p className={`${fontSize} ${textColor}`}>
        {text?.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, filter: "blur(10px)" },
              visible: { opacity: 1, filter: "blur(0px)" },
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default Paragraphs;
