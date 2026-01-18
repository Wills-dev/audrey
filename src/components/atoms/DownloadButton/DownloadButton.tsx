import React from "react";

const DownloadButton = () => {
  return (
    <button className="bg-white sm:px-8 px-6 sm:h-14 h-12 rounded-full shadow-[0px_0px_0px_1px_#FFD16659] font-medium max-sm:text-sm hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      Download Resume
    </button>
  );
};

export default DownloadButton;
