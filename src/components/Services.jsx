import exp1 from "../assets/Experience-1st.png";
import exp2 from "../assets/Experience-2nd.png";
import exp3 from "../assets/Experience-3rd.png";
import exp4 from "../assets/Experience-4th.png";
import arrow from "../assets/arrow.png";
import { sectionsData } from "../../utils/data";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-28 px-5 text-center bg-[#F8F8F6] " style={{width:"100%"}} id="services">
      {/* Button */}
      <button className="bg-[#E1E1E1] rounded-full px-4 py-1 text-sm md:text-base mt-2">
        Services
      </button>

      {/* Heading */}
      <h3 className="text-[1.8rem] md:text-[2.3rem] font-semibold mt-4 leading-snug">
        Ways How we can Help you
      </h3>

      {/* Paragraph */}
      <p className="font-light mt-4 text-[16px] md:text-[18px] max-w-xl">
        Tailored solutions for your decentralized journey.
      </p>

      {/* Service Cards */}
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

      {/* CTA Button */}
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#D9F273] hover:bg-brandGreen text-sm md:text-base h-10 flex items-center gap-2 px-6 py-2 rounded-full border transition-colors duration-300">
          Contact us
          <img src={arrow} alt="arrow" className="h-4 md:h-5" />
        </button>
      </div>

      <div className="h-20 md:h-28" /> {/* Spacer */}
    </div>
  );
};

export default Services;
