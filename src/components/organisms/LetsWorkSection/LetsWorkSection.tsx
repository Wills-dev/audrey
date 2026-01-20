import LetsWorkCardWrapper from "@/components/molecules/LetsWorkCardWrapper/LetsWorkCardWrapper";
import LetsWorkHeading from "@/components/molecules/LetsWorkHeading/LetsWorkHeading";
import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";

const LetsWorkSection = () => {
  return (
    <SectionWrapper
      id="lets-work"
      bgColor="bg-[linear-gradient(135deg,rgba(232,223,245,0.3)_0%,rgba(214,233,245,0.2)_50%,rgba(255,229,217,0.3)_100%)]"
    >
      <div className="space-y-6">
        <LetsWorkHeading />
        <LetsWorkCardWrapper />
      </div>
    </SectionWrapper>
  );
};

export default LetsWorkSection;
