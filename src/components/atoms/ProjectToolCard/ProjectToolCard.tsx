const ProjectToolCard = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div
      className={`${className} font-medium sm:text-sm rounded-[14px] px-4 h-11 flex justify-center items-center text-center`}
    >
      {title}
    </div>
  );
};

export default ProjectToolCard;
