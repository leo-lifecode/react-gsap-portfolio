import gsap from "gsap";
import { useRef, useState } from "react";
import "./App.css";
import Overlay from "./components/Overlay";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import TextSpllitOpacity1 from "./components/TextsplitOpacity";

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
      <section id="section2">aboutme</section>
      <section id="section3">project</section>
      <section id="section4">Contact</section>
      <div id="section5">footer</div>
    </div>
  );
}

export default App;
