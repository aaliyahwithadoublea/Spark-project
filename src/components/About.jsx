import about from "../assets/About-us.png";
import arrow from "../assets/arrow.png";
import "../styles/About.css";

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
          Transforming <pre /> Business with Web3 <pre />
          Technology
        </h3>
        <br />
        <p>
          At Spark, we specialize in providing cutting-edge Web3 consulting{" "}
          <pre /> services to help businesses navigate the complexities of{" "}
          <pre />
          decentralized technologies.
        </p>
        <div className="flex mt-6 justify-center md:justify-start">
          <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
            Contact us
            <img src={arrow} alt="arrow" className="h-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <img src={about} className="h-96 w-full picture" />
      </div>
    </section>
  );
};

export default About;
