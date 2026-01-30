import { cicoProjectTools } from "@/lib/constants";

import ProjectCardBig from "../ProjectCardBig/ProjectCardBig";
import ProjectCardImg from "../ProjectCardImg/ProjectCardImg";

const ProjectCico = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="max-w-[1128px] w-full grid md:grid-cols-2 grid-cols-1">
        <ProjectCardBig
          initial="C"
          mainClassName="bg-linear-to-b from-[#FFFFFF] to-[#F8FAFC]"
          initialClassName="c-initial bg-gradient-to-b from-[#4F39F6] to-[#432DD7]"
          statusTitle="Design & Prototype"
          statusClassName="text-[#007A55] border-[#A4F4CF] bg-[#ECFDF5]"
          title="Cico Banking App"
          headerLineColor="bg-gradient-to-r from-[#4F39F6] to-[#9810FA]"
          description="A modern fintech mobile application designed for seamless money transfers, bill payments, and financial management."
          tools={cicoProjectTools}
          btnCaption="View Prototype"
          btnUrl="https://www.figma.com/proto/6uXSQP5fW4LmmJL8XzM2Wp/CICO?page-id=0%3A1%3Fnode-id%3D41-5646&p=f&viewport=249%2C2732%2C0.32&t=wELudBIXIRJo4RBw-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=41%3A5646&node-id=41-5646&hide-ui=1"
          btnClassName="bg-gradient-to-r from-[#4F39F6] to-[#432DD7] c-initial"
          year="2024"
          category="Mobile Banking"
          index={0}
        />
        <ProjectCardImg
          className="bg-linear-to-br from-[#4F39F6] via-[#432DD7] to-[#8200DB]"
          imgUrl="/assets/images/project-img1.svg"
        />
      </div>
    </div>
  );
};

export default ProjectCico;
