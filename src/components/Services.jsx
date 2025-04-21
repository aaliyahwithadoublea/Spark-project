import exp1 from "../assets/Experience-1st.png";
import exp2 from "../assets/Experience-2nd.png";
import exp3 from "../assets/Experience-3rd.png";
import exp4 from "../assets/Experience-4th.png";
import arrow from "../assets/arrow.png";
import { sectionsData } from "../../utils/data";

const Services = () => {
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
        Services
      </button>
      {/* Heading */}
      <h3 className="text-[2.3rem] font-semibold mt-4 leading-snug">
        Ways How we can Help you
      </h3>
      {/* Paragraph */}
      <p className="font-light mt-4" style={{ fontSize: "18px" }}>
        Tailored solutions for your decentralized journey.
      </p>
      <br />
      <section className="px-1 md:px-12 lg:px-24 py-10 bg-transparent text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sectionsData.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 w-64"
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

export default Services;
