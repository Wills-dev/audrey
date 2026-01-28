import { cicoProjectTools } from "@/lib/constants";

import ProjectCardBig from "../ProjectCardBig/ProjectCardBig";

const ProjectCico = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="max-w-[1128px] w-full grid md:grid-cols-2 grid-cols-1">
        <ProjectCardBig
          initial="C"
          initialClassName="c-initial bg-gradient-to-b from-[#4F39F6] to-[#432DD7]"
          statusTitle="Design & Prototype"
          statusClassName="text-[#007A55] border-[#A4F4CF] bg-[#ECFDF5]"
          title="Cico Banking App"
          headerLineColor="bg-gradient-to-r from-[#4F39F6] to-[#9810FA]"
          description="A modern fintech mobile application designed for seamless money transfers, bill payments, and financial management."
          tools={cicoProjectTools}
          btnCaption="View Prototype"
          btnUrl="https://www.figma.com/proto/..."
          btnClassName="bg-gradient-to-r from-[#4F39F6] to-[#432DD7] c-initial"
          year="2024"
          category="Mobile Banking"
          index={0}
        />
        <div className="min-h-[812.75px] bg-linear-to-br from-[#4F39F6] via-[#432DD7] to-[#8200DB] rounded-r-3xl"></div>
      </div>
    </div>
  );
};

export default ProjectCico;
