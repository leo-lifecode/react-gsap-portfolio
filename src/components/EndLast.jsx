import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EndLast() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#section_1", {
      scrollTrigger: {
        trigger: "#endlast",
        start: "-=120",
        end: "+=320",
        scrub: 1,
      },
      scale: 0.95,
    });
  });
  return <div id="endlast"></div>;
}
