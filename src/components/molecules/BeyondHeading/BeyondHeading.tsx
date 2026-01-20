import DescriptiveButton from "@/components/atoms/DescriptiveButton/DescriptiveButton";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";

const BeyondHeading = () => {
  return (
    <div className="space-y-6">
      <DescriptiveButton
        description="Beyond Design"
        color="bg-[#FFE5D9] text-[#FF8FA3]"
      />
      <PageTitle title="Beyond the Screen" textColor="text-[#3A3A3A]" />
      <SubTitle
        subTitle="The things that shape how I see, think, and design."
        fontSize="sm:text-lg"
        maxWidth="max-w-[450spx]"
      />
    </div>
  );
};

export default BeyondHeading;
