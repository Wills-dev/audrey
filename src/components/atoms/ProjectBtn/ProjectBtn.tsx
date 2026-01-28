const ProjectBtn = ({
  url,
  caption,
  className,
}: {
  url: string;
  caption: string;
  className: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} flex items-center gap-2 justify-center sm:h-14 h-12 sm:rounded-[14px] rounded-md max-sm:text-sm px-8 group text-white w-fit hover:opacity-90 duration-300 transition-all`}
    >
      {caption}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </a>
  );
};

export default ProjectBtn;
