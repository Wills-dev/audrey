"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const CaseStudy = ({
  imgUrl,
  index,
  title,
  description,
  stacks,
  link,
}: {
  imgUrl: string;
  index: number;
  title: string;
  description: string;
  stacks: string[];
  link: string;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
      className={`flex flex-wrap items-center justify-center ${isEven ? "" : "flex-row-reverse"} sm:gap-16 gap-10`}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: isEven ? -60 : 60,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="max-w-[788px] sm:min-w-[350px] min-w-[280px] w-full sm:h-[591px] h-[360px] rounded-3xl overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={imgUrl}
            alt={title}
            width={788}
            height={591}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 w-full sm:min-w-[350px] min-w-[280px] space-y-4">
        <motion.h6
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="special-font sm:text-[50px] text-[30px] text-[#545454]"
        >
          {title}
        </motion.h6>

        <div className="space-y-6">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="max-sm:text-sm text-[#2A2A2ACC]"
          >
            {description}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.7,
                },
              },
            }}
            className="flex flex-wrap gap-2"
          >
            {stacks?.map((stack) => (
              <motion.p
                key={stack}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f5f5f5",
                  transition: { duration: 0.2 },
                }}
                className="bg-white border border-[3A3A3A0D] text-[#3A3A3A99] rounded-full h-[38px] flex items-center px-4 text-center sm:text-sm text-xs cursor-default"
              >
                {stack}
              </motion.p>
            ))}
          </motion.div>

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
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#545454] hover:text-[#4e2c9a] duration-300 transition-all max-sm:text-sm flex items-center gap-2 group"
          >
            View Case Study{" "}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
