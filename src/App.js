import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
export default App;
