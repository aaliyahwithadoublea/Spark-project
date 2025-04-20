import exp1 from "../assets/Experience-1st.png";
import exp2 from "../assets/Experience-2nd.png";
import exp3 from "../assets/Experience-3rd.png";
import exp4 from "../assets/Experience-4th.png";

const Services = () => {
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <img src={exp1} className="h-52" />
        <img src={exp2} className="h-52" />
        <img src={exp3} className="h-52" />
        <img src={exp4} className="h-52" />
      </div>
    </div>
  );
};

export default Services;
