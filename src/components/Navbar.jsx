import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import humburger from "../assets/Icon.svg";
import { useState, useRef } from "react";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import closesvg from "../assets/close.svg";
import lnkdn from "../assets/lnkdn.svg";
import ig from "../assets/ig.svg";
import gthb from "../assets/gthb.svg";
const Navbar = ({ time }) => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  const [nav, setnav] = useState("hidden");
  const navbar = useRef();

  const handlegsapscroll = (index) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `${index}`,
        offset: 70,
      },
    });
  };
  const HandleNav = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#containernav",
      { width: "0", duration: 0.3, display: "none" },
      { width: "95%", display: "flex", duration: 0.5 },
    );
    tl.fromTo(
      "li",
      {
        duration: 0.6,
        opacity: 0,
        backgroundColor: "white",

        y: 300,
        stagger: 0.08,
        ease: "power4.inOut",
      },
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: "power4.inOut",
      },
    );
    tl.fromTo(
      ".iconnav",
      {
        duration: 0.4,
        opacity: 0,
        y: 0,
        ease: "power4.out",
      },
      {
        duration: 0.4,
        opacity: 1,
        y: -20,
        ease: "power4.out",
      },
    );
    tl.fromTo(
      ".iconsosmed",
      {
        duration: 0.4,
        opacity: 0,
        y: 0,
        ease: "power3.out",
      },
      {
        duration: 0.4,
        opacity: 1,
        y: 20,
        ease: "power3.out",
      },
      "<",
    );
  };

  const handleclosenav = () => {
    const tl = gsap.timeline();

    // tl.fromTo(
    //   "#containernav",
    //   { width: "0", duration: 0.3, display: "none" },
    //   { width: "95%", display: "flex", duration: 0.5 },
    // );
    tl.fromTo(
      "li",
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: "power4.inOut",
      },
      {
        duration: 0.6,
        opacity: 0,
        y: -300,
        stagger: 0.08,
        ease: "power4.inOut",
      },
    );
    tl.fromTo(
      ".iconnav",
      {
        duration: 0.4,
        opacity: 1,
        y: -20,
        ease: "power4.out",
      },
      {
        duration: 0.4,
        opacity: 0,
        y: 0,
        ease: "power4.out",
      },
    );
    tl.fromTo(
      ".iconsosmed",
      {
        duration: 0.4,
        opacity: 1,
        y: 20,
        ease: "power3.out",
      },
      {
        duration: 0.4,
        opacity: 0,
        y: 0,
        ease: "power3.out",
      },
      "<",
    );
    tl.to("#containernav", { width: "0", duration: 0.3, display: "none" });
  };

  useGSAP(() => {
    time.from(
      ".nav",
      {
        y: -200,
        duration: 0.4,
        ease: "power2.out",
      },
      "+=0.8",
    );
    //   const t = gsap
    //     .to(link, {
    //       backgroundSize: "100%"
    //     })
    //     .reverse();
    //   link.addEventListener("mouseenter", () => t.reversed(!t.reversed()));
    //   link.addEventListener("mouseleave", () => t.reversed(!t.reversed()));
    // });
  });
  const mouseenter = (e) => {
    gsap.to(e.target, {
      backgroundSize: "100%",
    });
  };
  const mouseleave = (e) => {
    gsap.to(e.target, {
      backgroundSize: "0%",
    });
  };

  return (
    <div className="z-[999] flex w-full cursor-pointer items-center justify-between px-8 pt-[8px] sm:px-4">
      <div className="logonama nav font-uiBold text-[32px] font-semibold sm:text-[24px] md:text-[32px]">
        RIZAL
      </div>
      <img
        src={humburger}
        alt=""
        onClick={HandleNav}
        className="nav rounded-[20px] bg-black p-[10px] brightness-200 sm:hidden"
      />
      <ul
        ref={navbar}
        id="containernav"
        className={`nav ${nav} fixed right-0 top-0 z-[999999] me-3 mt-3 h-[90vh] w-[0] flex-col rounded-[14px] bg-orange-200 
        p-[5px] font-uilight text-[35px] font-medium 
        text-black sm:static sm:mt-0 sm:flex sm:h-max sm:w-full sm:max-w-max 
        sm:flex-row sm:space-x-[10px] sm:bg-transparent sm:text-xl lg:space-x-2`}
      >
        <div className="flex w-full justify-between overflow-hidden p-8 sm:hidden">
          <div className="iconnav font-semibold text-black">Rizal</div>
          <img
            onClick={handleclosenav}
            src={closesvg}
            width={50}
            height={50}
            className="iconnav relative flex  items-start rounded-full p-3 text-left "
          />
        </div>
        <div className="m-auto flex flex-col items-center justify-center overflow-hidden sm:flex-row">
          <li
            className=" px-[10px] py-[5px] text-[32px] sm:text-[24px] md:text-[32px] lg:text-[28px]"
            onClick={() => handlegsapscroll("#section1")}
            onMouseEnter={(e) => mouseenter(e)}
            onMouseLeave={(e) => mouseleave(e)}
          >
            Home
          </li>
          <li
            onMouseEnter={(e) => mouseenter(e)}
            onMouseLeave={(e) => mouseleave(e)}
            onClick={() => handlegsapscroll("#section2")}
            className=" px-[10px] py-[5px]  text-[32px] sm:text-[24px] md:text-[32px] lg:text-[28px]"
          >
            About
          </li>
          <li
            onMouseEnter={(e) => mouseenter(e)}
            onMouseLeave={(e) => mouseleave(e)}
            onClick={() => handlegsapscroll("#section3")}
            className=" px-[10px] py-[5px]  text-[32px] sm:text-[24px] md:text-[32px] lg:text-[28px]"
          >
            Projects
          </li>
          <li
            onMouseEnter={(e) => mouseenter(e)}
            onMouseLeave={(e) => mouseleave(e)}
            onClick={() => handlegsapscroll("#section4")}
            className=" px-[10px] py-[5px] text-[32px] sm:text-[24px] md:text-[32px] lg:text-[28px]"
          >
            Contact
          </li>
        </div>
        <div className="flex h-[200px] items-center justify-center gap-4 gap-x-4 overflow-hidden sm:hidden">
          <div className="iconsosmed w-[90px] opacity-100">
            <a
              href="https://www.linkedin.com/in/fahrizal-sagala-9b9777283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={lnkdn} className="w-[30px]" />
              <div className="text-[18px]">Linkedin</div>
            </a>
          </div>
          <div className="iconsosmed w-[90px] opacity-100">
            <a
              href="https://www.instagram.com/leo.alife/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={ig} className="w-[30px]" />
              <div className="text-[18px]">Instagram</div>
            </a>
          </div>
          <div className="iconsosmed w-[90px] opacity-100">
            <a
              href="http://github.com/leo-lifecode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
            >
              <img src={gthb} className="w-[30px]" />
              <div className="text-[18px]">Github</div>
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
