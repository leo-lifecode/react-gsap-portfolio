import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentProject from "./ContentProject";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project32 from "../assets/images/project32.png";
import project4 from "../assets/images/project4.png";
import { useRef } from "react";
import Lastproject from "./Lastproject";
const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const contaproject = useRef();

  useGSAP(() => {
    gsap.from(contaproject.current, {
      scrollTrigger: {
        trigger: "#section2",
        start: "+=100",
        scrub: 1,
      },
      y: 300,
    });
    gsap.from(
      ".text-project",
      {
        scrollTrigger: {
          trigger: contaproject.current,
          start: "-=400",
        },
        y: 300,

        duration: 0.9,
        ease: "power3.inOut",
      },
      "+=1.5",
    );
  });

  return (
    <div>
      <div
        ref={contaproject}
        id="section_1"
        className="relative z-[99] flex rounded-t-3xl bg-black px-[1.5rem] py-[3.5rem] sm:px-[4%] sm:py-[5%]"
      >
        <div className="w-full text-[#d1d1c7]">
          <div className="overflow-hidden font-neue text-[38px] font-bold uppercase leading-[1.2] sm:text-[84px] lg:text-[96px]">
            <div className="text-project border-b-2 border-white pb-2 sm:pb-3 lg:pb-6">
              My Project
            </div>
          </div>
          {/* <ContentProject
            text="projecttextone"
            id="projectone"
            link="https://shoply-tnbcommerce.vercel.app/"
            img={project1}
            brand="E-Commerce"
            name="SHOPLY TNB."
            stylecustom=""
          >
            Multi brand e-commerce design system for websites and mobile.
          </ContentProject>
          <ContentProject
            text="projecttexttwo"
            id="projecttwo"
            link=""
            img={project2}
            brand="Music"
            name="Musicly"
            stylecustom=""
          >
            music products with features like responsive design, intuitive
            navigation, and efficient product categorization
          </ContentProject>
          <ContentProject
            text="projecttextthree"
            id="projectthree"
            link="https://weather-app-reactweathr.vercel.app/"
            img={project32}
            brand="Weather"
            name="Weather app"
            stylecustom=""
          >
            The Weather App is a web application that delivers real-time weather
            updates.
          </ContentProject>
          <ContentProject
            text="projecttextfour"
            id="projectfour"
            link="https://todo-list-reactapp-three.vercel.app/"
            img={project4}
            brand="Tasks"
            name="Todo List"
            stylecustom=""
          >
            The Todo List project is a responsive React web app for managing
            tasks, featuring task categorization, due dates, and prioritization.
          </ContentProject> */}
        </div>
      </div>
      <Lastproject />
    </div>
  );
};

export default Project;
