const Dot = ({ bgColor = "bg-[#FFD166]" }: { bgColor?: string }) => {
  return <div className={`w-2 h-2 rounded-full ${bgColor}`} />;
};

export default Dot;
