import { toolKitProjectTools } from "@/lib/constants";

import ProjectCardBig from "../ProjectCardBig/ProjectCardBig";
import ProjectCardImg from "../ProjectCardImg/ProjectCardImg";

const ProjectToolKit = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="max-w-[1128px] w-full grid md:grid-cols-2 grid-cols-1 max-md:gap-4">
        <ProjectCardBig
          initial="D"
          mainShadow="shadow-[0px_25px_50px_-12px_#FE9A001A]"
          mainClassName="bg-linear-to-b from-[#FFFFFF] to-[#FFFBEB]"
          initialClassName="d-initial bg-gradient-to-b from-[#FFB900] to-[#F0B100]"
          statusTitle="Design Resource"
          statusClassName="text-[#007A55] border-[#A4F4CF] bg-[#ECFDF5]"
          title="Design Toolkit"
          headerLineColor="bg-gradient-to-r from-[#FE9A00] to-[#F0B100]"
          description="A comprehensive collection of 100+ curated design resources, tools, and assets for modern designers."
          tools={toolKitProjectTools}
          btnCaption="View Resource"
          btnUrl="https://www.figma.com/proto/..."
          btnClassName="bg-gradient-to-r from-[#FE9A00] to-[#D08700] d-initial"
          year="2026"
          category="Design Resources"
          index={0}
        />
        <ProjectCardImg
          className="bg-linear-to-br from-[#FFB900] via-[#FDC700] to-[#F0B100]"
          imgUrl="/assets/images/project-img2.svg"
        />
      </div>
    </div>
  );
};

export default ProjectToolKit;
