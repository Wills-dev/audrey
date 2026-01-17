"use client";

import { motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";
import NavWrapper from "@/components/molecules/NavWrapper/NavWrapper";
import LetsTalkButton from "@/components/atoms/LetsTalkButton/LetsTalkButton";

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 min-h-screen h-full max-w-sm w-full right-0 bg-[#1F1535F2]/95 backdrop-blur-2xl lg:hidden z-10`}
    >
      <Container>
        <div className="py-8 space-y-4  h-screen flex flex-col">
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-white">
              <motion.span
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </motion.span>
            </button>
          </div>
          <div className="flex flex-col justify-between gap-10 flex-1 pb-20">
            <NavWrapper />
            <LetsTalkButton />
          </div>
        </div>
      </Container>
    </motion.aside>
  );
};

export default Sidebar;
