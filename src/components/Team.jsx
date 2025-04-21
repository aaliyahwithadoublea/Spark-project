import React from "react";
import arrow from "../assets/arrow.png";
import { teamData } from "../../utils/team";
import socials from "../assets/social.png";
import twitterLogo from "../assets/x.jpeg";
import { motion } from "framer-motion";

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
      <motion.h3
        className="text-[2.3rem] font-semibold mt-4 leading-snug"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Meet our Team
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        className="font-light mt-4"
        style={{ fontSize: "18px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        A squad of web3 professionals ready to help you transform your business.
      </motion.p>
      <br />

      {/* Team Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border rounded-xl shadow-md p-4 flex flex-col lg:flex-row gap-6 items-start h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:scale-[1.01]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Image on the left (on large screens) */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-44 w-full sm:w-56 lg:w-44 object-contain rounded-md"
                />

                {/* Content on the right */}
                <div className="flex flex-col flex-1 text-left">
                  <h3 className="text-xl font-semibold py-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 whitespace-pre-line overflow-hidden text-ellipsis">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <motion.div className="flex items-center justify-center mt-6">
      <motion.button
          className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300"
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
      </motion.div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
};

export default Team;
