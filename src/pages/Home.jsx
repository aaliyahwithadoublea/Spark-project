import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Results from "../components/Results";
import FAQ from "../components/FAQ";
import WebConsulting from "../components/WebConsulting";
import Innovators from "../components/innovators";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Spacer to avoid overlap with fixed navbar */}
      <div className="h-20"></div>
      <WebConsulting />
      <Innovators />
      <About />
      <Services />
      <Results />
      <FAQ />
    </div>
  );
};

export default Home;
