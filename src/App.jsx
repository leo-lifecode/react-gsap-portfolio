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

function App() {
  const sectproject = useRef();
  const time = useRef(gsap.timeline());
  const secthelotest = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#section2",
      start: "center",
      pin: true,
      scrub: 1.5,
      duration: 1,
      pinSpacing: false,
    });

    gsap.to(secthelotest.current, {
      scrollTrigger: {
        trigger: secthelotest.current,
        start: "top",
        end: "bottom",
        markers: true,
      },
      y: 200,
    });
  });
  return (
    <div id="body" className="m-auto w-full max-w-[1440px] overflow-hidden">
      <Overlay time={time.current} />
      <section id="section1" className="flex flex-col">
        <Navbar time={time.current} />
        <Homepage time={time.current} />
      </section>
      <TextSpllitOpacity1 />
      <section id="section2">
        <AboutMe />
      </section>
      <div id="section3" className="mt-[100px]" ref={sectproject}>
        <Project />
        <div className="h-[100px] w-[100px] bg-green-400" ref={secthelotest}>
          hello
        </div>
      </div>
      <section id="section4">
        <Contacts />
      </section>
      <div id="section5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
