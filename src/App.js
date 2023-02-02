import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home />
        <SocialLinks/>
        <About />
        <Portfolio/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
