import ProjectCico from "@/components/molecules/ProjectCico/ProjectCico";
import ProjectElixir from "@/components/molecules/ProjectElixir/ProjectElixir";
import ProjectTofa from "@/components/molecules/ProjectTofa/ProjectTofa";
import ProjectToolKit from "@/components/molecules/ProjectToolKit/ProjectToolKit";

const ProjectWrapper = () => {
  return (
    <div className="sm:space-y-24 space-y-16">
      <ProjectCico />
      <ProjectElixir />
      <ProjectToolKit />
      <ProjectTofa />
    </div>
  );
};

export default ProjectWrapper;
