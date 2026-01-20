import BeyondCardWrapper from "@/components/molecules/BeyondCardWrapper/BeyondCardWrapper";
import BeyondHeading from "@/components/molecules/BeyondHeading/BeyondHeading";
import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";

const BeyondScreenSection = () => {
  return (
    <SectionWrapper
      id="beyond"
      bgColor="bg-linear-to-b from-[#E8DFF51A] to-[#FDFCFB]"
    >
      <div className="sm:space-y-24 space-y-16">
        <BeyondHeading />
        <BeyondCardWrapper />
        <p className="text-center special-font sm:text-[36px] text-[28px] text-[#3A3A3AB2]">
          &#34;Curiosity isn&apos;t a distraction from design, it&apos;s the
          fuel.&#34;
        </p>
      </div>
    </SectionWrapper>
  );
};

export default BeyondScreenSection;
