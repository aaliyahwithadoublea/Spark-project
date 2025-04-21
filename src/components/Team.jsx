import React from "react";
import arrow from "../assets/arrow.png";
import { teamData } from "../../utils/team";
import socials from "../assets/social.png";
import twitterLogo from "../assets/x.jpeg";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[200px] px-4 text-center bg-[#F8F8F6]">
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
        Our team
      </button>
      {/* Heading */}
      <h3 className="text-[2.3rem] font-semibold mt-4 leading-snug">
        Meet our Team
      </h3>
      {/* Paragraph */}
      <p className="font-light mt-4" style={{ fontSize: "18px" }}>
        A squad of web3 professionals ready to <pre /> help you transform your
        business.
      </p>
      <br />
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamData.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border rounded-xl shadow-md p-4 flex gap-4 items-start h-70 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:scale-[1.01]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-44 w-56  object-contain rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold py-5">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 mb-2 whitespace-pre-line">
                    {item.about}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={item.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={twitterLogo}
                        alt="Twitter"
                        className="h-6 w-6 hover:opacity-80 transition"
                      />
                    </a>
                    <a
                      href={item.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={socials}
                        alt="LinkedIn"
                        className="h-6 w-6 hover:opacity-80 transition"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </button>
      </div>
      <br /> <br /> <br />
    </div>
  );
};

export default Team;
