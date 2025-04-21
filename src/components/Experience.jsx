import exp1 from "../assets/Experience-1st.png";
import exp2 from "../assets/Experience-2nd.png";
import exp3 from "../assets/Experience-3rd.png";
import exp4 from "../assets/Experience-4th.png";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";

const Experience = () => {
  // Animation variants for boxes
  const boxVariantsLeft = {
    hidden: { opacity: 0, x: -100, y: -50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const boxVariantsRight = {
    hidden: { opacity: 0, x: 100, y: -50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[200px] px-4 text-center">
      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
        style={{
          backgroundColor: "#E1E1E1",
          borderRadius: "70px",
          paddingTop: "5px",
          paddingBottom: "5px",
          fontSize: "17px",
        }}
        className="px-4"
      >
        Experience
      </motion.button>

      {/* Heading */}
      <motion.h3
        className="text-[2.5rem] font-semibold mt-4 leading-snug"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        We have experience with
        <br />
        bringing results
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        className="font-light mt-4 text-[18px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        The numbers speak for us.
      </motion.p>

      {/* Experience Boxes */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {[exp1, exp2, exp3, exp4].map((img, index) => {
          const isLeft = index < 2;
          return (
            <motion.img
              key={index}
              src={img}
              alt={`Experience ${index + 1}`}
              className="h-52 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg"
              variants={isLeft ? boxVariantsLeft : boxVariantsRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            />
          );
        })}
      </div>

      {/* Contact Button */}
      <div className="flex items-center justify-center mt-10">
        <motion.button
          className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300"
          initial={{ rotate: -180, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Experience;
