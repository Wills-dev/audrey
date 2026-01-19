import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";
import ToolsHeading from "@/components/molecules/ToolsHeading/ToolsHeading";
import ToolsWrapper from "@/components/molecules/ToolsWrapper/ToolsWrapper";
import TrustedBy from "@/components/molecules/TrustedBy/TrustedBy";

const TooolsSection = () => {
  return (
    <SectionWrapper id="tools" bgColor="bg-[#1F1535]">
      <div className="sm:space-y-24 space-y-16">
        <ToolsHeading />
        <ToolsWrapper />
        <TrustedBy />
      </div>
    </SectionWrapper>
  );
};

export default TooolsSection;
