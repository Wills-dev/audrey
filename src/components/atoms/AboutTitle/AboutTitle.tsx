import React from "react";
import Dot from "../Dot/Dot";

const AboutTitle = () => {
  return (
    <div className=" flex items-center gap-1">
      <h2 className="sm:text-[80px] text-[50px] special-font text-white p-0 leading-none mb-10">
        About Me
      </h2>
      <Dot />
    </div>
  );
};

export default AboutTitle;
