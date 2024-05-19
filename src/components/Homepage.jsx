import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mousepng from "../assets/images/mouse.png";
import SplitText from "./Splittext";
const Homepage = ({ time }) => {
  useGSAP(() => {
    time.from(
      ".photocover",
      {
        duration: 1,
        scale: -1,
        opacity: 0,
        ease: "power4.inOut",
      },
      "-=1.6",
    );
    time.from(
      ".word",
      {
        y: 150,
        duration: 0.45,
        stagger: {
          each: 0.03,
        },
        ease: "power3.inOut",
      },
      "-=0.8",
    );

    time.from(
      ".text",
      {
        y: 200,
        duration: 0.6,
        stagger: 0.14,
        ease: "power3.inOut",
      },
      "<=0.5",
    );
    time.from(".scrolldown",{
      scale:-1,
      opacity:0,
      duration:0.5,
      ease:"power4.inOut",
    },"<")
    gsap.to("#scrolldown", {
      keyframes: {
        "0%": { rotation: 360, ease: "power3.inOut" },
        "100%": { rotation: 0, ease: "none" },
      },
      duration: 8,
      repeat: -1,
    });
  });

  return (
    <div className="relative m-auto flex w-full flex-col items-center p-2 text-[40px] font-bold sm:text-[70px] xl:text-[120px]">
      <div className="relative">
        <div className="relative z-[-9] flex overflow-hidden font-hkgro">
          <SplitText text="HEY THERE" parclass={"word"} />
        </div>
        <div className="relative z-[-9] flex overflow-hidden font-hkgro">
          <SplitText text="I'M FAHRIZAL" parclass={"word"} />
        </div>
        <div className="relative z-[-9] overflow-hidden text-center font-neue text-[12px] tracking-widest text-gray-500 sm:text-[14px] lg:text-[18px] xl:text-[21px]">
          <div className="text">Frontend developer & web designer</div>
        </div>
        <div className="relative z-[-9] hidden overflow-hidden text-center font-neue text-[12px] tracking-widest text-gray-500 sm:block sm:text-[14px] lg:text-[18px] xl:text-[21px]">
          <div className="text">based in indonesia</div>
        </div>
        <div className=" absolute bottom-[-100%] flex w-full items-center justify-between sm:bottom-[-45px] sm:right-[-130px] sm:block sm:w-max lg:bottom-[10px] lg:right-[-180px]">
          <div className="block overflow-hidden text-[18px] font-medium sm:hidden">
            <div className="text uppercase text-gray-950">open to work</div>
            <div className="text text-[12px] text-gray-500">
              based in indonesia
            </div>
          </div>
          <div className="scrolldown relative z-[-99] block items-end">
            <svg width={100} height={100} id="scrolldown">
              <path
                id="ellipse-id-r2-"
                style={{ fill: "none" }}
                d="M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"
              ></path>
              <text
                style={{
                  fontSize: "14px",
                  letterSpacing: "4.1px",
                  fill: "#000",
                }}
              >
                <textPath xlinkHref="#ellipse-id-r2-" startOffset="0">
                  <tspan>SCROLL DOWN SCROLL DOWN</tspan>
                </textPath>
              </text>
            </svg>
            <img
              src={mousepng}
              alt="mouse"
              width={35}
              className="absolute bottom-0 left-0 right-0 top-0 m-auto"
            />
          </div>
        </div>
      </div>
      <div className="photocover absolute left-0 right-0 top-[-50%] z-[-999] m-auto h-[300px] w-[300px] rounded-full bg-cover bg-center bg-no-repeat sm:top-[-18%] lg:top-[-15%] lg:h-[400px] lg:w-[400px] xl:top-[-5%] xl:h-[550px] xl:w-[550px]"></div>
    </div>
  );
};

export default Homepage;
