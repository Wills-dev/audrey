import DescriptiveButton from "@/components/atoms/DescriptiveButton/DescriptiveButton";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";

const ProjectHeading = () => {
  return (
    <div className="space-y-6">
      <DescriptiveButton description="Creative Explorations" />
      <PageTitle title="Explorations & Projects" textColor="text-[#3A3A3A]" />
      <SubTitle subTitle="Concept experiments and creative work that explore new ideas, test interactions, and push creative boundaries." />
    </div>
  );
};

export default ProjectHeading;
