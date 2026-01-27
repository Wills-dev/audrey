import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import InitialDisplay from "@/components/atoms/InitialDisplay/InitialDisplay";
import ProjectBigHeader from "@/components/atoms/ProjectBigHeader/ProjectBigHeader";
import ProjectBtn from "@/components/atoms/ProjectBtn/ProjectBtn";
import ProjectTitleBubble from "@/components/atoms/ProjectTitleBubble/ProjectTitleBubble";
import ProjectToolCard from "@/components/atoms/ProjectToolCard/ProjectToolCard";
import { cicoProjectTools } from "@/lib/constants";

const ProjectCico = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="max-w-[1128px] w-full grid md:grid-cols-2 grid-cols-1">
        <div className="bg-white rounded-3xl shadow-[0px_25px_50px_-12px_#615FFF1A]">
          <div className="bg-linear-to-b rounded-l-3xl from-[#FFFFFF] to-[#F8FAFC] w-full min-h-[812.75px] sm:p-16 p-8 space-y-6">
            <div className="flex items-center gap-4">
              <InitialDisplay
                className="c-initial bg-linear-to-b from-[#4F39F6] to-[#432DD7]"
                initial="C"
              />
              <ProjectTitleBubble
                className="text-[#007A55] border-[#A4F4CF] bg-[#ECFDF5]"
                title="Design & Prototype"
              />
            </div>
            <ProjectBigHeader
              title="Cico Banking App"
              lineColor="bg-linear-to-r from-[#4F39F6] to-[#9810FA]"
            />
            <p className="text-[#45556C] sm:text-[18px] max-w-[436px] w-full">
              A modern fintech mobile application designed for seamless money
              transfers, bill payments, and financial management.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {cicoProjectTools?.map((tool) => (
                <ProjectToolCard
                  key={tool?.title}
                  title={tool?.title}
                  className={tool?.className}
                />
              ))}
            </div>
            <div className="py-4">
              <ProjectBtn
                caption="View Prototype"
                url="https://www.figma.com/proto/6uXSQP5fW4LmmJL8XzM2Wp/CICO?page-id=0%3A1%3Fnode-id%3D41-5646&p=f&viewport=249%2C2732%2C0.32&t=wELudBIXIRJo4RBw-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=41%3A5646&node-id=41-5646&hide-ui=1"
                className="bg-linear-to-r from-[#4F39F6] to-[#432DD7] c-initial"
              />
            </div>
            <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-4">
              <InfoDisc caption="Project Year" value="2024" />
              <InfoDisc caption="Category" value="Mobile Banking" end />
            </div>
          </div>
        </div>
        <div className="min-h-[812.75px] bg-linear-to-br from-[#4F39F6] via-[#432DD7] to-[#8200DB] rounded-r-3xl"></div>
      </div>
    </div>
  );
};

export default ProjectCico;
