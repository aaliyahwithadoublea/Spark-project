import React, { useState } from "react";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import hamburgerIcon from "../assets/hamburger.png";
import closeIcon from "../assets/close-btn.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-center items-center">
      <nav
        className="
    fixed top-3 
    left-3 lg:left-1/2 
    lg:-translate-x-1/2 
    w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[60vw] 
    bg-[#F8F8F6] z-50 h-[70px] rounded-full border 
    border-[#F8F8F6] px-4
  "
      >
        <div className="flex justify-between items-center h-full lg:gap-x-16">
          {/* Logo */}
          <img src={logo} className="h-6 w-16" alt="Logo" />

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-12 text-black font-semibold items-center">
            <li>
              <a href="#about" className="hover:text-[#AED317]">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#AED317]">
                Services
              </a>
            </li>
            <li>
              <a href="#results" className="hover:text-[#AED317]">
                Results
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#AED317]">
                FAQ
              </a>
            </li>
            <li>
              <button className="bg-[#D9F273] hover:bg-brandGreen h-8 flex items-center gap-2 px-4 -full rounded-full border transition-colors duration-300">
                Get template
                <img src={arrow} alt="arrow" className="h-5" />
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <img
              src={isMenuOpen ? closeIcon : hamburgerIcon}
              alt="menu icon"
              className="h-6 w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-[80px] left-0 w-full bg-[#F8F8F6] p-6 z-40 "
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <ul className="flex flex-col space-y-4 text-black font-semibold">
                <li>
                  <a
                    href="#about"
                    onClick={toggleMenu}
                    className="hover:text-[#AED317]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={toggleMenu}
                    className="hover:text-[#AED317]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#results"
                    onClick={toggleMenu}
                    className="hover:text-[#AED317]"
                  >
                    Results
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={toggleMenu}
                    className="hover:text-[#AED317]"
                  >
                    FAQ
                  </a>
                </li>
                <li className="pt-4">
                  <button
                    onClick={toggleMenu}
                    className="bg-[#D9F273] hover:bg-brandGreen h-10 w-full flex items-center justify-center gap-2 px-4 rounded-full border transition-colors duration-300"
                  >
                    Get template
                    <img src={arrow} alt="arrow" className="h-5" />
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
