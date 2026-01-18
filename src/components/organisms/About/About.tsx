import AboutImage from "@/components/atoms/AboutImage/AboutImage";
import AboutContent from "@/components/molecules/AboutContent/AboutContent";
import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper bgColor="bg-[#1F1535]" id="about">
      <div className="flex flex-wrap w-full gap-8">
        <AboutContent />
        <AboutImage />
      </div>
    </SectionWrapper>
  );
};

export default About;
