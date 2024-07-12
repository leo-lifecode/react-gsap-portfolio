import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

const ContentProject = ({
  img,
  link,
  name,
  brand,
  children,
  stylecustom,
  id,
  layouttext,
  text,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // time.from(`#${text}`, {
    //   scrollTrigger: {
    //     trigger: `#${id}`,
    //     start: "-=480",
    //   },
    //   stagger: 0.02,
    //   duration: 0.3,
    //   y: 200,
    // });
    gsap.from(`.${layouttext}`, {
      scrollTrigger: {
        trigger: `#${id}`,
        start: "-=380",
      },
      duration: 0.4,
      stagger: 0.01,
      left: "0%",
      ease: "power3.in",
    });
    gsap.set(`.${layouttext}`, {
      scrollTrigger: {
        trigger: `#${id}`,
        start: "-=380",
      },
      delay: 0.45,
      visibility: "hidden",
      opacity: 0,
    });
  });

  return (
    <div
      id={id}
      className=" grid grid-cols-12 items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]"
    >
      <div className="col-span-12 lg:col-span-5">
        <div className="relative w-fit overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]">
          <p id={text}>{name}</p>
          <div className={layouttext}></div>
        </div>
        <div className="relative w-fit overflow-hidden text-[18px] text-gray-500 sm:text-[18px]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
            <div className={layouttext}></div>
          </a>
        </div>
        <div className="relative my-[4px] flex w-fit gap-x-1 overflow-hidden text-[20px] font-medium sm:my-[12px] sm:text-[28px] lg:text-[24px] xl:gap-x-[12px] xl:text-[32px]">
          <div id={text}>{brand}</div>
          <div id={text}>•</div>
          <div id={text}>Front-end developer</div>
          <div className={layouttext}></div>
        </div>
        <div>
          <div className="relative w-fit overflow-hidden text-[18px] sm:text-xl lg:text-[20px] xl:text-2xl">
            <p id={text}>{children}</p>
            <div className={layouttext}></div>
          </div>
        </div>
      </div>
      <div className="col-span-12 me-[-50%] overflow-hidden rounded-2xl border-2 border-white lg:col-span-7 lg:me-[-35%] xl:me-[-50%]">
        <div className="h-[249px] w-[404px] sm:h-[531px] sm:w-[861px] lg:h-[448px] lg:w-[726] xl:h-[531px] xl:w-[861px]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={img}
              className="h-[249px] w-[404px] sm:h-[531px] sm:w-[861px] lg:h-[448px] lg:w-[726] xl:h-[531px] xl:w-[861px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentProject;
