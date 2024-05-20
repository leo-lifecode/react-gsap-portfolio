import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project5 from "../assets/images/project5.png";

function Lastproject() {
  gsap.registerPlugin(ScrollTrigger);

  const contlastproject = useRef(null);
  const lastproject = useRef(null);

  useGSAP(() => {
    gsap.to(contlastproject.current, {
      scrollTrigger: {
        trigger: lastproject.current,
        start: "top",
        end: "bottom",
        scrub: 0.5,
        markers: true,
      },
      y: -50,
      scale: 0.95,
    });

    gsap.from(`#textfive`, {
      scrollTrigger: {
        trigger: lastproject.current,
        start: "-=340",
      },
      stagger: 0.023,
      y: 200,
    });
  });

  return (
    <div
      ref={contlastproject}
      className="mt-[-5px] rounded-b-3xl bg-black px-[1.5rem] py-[3.5rem] text-[#d1d1c7] sm:px-[4%] sm:py-[5%]"
    >
      <div
        // ref={lastproject}
        id="lastProject"
        className="relative grid grid-cols-12 items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]"
      >
        <div className="col-span-12 lg:col-span-5">
          <div className="overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]">
            <p id="textfive">NFT HOUSE</p>
          </div>
          <div className="overflow-hidden text-[20px] text-gray-500 sm:text-[18px]">
            <a
              href="https://nft-house.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="textfive">https://nft-house.vercel.app</div>
            </a>
          </div>
          <div className=" my-[4px] flex gap-x-1 overflow-hidden text-[18px] font-medium sm:my-[12px] sm:text-[28px] lg:text-[24px] xl:gap-x-[12px] xl:text-[32px]">
            <div id="textfive">NFT</div>
            <div id="textfive">•</div>
            <div id="textfive">Front-end developer</div>
          </div>
          <div>
            <div className="overflow-hidden text-[18px] sm:text-xl lg:text-[20px] xl:text-2xl">
              <p id="textfive">
                NFT HOUSE is a responsive web slicing figma to HTML CSS and
                JAVASCRIPT
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 me-[-50%]  overflow-hidden rounded-2xl border-2 border-white lg:col-span-7 lg:me-[-35%] xl:me-[-50%]">
          <a
            href="https://nfthouse.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project5} />
          </a>
        </div>
      </div>
      <div ref={lastproject} className="h-[100px] w-full bg-green-500">
        hello
      </div>
    </div>
  );
}

export default Lastproject;
