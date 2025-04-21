import exp1 from "../assets/Experience-1st.png";
import exp2 from "../assets/Experience-2nd.png";
import exp3 from "../assets/Experience-3rd.png";
import exp4 from "../assets/Experience-4th.png";
import arrow from "../assets/arrow.png";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[200px] px-4 text-center">
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
        Experience
      </button>

      {/* Heading */}
      <h3 className="text-[2.5rem] font-semibold mt-4 leading-snug">
        We have experience with
        <pre /> bringing results
      </h3>

      {/* Paragraph */}
      <p className="font-light mt-4" style={{ fontSize: "18px" }}>
        The numbers speak for us.
      </p>
      <br />

      <div className="flex flex-wrap justify-center gap-6 mt-6">
  {[exp1, exp2, exp3, exp4].map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Experience ${index + 1}`}
      className="h-52 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg"
    />
  ))}
</div>

      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </button>
      </div>
    </div>
  );
};

export default Experience;
