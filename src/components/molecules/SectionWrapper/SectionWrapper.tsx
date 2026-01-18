import Container from "@/components/atoms/Container/Container";

const SectionWrapper = ({
  bgColor = "bg-[#FDFCFB]",
  id,
  children,
}: {
  bgColor?: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`sm:py-28 py-16 w-full ${bgColor}`} id={id}>
      <Container>{children}</Container>
    </div>
  );
};

export default SectionWrapper;
