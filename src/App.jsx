import gsap from "gsap";
import { useRef, useState } from "react";
import "./App.css";
import Overlay from "./components/Overlay";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import TextSpllitOpacity1 from "./components/TextsplitOpacity";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Footer from "./components/footer";

function App() {
  const [time, setTime] = useState(gsap.timeline());
  return (
    <div id="body" className="m-auto w-full max-w-[1440px] overflow-hidden">
      <Overlay time={time} />
      <section id="section1" className="flex flex-col">
        <Navbar time={time} />
        <Homepage time={time} />
      </section>
      <TextSpllitOpacity1 />
      <section id="section2">
        <AboutMe />
      </section>
      <section id="section3">project</section>
      <section id="section4">
        <Contacts />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
