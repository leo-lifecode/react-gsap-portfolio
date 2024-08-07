import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentProject from "./ContentProject";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project32 from "../assets/images/project32.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#section_1", {
      scrollTrigger: {
        trigger: "#section2",
        start: "+=100",
        scrub: 1,
      },
      y: 200,
    });
    gsap.from(
      ".text-project",
      {
        scrollTrigger: {
          trigger: "#section_1",
          start: "-=500",
        },
        y: 300,
        duration: 1,
        ease: "power3.inOut",
      },
      "+=1.5",
    );
    gsap.to("#section_1", {
      scrollTrigger: {
        trigger: "#lastProject",
        start: "center center",
        end: "bottom",
        scrub: 1,
      },
      scale: 0.95,
    });

    gsap.from(`.layoutlast`, {
      scrollTrigger: {
        trigger: "#lastProject",
        start: "-=400",
      },
      duration: 0.4,
      stagger: 0.01,
      left: "0%",
      ease: "power3.in",
    });
    gsap.set(`.layoutlast`, {
      scrollTrigger: {
        trigger: "#lastProject",
        start: "top",
      },
      delay: 0.45,
      visibility: "hidden",
      opacity: 0,
    });
  });

  return (
    <div
      id="section_1"
      className="relative z-[99] flex rounded-3xl bg-black px-[1.5rem] py-[3.5rem] sm:px-[4%] sm:py-[5%]"
    >
      <div className="w-full text-[#d1d1c7]">
        <div className="overflow-hidden font-neue text-[38px] font-bold uppercase leading-[1.2] sm:text-[84px] lg:text-[96px]">
          <div className="text-project border-b-2 border-white pb-2 sm:pb-3 lg:pb-6">
            My Project
          </div>
        </div>
        <ContentProject
          layouttext={"layouttext1"}
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
          layouttext={"layouttext2"}
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
          layouttext={"layouttext3"}
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
          layouttext={"layouttext4"}
          id="projectfour"
          link="https://todo-list-reactapp-three.vercel.app/"
          img={project4}
          brand="Tasks"
          name="Todo List"
          stylecustom=""
        >
          The Todo List project is a responsive React web app for managing
          tasks, featuring task categorization, due dates, and prioritization.
        </ContentProject>
        <div
          id="lastProject"
          className="grid grid-cols-12 items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]"
        >
          <div className="col-span-12 lg:col-span-5">
            <div className="relative w-fit overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]">
              <p id="textfive">NFT HOUSE</p>
              <div className="layoutlast"></div>
            </div>
            <div className="relative w-fit overflow-hidden text-[14px] text-gray-500 sm:text-[18px]">
              <a
                href="https://nft-house.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="textfive">https://nft-house.vercel.app</div>
              </a>
              <div className="layoutlast"></div>
            </div>
            <div className="relative my-[4px] flex w-fit gap-x-1 overflow-hidden text-[14px] font-medium sm:my-[12px] sm:text-[28px] lg:text-[24px] xl:gap-x-[12px] xl:text-[32px]">
              <div id="textfive">NFT</div>
              <div id="textfive">•</div>
              <div id="textfive">Front-end developer</div>
              <div className="layoutlast"></div>
            </div>
            <div>
              <div className="relative w-fit overflow-hidden text-[12px] sm:text-xl lg:text-[20px] xl:text-2xl">
                <p id="textfive">
                  NFT HOUSE is a responsive web slicing figma to HTML CSS and
                  JAVASCRIPT
                </p>
                <div className="layoutlast"></div>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 me-[-50%] w-fit overflow-hidden rounded-2xl border-2 border-white lg:col-span-7 lg:me-[-35%] xl:me-[-50%]">
            <a
              href="https://nfthouse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project5} className="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
