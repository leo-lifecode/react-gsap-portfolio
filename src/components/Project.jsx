import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
          markers: true,
        },
        y: 300,
        duration: 1.4,
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
        <div className="overflow-hidden border border-black font-neue text-[96px] font-bold uppercase leading-[1.2]">
          <div className="text-project">My Project</div>
        </div>
        <div className="mt-[100px] flex items-center justify-between overflow-hidden bg-yellow-500">
          <div className="">
            <div>name</div>
          </div>
          <div className=" flex items-center overflow-hidden rounded-2xl border-2 border-black me-[-20%]">
            <img src={project1} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
