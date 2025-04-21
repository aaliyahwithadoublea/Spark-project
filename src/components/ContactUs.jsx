import React from 'react';
import button from "../assets/button.png";

const ContactUs = () => {
    return (
        <div style={{backgroundColor: "#3A3D32"}} className="flex flex-col items-center justify-center -mt-[600px] px-4 text-center h-96 w-auto rounded-2xl">
          <button
                    style={{
                      backgroundColor: "#E1E1E1",
                      borderRadius: "70px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontSize: "17px",
                      opacity: "0.5",
                    }}
                    className="px-4"
                  >
                    Contact us
                  </button>
                  
                  {/* Heading */}
                  <h3 className="text-[2.5rem] font-semibold mt-4 leading-snug" style={{color:"#fff"}}>
                  Let's Scale your Business
                  </h3>
            
                  {/* Paragraph */}
                  <p className="font-light mt-4" style={{ fontSize: "18px",color:"#fff" }}>
                  Discover how we can help your business grow.
                  </p>
                  <br />
                   {/* CTA Button */}
                        <div className="flex items-center justify-center mt-6">
                          <button className="bg-[#fff] hover:bg-[#E3E4DE] h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300" style={{color:"#1D1F13"}}>
                            Contact us
                            <img src={button} alt="arrow" className="h-6" />
                          </button>
                        </div>
                  
        </div>
    );
};

export default ContactUs;