import React from "react";
import arrow from "../assets/arrow.png";
import right from "../assets/Right-Img.png";
import { caseData } from "../../utils/case";

const CaseStudies = () => {
  return (
    <section
      id="about"
      className=" mt-28 ml-7 mr-6"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
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
        <br />
        <h3 className="text-[2.5rem] font-bold mt-4 leading-snug">
          Proven Impact with <pre /> our Web3 Solutions
        </h3>
        <br />
        <p>
          Discover how we've helped businesses scale and innovate <pre /> with
          Web3 technology.
        </p>
        <div className="flex  mt-6">
          <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
            Contact us
            <img src={arrow} alt="arrow" className="h-5" />
          </button>
        </div>
      </div>

          {/* Right Side */}
      <div>
        <section
          style={{
            display: "block",
            position: "relative",
            left: "520px",
          }}
        >
          <img src={right} className="h-72" alt="right" />
        </section>

        {/* BOXES*/}
         <div className="flex flex-col gap-6 w-full max-w-2xl" style={{position:"relative", top:"-420px"}}>
        {caseData.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7]/70 backdrop-blur-sm p-6 rounded-xl shadow-md border flex flex-col"

          >
            <img src={item.img} alt="brand" className="h-6 mb-4"  style={{paddingRight:"375px"}}/>
            <h3 className="text-lg font-semibold mb-2">{item.header}</h3>
            <p className=" font-light whitespace-pre-line" >
              {item.content}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CaseStudies;
