import about from "../assets/About-us.png";
import arrow from "../assets/arrow.png";
import "../styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="mt-28 ml-6 mr-6 flex flex-col items-center md:flex-row justify-between px-5"
    >
      <div className="text-center md:text-left">
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
          About us
        </button>
        <br />
        <h3 className="text-[2.5rem] font-bold mt-4 leading-snug">
          Transforming <br /> Business with Web3 <br />
          Technology
        </h3>
        <br />
        <p>
          At Spark, we specialize in providing cutting-edge Web3 consulting{" "}
          <br /> services to help businesses navigate the complexities of <br />
          decentralized technologies.
        </p>
        <div className="flex mt-6 justify-center md:justify-start">
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
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <motion.img
          src={about}
          className="h-96 w-full picture"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 8,
            delay: 0.6,
          }}
          viewport={{ once: false, amount: 0.2 }}
        />
      </div>
    </section>
  );
};

export default About;
