const InitialDisplay = ({
  className,
  initial,
}: {
  className: string;
  initial: string;
}) => {
  return (
    <div
      className={`w-16 h-16 rounded-2xl flex justify-center items-center ${className}`}
    >
      <p className="font-bold text-[30px] text-white">{initial}</p>
    </div>
  );
};

export default InitialDisplay;
