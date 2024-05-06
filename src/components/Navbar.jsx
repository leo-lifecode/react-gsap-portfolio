import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import humburger from "../assets/Icon.svg";
import { useState, useRef, useEffect } from "react";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import closesvg from "../assets/close.svg";
import lnkdn from "../assets/lnkdn.svg";
import ig from "../assets/ig.svg";
import gthb from "../assets/gthb.svg";
const Navbar = ({ time }) => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  const [nav, setnav] = useState("hidden");
  const [isWindowWidthAbove640, setIsWindowWidthAbove640] = useState(false);
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

  useEffect(() => {
    function handleResize() {
      setIsWindowWidthAbove640(window.innerWidth > 640);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWindowWidthAbove640) {
      gsap.to("#containernav", {
        width: "95%",
        duration: 0.3,
        display: "flex",
      });
      gsap.to("li", { opacity: 1, y: 0, stagger: 0.08, ease: "power4.inOut" });
    } else {
      gsap.set("#containernav", {
        width: "0",
        duration: 0.3,
        display: "none",
      });
      gsap.set("li", {
        opacity: 0,
        y: -300,
        stagger: 0.08,
        ease: "power4.inOut",
      });
    }
  }, [isWindowWidthAbove640]);

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
  });

  return (
    <div className="z-[999] flex w-full items-center justify-between px-8 pt-[8px] sm:px-4">
      <div className="logonama nav font-neue text-[32px] font-semibold sm:text-[28px]">
        Leo-lifecode
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
        className={`nav ${nav} font-neue fixed right-0 top-0 z-[999999] me-3 mt-3 h-[90vh] w-[0] flex-col rounded-[14px] 
        p-[5px] text-[35px] font-medium 
        text-black sm:static sm:mt-0 sm:flex sm:h-max sm:w-full sm:max-w-max 
        sm:flex-row sm:space-x-[10px] sm:bg-transparent sm:text-xl lg:space-x-2`}
      >
        <div className="flex w-full justify-between overflow-hidden p-8 sm:hidden">
          <div className="iconnav text-[32px] font-bold text-black">Leo</div>
          <img
            onClick={handleclosenav}
            src={closesvg}
            width={50}
            height={50}
            className="iconnav relative flex  items-start rounded-full p-2 text-left "
          />
        </div>
        <div className="font-neue m-auto flex flex-col items-center justify-center gap-2 overflow-hidden sm:flex-row sm:gap-5">
          <li
            className=" text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer"
            onClick={() => handlegsapscroll("#section1")}
          >
            Home
          </li>
          <li
            onClick={() => handlegsapscroll("#section2")}
            className=" text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer "
          >
            About
          </li>
          <li
            onClick={() => handlegsapscroll("#section3")}
            className=" text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => handlegsapscroll("#section4")}
            className=" text-[32px] font-semibold duration-150 sm:text-[24px] md:text-[20px] cursor-pointer"
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
