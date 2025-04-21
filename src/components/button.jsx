import React from "react";

const Button = () => {
  return (
    <div className="flex items-center justify-between -mt-2">
      <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
        Get template
        <img src={arrow} alt="arrow" className="h-5" />
      </button>
    </div>
  );
};

export default Button;
