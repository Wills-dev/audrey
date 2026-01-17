"use client";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";
import LetsTalkButton from "@/components/atoms/LetsTalkButton/LetsTalkButton";
import Logo from "@/components/atoms/Logo/Logo";
import NavWrapper from "@/components/molecules/NavWrapper/NavWrapper";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <div className="">
      <header className="w-full bg-[#1F1535F2]/95 py-4 backdrop-blur-2xl border border-white/5">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center gap-6">
              <div className="max-lg:hidden">
                <NavWrapper />
              </div>
              <button
                onClick={toggleSidebar}
                className="lg:hidden block text-white/70 hover:text-white transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  {showSidebar ? (
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
                  ) : (
                    <motion.span
                      key="menu"
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
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <LetsTalkButton />
            </div>
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
