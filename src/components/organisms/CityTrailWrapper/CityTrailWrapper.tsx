import Image from "next/image";

const CityTrailWrapper = () => {
  return (
    <div className="min-h-screen w-full">
      <Image
        src="/assets/images/CityTrail.png"
        width={1815}
        height={76444}
        alt="city-trail"
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
};

export default CityTrailWrapper;
