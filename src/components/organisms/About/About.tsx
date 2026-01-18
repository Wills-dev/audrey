import AboutImage from "@/components/atoms/AboutImage/AboutImage";
import Container from "@/components/atoms/Container/Container";
import AboutContent from "@/components/molecules/AboutContent/AboutContent";

const About = () => {
  return (
    <div className="sm:py-28 py-16 bg-[#1F1535] w-full">
      <Container>
        <div id="about" className="flex flex-wrap w-full gap-8">
          <AboutContent />
          <AboutImage />
        </div>
      </Container>
    </div>
  );
};

export default About;
