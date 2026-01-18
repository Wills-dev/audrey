import DescriptiveButton from "@/components/atoms/DescriptiveButton/DescriptiveButton";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";

const ServiceHeading = () => {
  return (
    <div className="space-y-6">
      <DescriptiveButton description="Short-term Engagements" />
      <PageTitle
        title="Services — short-term & one-off"
        textColor="text-[#3A3A3A]"
      />
      <SubTitle
        subTitle="I also take focused, short engagements: from landing pages to end-to-end app screens."
        maxWidth="max-w-[731px]"
      />
    </div>
  );
};

export default ServiceHeading;
