import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContentProject = ({
  img,
  link,
  name,
  brand,
  children,
  stylecustom,
  id,
  text,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(`#${text}`, {
      scrollTrigger: {
        trigger: `#${id}`,
        start: "-=380",
      },
      stagger: 0.023,
      duration: 0.5,
      y: 200,
    });
  });
  return (
    <div
      id={id}
      className=" grid grid-cols-12 items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]"
    >
      <div className="col-span-12 lg:col-span-5">
        <div className="overflow-hidden text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]">
          <p id={text}>{name}</p>
        </div>
        <div className="overflow-hidden text-[18px] text-gray-500 sm:text-[18px]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div href={link} target="_blank" id={text}>
              {link}
            </div>
          </a>
        </div>
        <div className=" my-[4px] flex gap-x-1 overflow-hidden text-[20px] font-medium sm:my-[12px] sm:text-[28px] lg:text-[24px] xl:gap-x-[12px] xl:text-[32px]">
          <div id={text}>{brand}</div>
          <div id={text}>•</div>
          <div id={text}>Front-end developer</div>
        </div>
        <div>
          <div className="overflow-hidden text-[18px] sm:text-xl lg:text-[20px] xl:text-2xl">
            <p id={text}>{children}</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 me-[-50%]  overflow-hidden rounded-2xl border-2 border-white lg:col-span-7 lg:me-[-35%] xl:me-[-50%]">
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
