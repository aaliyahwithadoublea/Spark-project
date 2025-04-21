import React from "react";
import spark from "../assets/spark.png";
import instagram from "../assets/Instagram.svg";
import tiktok from "../assets/Tiktok.svg";
import linkedln from "../assets/LinkedIn.svg";
import youtube from "../assets/Youtube.svg";
import twitter from "../assets/Twitter.svg";

const Footer = () => {
  return (
    <>
      <hr className="mt-20 border-gray-300" />

      {/* Logo & Socials */}
      <div className="flex justify-between items-center px-5 mt-12 gap-4 flex-wrap">
        <img src={spark} alt="Spark Logo" />

        <div className="flex gap-4 pr-12">
          <img src={instagram} className="h-4" alt="Instagram" />
          <img src={tiktok} className="h-4" alt="Tiktok" />
          <img src={linkedln} className="h-4" alt="LinkedIn" />
          <img src={youtube} className="h-4" alt="YouTube" />
          <img src={twitter} className="h-4" alt="Twitter" />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 px-4 mt-5 font-light text-sm list-none flex-wrap">
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
      </ul>

      <hr className="my-6 mx-auto w-[60rem] border-gray-300" />

      {/* Bottom Section */}
      <div className="flex justify-between items-center px-5 text-sm font-light flex-wrap gap-4">
        <p>© 2024 Spark Template</p>

        <div className="flex gap-4 pr-12">
          <p>Made by Sebadam</p>
          <p>Built in Framer</p>
        </div>
      </div>

      <br />
    </>
  );
};

export default Footer;
