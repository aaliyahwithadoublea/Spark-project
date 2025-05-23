import React, { useState } from "react";
import left from "../assets/Left-Img.png";
import right from "../assets/Right-Img.png";
import arrow from "../assets/arrow.png";
import accordionData from "../../utils/accordion";
import dropdownArrow from "../assets/dropdown-arrow.jpeg";
import { motion } from "framer-motion";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-center justify-center mt-[100px] px-4 text-center relative w-screen"
      id="faq"
      style={{ marginBottom: "37rem" }}
    >
      {/* Button */}
      <button
        style={{
          backgroundColor: "#E1E1E1",
          borderRadius: "70px",
          paddingTop: "5px",
          paddingBottom: "5px",
          fontSize: "17px",
        }}
        className="px-4"
      >
        FAQ
      </button>

      {/* Heading */}
      <h3 className="text-[2.5rem] font-bold mt-4 leading-snug">
        Have any Questions?
      </h3>

      {/* Paragraph */}
      <p className="font-light mt-4">Find the answers here.</p>

      {/* Accordion Section */}
      <div className="max-w-3xl mx-auto mt-20 relative z-30">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span>{item.title}</span>
              <img
                src={dropdownArrow}
                alt="Toggle"
                className={`h-4 w-4 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`mt-2 overflow-hidden transition-all duration-300 text-gray-600 text-sm ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pt-2">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Image */}
      <motion.section
        className="absolute top-0 left-0"
        style={{
          padding: 0,
          margin: 0,
          width: "auto",
          height: "auto",
          overflow: "hidden",
          zIndex: 10,
        }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={left}
          alt="left"
          style={{
            display: "block",
            position: "relative",
            left: -210,
            top: 0,
            height: "18rem",
            width: "18rem",
          }}
        />
      </motion.section>

      {/* Right Image */}
      <motion.section
        style={{
          padding: 0,
          margin: 0,
          width: "auto",
          height: "auto",
          // overflow: "hidden",
          zIndex: 10,
        }}
        className="absolute bottom-0 right-0 "
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={right}
          className="h-72 right-image"
          alt="right"
          style={{
            display: "block",
            position: "relative",
            left: 200,
            top: 0,
            height: "18rem",
            width: "18rem",
            // border:"2px solid orange"
          }}
        />
      </motion.section>
    </div>
  );
};

export default FAQ;
