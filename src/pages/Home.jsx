import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Results from "../components/Results";
import FAQ from "../components/FAQ";
import WebConsulting from "../components/WebConsulting";
import Innovators from "../components/innovators";
import Experience from "../components/experience";
import CaseStudies from "../components/CaseStudies";
import Team from "../components/Team";
import ClientSay from "../components/ClientSay";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-20"></div>
      <WebConsulting />
      <Innovators />
      <About />
      <Experience />
      <Services />
      <CaseStudies />
      <Results />
      <Team />
      <ClientSay />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
