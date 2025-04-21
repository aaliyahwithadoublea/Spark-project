import React from "react";
import left from "../assets/Left-Img.webp";
import right from "../assets/Right-Img.webp";
import arrow from "../assets/arrow.png";
import "../styles/WebConsulting.css";
import { motion } from "framer-motion";

const WebConsulting = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-[70px] px-4 text-center relative w-screen py-10 smaller-screen h-auto"
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
        Web 3 consulting
      </button>
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-snug text-center">
        Revolutionize Your Operations <br /> with our Web3 Expertise
      </h3>{" "}
      <br />
      {/* Paragraph */}
      <p className="font-light mt-4">
        Comprehensive solutions for blockchain integration, <br /> smart
        contracts, and more.
      </p>{" "}
      <br />
      {/* CTA Button */}
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </button>
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
            zIndex: -1,
            width: "18rem",
          }}
        />
      </motion.section>
      {/* Right Image  */}
      <motion.section
        style={{
          padding: 0,
          margin: 0,
          width: "auto",
          height: "auto",
          overflow: "hidden",
        }}
        className="absolute bottom-0 -right-4 right-image"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={right}
          className="h-72 right-image "
          alt="right"
          style={{
            display: "block",
            position: "relative",
            left: 200,
            top: 0,
            height: "18rem",
            width: "18rem",
            zIndex: -1,
          }}
        />
      </motion.section>
    </div>
  );
};

export default WebConsulting;
