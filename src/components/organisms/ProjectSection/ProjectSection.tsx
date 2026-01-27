import ProjectHeading from "@/components/molecules/ProjectHeading/ProjectHeading";
import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";
import ProjectWrapper from "../ProjectWrapper/ProjectWrapper";

const ProjectSection = () => {
  return (
    <SectionWrapper id="projects" bgColor="bg-white">
      <div className="sm:space-y-24 space-y-16">
        <ProjectHeading />
        <ProjectWrapper />
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
