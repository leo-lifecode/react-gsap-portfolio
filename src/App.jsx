import gsap from "gsap";
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
  const [time, setTime] = useState(gsap.timeline());
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
      <div id="section3" className="mt-[100px]">
        <Project />
      </div>
      <section id="section4" className="">
        <Contacts />
      </section>
      <div id="section5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
