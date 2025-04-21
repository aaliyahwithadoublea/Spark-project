import exp1 from "../assets/Experience-1st.png";
import exp2 from "../assets/Experience-2nd.png";
import exp3 from "../assets/Experience-3rd.png";
import exp4 from "../assets/Experience-4th.png";
import arrow from "../assets/arrow.png";
import { sectionsData } from "../../utils/data";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-28 px-5 text-center bg-[#F8F8F6]"
      style={{ width: "100%" }}
      id="services"
    >
      {/* Animated Button */}
      <motion.button
        className="bg-[#E1E1E1] rounded-full px-4 py-1 text-sm md:text-base mt-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Services
      </motion.button>

      {/* Animated Heading */}
      <motion.h3
        className="text-[1.8rem] md:text-[2.3rem] font-semibold mt-4 leading-snug"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Ways How we can Help you
      </motion.h3>

      {/* Animated Paragraph */}
      <motion.p
        className="font-light mt-4 text-[16px] md:text-[18px] max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Tailored solutions for your decentralized journey.
      </motion.p>

      {/* Service Cards (No animation here) */}
      <section className="w-full px-4 md:px-12 lg:px-24 py-10 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {sectionsData.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 w-full max-w-[300px] hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.header}</h3>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <button className="text-brandGreen font-medium hover:underline">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Animated CTA Button */}
      <div className="flex items-center justify-center mt-6">
        <motion.button
          className="bg-[#D9F273] hover:bg-brandGreen text-sm md:text-base h-10 flex items-center gap-2 px-6 py-2 rounded-full border transition-colors duration-300"
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
          <img src={arrow} alt="arrow" className="h-4 md:h-5" />
        </motion.button>
      </div>

      <div className="h-20 md:h-28" /> {/* Spacer */}
    </div>
  );
};

export default Services;
