import React from "react";
import arrow from "../assets/arrow.png";
import right from "../assets/Right-Img.png";
import { caseData } from "../../utils/case";
import "../styles/CaseStudies.css";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section
      id="about"
      className="mt-28 ml-7 mr-6 flex flex-col md:flex-row justify-between smaller-screen relative w-screen gap-28 px-4 begin"
      style={{ marginBottom: "23rem" }}
    >
      {/* Left Side: Button & Text */}
      <div className="mb-8 md:mb-0 md:w-1/2">
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
          Case Studies
        </button>
        <motion.h3
          className="text-[2.5rem] font-bold mt-4 leading-snug big"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Proven Impact with <br /> our Web3 Solutions
        </motion.h3>
        <motion.p
          className="mt-4 small"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Discover how we've helped businesses scale
          <br /> and innovate with Web3 technology.
        </motion.p>
        <div className="flex justify-center md:justify-start mt-6">
          <motion.button
            className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300 btn"
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Contact us
            <img src={arrow} alt="arrow" className="h-5" />
          </motion.button>
        </div>
      </div>

      {/* Right Side: Image */}
      <section
        style={{
          padding: 0,
          margin: 0,
          width: "auto",
          height: "auto",
          overflow: "hidden",
        }}
        className="absolute bottom-0 right-8 little"
      >
        <img
          src={right}
          className="h-72 right-image little"
          alt="right"
          style={{
            display: "block",
            position: "relative",
            left: 240,
            top: 0,
            height: "18rem",
            width: "18rem",
            zIndex: -1,
          }}
        />
      </section>

      {/* Case Study Boxes */}
      <div className="w-full">
        <div className="flex flex-col gap-6 w-11/12 max-w-xl front">
          {caseData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F7F7F7]/70 backdrop-blur-sm p-6 rounded-xl shadow-md border "
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 100 : -100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.2,
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src={item.img}
                alt="brand"
                className="h-6 mb-4 mx-auto position"
              />
              <h3 className="text-lg font-semibold mb-2">{item.header}</h3>
              <p className="font-light whitespace-pre-line">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
