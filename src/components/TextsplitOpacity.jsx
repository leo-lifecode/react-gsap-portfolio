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
    <div
    id="nono"
      ref={main}
      className="flex h-screen text-black justify-center items-center sm:px-8 "
    >
      <div className="flex flex-col font-bold">
        <div id="textabout" className="m-auto px-[12px] sm:m-0">
          {/*text-center  w-[330px] sm:w-max sm:max-w-[1000px] sm:px-0 md:w-[600px] lg:w-[1000px] lg:max-w-[1000px] */}
          <div className="flex flex-wrap font-neue text-[43px] text-white sm:leading-[60px] md:text-[80px] md:leading-[145px] lg:text-[86px] lg:leading-[170px] xl:text-[103px]">
            {/* <div></div> */}
            <SplitText
              text="I create unique websites and i like make a responsive web experiences for fun."
              parclass="lol opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSpllitOpacity1;
