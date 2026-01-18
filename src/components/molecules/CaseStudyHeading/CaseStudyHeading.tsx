import DescriptiveButton from "@/components/atoms/DescriptiveButton/DescriptiveButton";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";

const CaseStudyHeading = () => {
  return (
    <div className="space-y-6">
      <DescriptiveButton description="Selected Work" />
      <PageTitle title="Case Studies" textColor="text-[#3A3A3A]" />
      <SubTitle subTitle="Selected work that reflects how I think, not just what I ship." />
    </div>
  );
};

export default CaseStudyHeading;
