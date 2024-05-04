import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitText from "./Splittext";
const TextSpllitOpacity1 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const main = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top",
        end: "+=1000",
        toggleActions: "play none none reverse",
        scrub: 0.5,
        pin: true,
      },
    });

    const showbg = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "-=200",
        end: "+=700",
        toggleActions: "play none none reverse",
      },
    });

    const hiddenbg = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "bottom center",
        end: "bottom",
        toggleActions: "play none none reverse",
      },
    });

    showbg.to("#body", {
      backgroundColor: "black",
      ease: "power3.inOut",
      duration: 0.25,
    });

    hiddenbg.to("#body", {
      backgroundColor: "white",
      ease: "power4.inOut",
      duration: 0.25,
    });

    tl.set(
      ".lol",
      {
        opacity: 1,
        stagger: 1,
      },
      0.1,
    );
  });

  return (
    <div ref={main} className="h-screen w-screen px-2 text-black sm:px-8">
      <div className="flex h-full flex-col items-center justify-center text-center text-[24px] font-semibold leading-tight text-white sm:text-[24px] md:text-[36px] ">
        <div
          id="textabout"
          className="flex w-[370px] flex-wrap items-center justify-center text-center sm:w-max sm:max-w-[900px]"
        >
          <SplitText
            text="Our new Mobile ePaper device combines go our new Mobile ePaper device combines go Mobile ePaper device combines go"
            parclass="lol opacity-30 "
          />
        </div>
      </div>
    </div>
  );
};

export default TextSpllitOpacity1;
