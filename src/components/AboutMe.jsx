import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import myImage from "../assets/images/myImage.jpg";

const AboutMe = () => {
  useGSAP(() => {
    if (window.innerWidth > 640) {
      gsap.to("#descriptionme", {
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: "#section2",
          start: "top =-200",
          end: "bottom",
          scrub: 0.5,
        },
      });
    }
    gsap.from("#title-about", {
      scrollTrigger: {
        trigger: "#section2",
        start: "top +=180",
        end: "top +=180",
        once: true,
      },
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      y: 80,
    });

    gsap.from(".skills", {
      scrollTrigger: {
        trigger: "#section2",
        start: "top",
        end: "top",
        once: true,
      },
      y: 100,
      stagger: 0.08,
      duration: 0.32,
      ease: "power3.inOut",
    });
  });

  return (
    <div className="flex min-h-max w-full flex-col items-center justify-center pb-[100px] sm:pb-0">
      <div className="overflow-hidden">
        <div className="overflow-hidden font-neue text-[28px] font-semibold sm:mb-4 sm:text-[50px] sm:capitalize md:text-[60px] md:font-medium lg:mb-7 lg:text-[90px]">
          <div id="title-about">About Me</div>
        </div>
      </div>
      <div className="flex w-full flex-[0_0_100%] flex-col justify-center px-2 py-4 sm:flex-row sm:px-4 sm:py-0 lg:px-2">
        <div className=" flex flex-[0_0_100%] justify-center sm:h-[350px] sm:w-[350px] sm:flex-[0_0_45%] lg:h-[500px] lg:w-[450px] lg:justify-end">
          <img
            src={myImage}
            className="rounded-lg bg-cover bg-center sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[450px]"
          />
        </div>
        <div
          id="descriptionme"
          className="flex flex-[0_0_100%] flex-col px-[18px] font-neue text-[16px] font-thin text-gray-800 sm:flex-[0_0_55%] sm:text-[18px] lg:text-[24px]"
        >
          <div className="mt-2 font-neue text-[24px] font-semibold sm:mt-0 md:text-2xl lg:text-4xl">
            intorodcution who am i ?
          </div>
          <div>
            <div className="mt-2 sm:mt-[14px] md:w-[400px] lg:mt-[24px] lg:w-[500px] xl:w-[620px]">
              I'm a student. I like learning new things about front end
              developers and I have an interest in being a front end developer.
            </div>
            <div className="mt-[12px]">
              I see social life as an opportunity to learn from others, gain new
              inspiration, and broaden my horizons about the latest trends in
              the technology and web design industry.
            </div>
            <div className="flex flex-col overflow-hidden">
              <div className="my-[12px]">My skills </div>
              <div className="flex flex-wrap gap-3 font-neue text-[12px] uppercase sm:text-[18px]">
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  html
                </div>
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  css
                </div>
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  javascript
                </div>
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  react js
                </div>
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  tailwind css
                </div>
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  bootstrap
                </div>
                <div className="skills rounded-2xl border border-black px-2 py-1 sm:px-4">
                  wordpress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
