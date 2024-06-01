import React from "react";
import { useGSAP } from "@gsap/react";
const Overlay = ({ time }) => {
  useGSAP(() => {
    time.from("#textup", {
      duration: 0.83,
      y: 100,
      stagger: 0.12,
      opacity: 1,
      ease: "power3.inOut",
    });
    time.set("#containertext", { overflow: "visible" });

    time.to("#textup", {
      delay: 0.8,
      y: -200,
      duration: 0.7,
      opacity: 0,
      stagger: 0.04,
      ease: "power4.inOut",
    });
    time.to(
      "#overlay",
      {
        opacity: 1,
        yPercent: -100,
        duration: 0.6,
      },
      "-=0.3",
    );
  });
  return (
    <div
      id="overlay"
      className="overlay fixed left-0 top-0 z-[999] flex h-svh w-screen items-center justify-center text-2xl font-bold lg:text-3xl xl:text-4xl"
    >
      <div
        id="container"
        className="z-50 flex h-[300px] flex-col items-center justify-center overflow-hidden "
      >
        <span id="containertext" className="overflow-hidden text-white">
          <span id="textup" className="opacity-1 flex font-neue font-semibold">
            Rizal
          </span>
        </span>
        <span id="containertext" className="overflow-hidden text-white">
          <span id="textup" className="opacity-1 flex font-neue font-semibold">
            © Portfolio 2024
          </span>
        </span>
      </div>
    </div>
  );
};

export default Overlay;
