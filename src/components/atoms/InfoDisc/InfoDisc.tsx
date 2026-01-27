const InfoDisc = ({
  caption,
  value,
  end,
}: {
  caption: string;
  value: string;
  end?: boolean;
}) => {
  return (
    <div className={`${end ? "flex flex-col items-end" : ""} space-y-1`}>
      <h6 className="text-sm text-[#62748E]">{caption}</h6>
      <p className="font-bold text-[#0F172B] text-xl">{value}</p>
    </div>
  );
};

export default InfoDisc;
