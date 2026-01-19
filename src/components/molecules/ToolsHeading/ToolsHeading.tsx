"use client";

import { motion } from "framer-motion";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";

const ToolsHeading = () => {
  return (
    <div className="space-y-6">
      <PageTitle title="Tools & Skills" textColor="text-white" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white/50 sm:text-lg"
      >
        A carefully curated toolkit that helps me bring ideas to life
      </motion.p>
    </div>
  );
};

export default ToolsHeading;
