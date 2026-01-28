const ProjectToolCard = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div
      className={`${className} font-medium sm:text-sm text-xs sm:rounded-[14px] rounded-md px-4 sm:h-11 h-8 flex justify-center items-center text-center`}
    >
      {title}
    </div>
  );
};

export default ProjectToolCard;
