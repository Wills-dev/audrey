import Image from "next/image";

const AlmaWrapper = () => {
  return (
    <div className="min-h-screen w-full">
      <Image
        src="/assets/images/alma-page.svg"
        width={1815}
        height={61393}
        alt="alma"
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
};

export default AlmaWrapper;
