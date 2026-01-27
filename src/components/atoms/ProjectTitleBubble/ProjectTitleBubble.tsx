const ProjectTitleBubble = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div
      className={`${className} h-[34px] rounded-full px-4 flex items-center justify-center text-center gap-2 border`}
    >
      <p className="text-center text-sm font-medium">{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </div>
  );
};

export default ProjectTitleBubble;
