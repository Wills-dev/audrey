import CaseStudy from "@/components/molecules/CaseStudy/CaseStudy";
import CaseStudyHeading from "@/components/molecules/CaseStudyHeading/CaseStudyHeading";
import SectionWrapper from "@/components/molecules/SectionWrapper/SectionWrapper";

import { caseStudies } from "@/lib/constants/caseStudies";

const CaseStudiesSection = () => {
  return (
    <SectionWrapper id="casestudies">
      <div className="space-y-24">
        <CaseStudyHeading />
        <div className="space-y-24">
          {caseStudies?.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              index={index}
              title={caseStudy?.title}
              description={caseStudy?.description}
              stacks={caseStudy?.stacks}
              link={caseStudy?.link}
              imgUrl={caseStudy?.imgUrl}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudiesSection;
