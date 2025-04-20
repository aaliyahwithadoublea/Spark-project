import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">

<nav className="fixed top-3 w-auto bg-[#F8F8F6] z-10 h-[70px] rounded-full border border-[#F8F8F6]">
  <ul className="flex justify-center space-x-20 p-4 text-black-700 font-semibold items-start">
    
    {/* Logo */}
    <div>
      <img src={logo} className="h-6 w-16" alt="Logo" />
    </div>
    
    
    {/* Nav Links */}
    <div style={{display:"flex", justifyContent:"space-between", gap:"30px"}}>
    <li>
      <a href="#about" className="hover:text-[#AED317]">About</a>
    </li>
    <li>
      <a href="#services" className="hover:text-[#AED317]">Services</a>
    </li>
    <li>
      <a href="#results" className="hover:text-[#AED317]">Results</a>
    </li>
    <li>
      <a href="#faq" className="hover:text-[#AED317]">FAQ</a>
    </li>
    </div>

    {/* Button */}
    <div className="flex items-center justify-between -mt-2" >
      <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
        Get template
        <img src={arrow} alt="arrow" className="h-5" />
      </button>
    </div>

  </ul>
</nav>

    </div>
  );
};

export default Navbar;
