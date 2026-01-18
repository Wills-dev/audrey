"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";
import ServiceHeading from "@/components/molecules/ServiceHeading/ServiceHeading";

import { services } from "@/lib/constants";

const ServicesSection = () => {
  return (
    <SectionWrapper
      id="services"
      bgColor="bg-[linear-gradient(135deg,#FDFCFB_0%,rgba(232,223,245,0.2)_100%)]"
    >
      <div className="space-y-24">
        <ServiceHeading />
        <motion.div
          className="grid sm:grid-cols-2 grid-cols-1 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {services?.map((service, index) => (
            <motion.div
              key={service?.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="w-full sm:p-8 p-6 bg-white rounded-3xl border border-[#3A3A3A0D] shadow-md"
            >
              <div className="space-y-6 pb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-linear-to-b from-[#9B7EDE] to-[#6FB7E8] h-16 w-16 rounded-2xl flex items-center justify-center"
                >
                  <Image
                    src={service?.icon}
                    alt="icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </motion.div>
                <motion.h6
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="sm:text-2xl text-xl text-[#3A3A3A] special-font"
                >
                  {service?.title}
                </motion.h6>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.15,
                  }}
                  className="text-[#3A3A3AB2] max-sm:text-sm"
                >
                  {service?.description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.15,
                  }}
                  className="text-[#3A3A3A99] sm:text-sm text-xs flex items-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + index * 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-[#9B7EDE] block mr-2"
                  />
                  {service?.duration}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.15,
                }}
                className="flex justify-between items-center gap-4 flex-wrap pt-2 pb-6 border-t border-[#3A3A3A0D]"
              >
                <p className="text-[#3A3A3A80] uppercase text-xs">
                  STARTING AT
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="font-bold sm:text-[24px] text-[20px] text-[#9B7EDE]"
                >
                  ${service?.price}
                </motion.p>
              </motion.div>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.15,
                }}
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                href="https://forms.gle/EfiwARfVYBHWK6cx5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-[#3A3A3A0D] hover:bg-[#3A3A3A]/10 transition-all duration-300 px-6 sm:py-3 py-2 text-[#3A3A3A] max-sm:text-sm w-fit rounded-full group"
              >
                Tell me about your idea{" "}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
