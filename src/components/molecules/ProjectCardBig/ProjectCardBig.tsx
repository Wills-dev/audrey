"use client";

import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import InitialDisplay from "@/components/atoms/InitialDisplay/InitialDisplay";
import ProjectBigHeader from "@/components/atoms/ProjectBigHeader/ProjectBigHeader";
import ProjectBtn from "@/components/atoms/ProjectBtn/ProjectBtn";
import ProjectTitleBubble from "@/components/atoms/ProjectTitleBubble/ProjectTitleBubble";
import ProjectToolCard from "@/components/atoms/ProjectToolCard/ProjectToolCard";
import { motion } from "framer-motion";

interface ProjectCardProps {
  initial: string;
  initialClassName: string;
  statusTitle: string;
  statusClassName: string;
  title: string;
  headerLineColor: string;
  description: string;
  tools: Array<{
    title: string;
    className: string;
  }>;
  btnCaption: string;
  btnUrl: string;
  btnClassName: string;
  year: string;
  category: string;
  index?: number;
}

const ProjectCardBig = ({
  initial,
  initialClassName,
  statusTitle,
  statusClassName,
  title,
  headerLineColor,
  description,
  tools,
  btnCaption,
  btnUrl,
  btnClassName,
  year,
  category,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: 0.1 + index * 0.2,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.12,
            delayChildren: 0.3 + index * 0.2,
          },
        },
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="bg-white rounded-3xl shadow-[0px_25px_50px_-12px_#615FFF1A]"
    >
      <div className="bg-linear-to-b rounded-l-3xl from-[#FFFFFF] to-[#F8FAFC] w-full min-h-[812.75px] sm:p-16 p-8 space-y-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="flex items-center gap-4"
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            <InitialDisplay className={initialClassName} initial={initial} />
          </motion.div>
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
          >
            <ProjectTitleBubble
              className={statusClassName}
              title={statusTitle}
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <ProjectBigHeader title={title} lineColor={headerLineColor} />
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="text-[#45556C] sm:text-[18px] max-w-[436px] w-full"
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
                delayChildren: 0.1,
              },
            },
          }}
          className="flex items-center gap-2 flex-wrap"
        >
          {tools?.map((tool) => (
            <motion.div
              key={tool?.title}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 10 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              <ProjectToolCard
                title={tool?.title}
                className={tool?.className}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="py-4"
        >
          <ProjectBtn
            caption={btnCaption}
            url={btnUrl}
            className={btnClassName}
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="flex items-center justify-between border-t border-[#E2E8F0] pt-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.2,
            }}
          >
            <InfoDisc caption="Project Year" value={year} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.9 + index * 0.2,
            }}
          >
            <InfoDisc caption="Category" value={category} end />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCardBig;
