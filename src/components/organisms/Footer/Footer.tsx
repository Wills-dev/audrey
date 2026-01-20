const Footer = () => {
  const otherLinks = [
    { label: "Back to Top", link: "#top" },
    { label: "Casestudies", link: "#casestudies" },
    { label: "Projects", link: "#projects" },
  ];
  return (
    <footer className="bg-[#0F0B1A] sm:pt-28 pt-16 w-full">
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[1184px] w-full space-y-6">
          <div className="flex flex-col justify-center items-center gap-6">
            <h6 className="text-[#FFD166] special-font sm:text-[36px] text-2xl font-bold">
              Audrey<span className="text-[#FFFFFF]">Oji</span>
            </h6>
            <div className="flex justify-center">
              <div className="max-w-[445px] w-full text-white/50 max-sm:text-sm text-center">
                Senior Product Designer crafting thoughtful, systems-driven
                digital experiences.
              </div>
            </div>
            <div className="flex flex-wrap justiffy-center items-center gap-4">
              {otherLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.link}
                  className="sm:text-sm text-xs uppercase special-font text-white/60 hover:text-pink-300 duration-300 transition-all"
                >
                  {link?.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-[#FFFFFF1A] py-6">
            <p className="text-center text-[#FFFFFF66] sm:text-sm text-xs">
              © 2026 Audrey Oji. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
