import Image from "next/image";

const BuilDoveWrapper = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Image
        src="/assets/images/builDove2.jpg"
        width={1815}
        height={61393}
        alt="buil-dove"
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
};

export default BuilDoveWrapper;
