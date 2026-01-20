import DescriptiveButton from "@/components/atoms/DescriptiveButton/DescriptiveButton";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SocialWrapper from "../SocialWrapper/SocialWrapper";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";

const LetsWorkHeading = () => {
  return (
    <div className="space-y-6">
      <DescriptiveButton
        description="Connect with me"
        color="bg-white/60 text-[#9B7EDE]"
      />
      <PageTitle title="Let's work together" textColor="text-[#3A3A3A]" />
      <SocialWrapper />
      <SubTitle
        subTitle="If you are building something meaningful, I'd love to help shape it. I'm open to thoughtful conversations."
        maxWidth="max-w-[753px]"
      />
    </div>
  );
};

export default LetsWorkHeading;
