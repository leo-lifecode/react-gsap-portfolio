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
import Project from "./components/Project";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EndLast from "./components/EndLast";

function App() {
  const [time, setTime] = useState(gsap.timeline());
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#section2",
      start: "center",
      end:"+=800",
      pin: true,
      scrub: 1.5,
      duration: 1,
      pinSpacing: false,
      markers: true,
    });
  });
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
      <div id="section3" className="">
        <Project />
        <EndLast />
      </div>
      <section id="section4" className="mt-[320px]">
        <Contacts />
      </section>
      <div id="section5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
