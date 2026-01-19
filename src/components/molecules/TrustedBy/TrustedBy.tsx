const TrustedBy = () => {
  const companies = [
    "Spotify",
    "Stripe",
    "Zoom",
    "Atlassian",
    "Notion",
    "Linear",
    "Microsoft",
    "Google",
  ];

  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-[81px] max-sm:px-6 w-full sm:space-y-24 space-y-16">
      <h4 className="text-center special-font sm:text-[60px] text-[35px] text-white">
        Trusted By Teams At
      </h4>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10">
        {companies?.map((company) => (
          <p
            key={company}
            className="text-white/30 sm:text-[24px] text-lg font-bold special-font text-center"
          >
            {company}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
