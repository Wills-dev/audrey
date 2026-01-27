import React from "react";

const ProjectBigHeader = ({
  title,
  lineColor,
}: {
  title: string;
  lineColor: string;
}) => {
  return (
    <div className="max-w-[436px] w-full space-y-2">
      <h6 className="sm:text-[60px] text-[45px] text-[#0F172B] font-bold leading-tight">
        {title}
      </h6>
      <div className={`w-20 min-w-20 h-1.5 rounded-full ${lineColor}`} />
    </div>
  );
};

export default ProjectBigHeader;
