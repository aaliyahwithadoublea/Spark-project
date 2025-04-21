import { resultData } from "../../utils/result";
import arrow from "../assets/arrow.png";

const Results = () => {
    return (
       <div className="flex flex-col items-center justify-center -mt-[260px] px-4 text-center" id="results">
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
           <h3 className="text-[2.5rem] font-semibold mt-4 leading-snug">
           Unmatched Expertise <pre /> and Proven Results
           </h3>
     
           {/* Paragraph */}
           <p className="font-light mt-4" style={{ fontSize: "18px" }}>
           This is why we are the best.
           </p>
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
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm border shadow-md rounded-xl p-6 text-left"
          >
            <img src={item.img} alt="icon" className="h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.header}</h3>
            <p className="text-sm font-light whitespace-pre-line">
              {item.content}
            </p>
          </div>
        ))}
      </div>

             
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
  
  export default Results;
  