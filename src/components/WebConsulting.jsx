import React from 'react';
import left from '../assets/Left-Img.png';
import right from '../assets/Right-Img.png';
import arrow from '../assets/arrow.png';

const WebConsulting = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] px-4 text-center">
      {/* Button */}
      <button
        style={{
          backgroundColor: '#E1E1E1',
          borderRadius: '70px',
          paddingTop: '5px',
          paddingBottom: '5px',
          fontSize: '17px',
        }}
        className="px-4"
      >
        Web 3 consulting
      </button>

      {/* Heading */}
      <h3 className="text-[2.5rem] font-bold mt-4 leading-snug">
        Revolutionize Your Operations <br /> with our Web3 Expertise
      </h3>

      {/* Paragraph */}
      <p className="font-light mt-4">
        Comprehensive solutions for blockchain integration, <br /> smart contracts, and more.
      </p>

      {/* CTA Button */}
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </button>
      </div>


      <div className=" mt-6" style={{display:"block", position:"relative", top:"80px", left:"570px", overflow:"hidden"}}>
        <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-9 rounded-full border transition-colors duration-300">
          Get Template
        </button>
      </div>

      {/* Left Image */}
      <section
        style={{
          display: 'block',
          position: 'relative',
          right: '675px',
          top: '-470px',
        }}
      >
        <img src={left} className="h-72" alt="left" />
      </section>

      {/* Right Image  */}
      <section
        style={{
          display: 'block',
          position: 'relative',
          left: '680px',
          top: '-700px',
        }}
      >
        <img src={right} className="h-72" alt="right" />
      </section>
    </div>
  );
};

export default WebConsulting;
