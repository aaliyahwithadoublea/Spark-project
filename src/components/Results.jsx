import { resultData } from "../../utils/result";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";

const Results = () => {
  return (
    <div
      className="flex flex-col items-center justify-center -mt-[260px] px-4 text-center"
      id="results"
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
        Why us?
      </button>

      {/* Heading */}
      <motion.h3
        className="text-[2.5rem] font-semibold mt-4 leading-snug"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Unmatched Expertise <br /> and Proven Results
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        className="font-light mt-4"
        style={{ fontSize: "18px" }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        This is why we are the best.
      </motion.p>
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto z-10 relative">
          {resultData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm border shadow-md rounded-xl p-6 text-left"
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 100 : -100, // even: from below, odd: from above
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src={item.img} alt="icon" className="h-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.header}</h3>
              <p className="text-sm font-light whitespace-pre-line">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div className="flex items-center justify-center mt-10">
        <button
          className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300"
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default Results;
