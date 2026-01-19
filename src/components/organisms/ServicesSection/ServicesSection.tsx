"use client";

import { motion } from "framer-motion";

import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";
import ServiceHeading from "@/components/molecules/ServiceHeading/ServiceHeading";

import { services } from "@/lib/constants";
import ServiceGuide from "@/components/atoms/ServiceGuide/ServiceGuide";
import Service from "@/components/molecules/Service/Service";

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
            <Service key={service?.title} service={service} index={index} />
          ))}
        </motion.div>
        <ServiceGuide />
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
