import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentProject from "./ContentProject";
import project1 from "../assets/images/project1.png";

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#section_1", {
      scrollTrigger: {
        trigger: "#section2",
        start: "+=100",
        scrub: 0.5,
      },
      y: 300,
    });
    gsap.from(
      ".text-project",
      {
        scrollTrigger: {
          trigger: "#section_1",
          start: "-=500",
        },
        y: 300,
        duration: 0.9,
        ease: "power3.inOut",
      },
      "+=1.5",
    );
  });
  return (
    <div
      id="section_1"
      className="relative z-[99] flex rounded-t-3xl bg-black px-[1.5rem] py-[3.5rem] sm:px-[4%] sm:py-[5%]"
    >
      <div className="w-full text-[#d1d1c7]">
        <div className="overflow-hidden font-neue text-[38px] sm:text-[84px] lg:text-[96px] font-bold uppercase leading-[1.2]">
          <div className="text-project border-b-2 border-white pb-2 sm:pb-3 lg:pb-6">
            My Project
          </div>
        </div>
        <ContentProject
          link="https://shoply-tnbcommerce.vercel.app/"
          img={project1}
          brand="E-Commerce"
          name="SHOPLY TNB."
          stylecustom=""
        >
          Multi brand e-commerce design system for websites and mobile.
        </ContentProject>
      </div>
    </div>
  );
};

export default Project;
