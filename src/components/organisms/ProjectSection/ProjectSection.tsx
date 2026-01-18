import ProjectHeading from "@/components/molecules/ProjectHeading/ProjectHeading";
import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";

const ProjectSection = () => {
  return (
    <SectionWrapper id="projects" bgColor="bg-white">
      <div className="">
        <ProjectHeading />
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
