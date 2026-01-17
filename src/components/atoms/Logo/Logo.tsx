import Image from "next/image";

const Logo = () => {
  return (
    <a href="#home" className="cursor-pointer">
      <Image
        alt="logo"
        src="/logo.svg"
        width={85}
        height={32}
        className="w-[85px] object-contain"
      />
    </a>
  );
};

export default Logo;
