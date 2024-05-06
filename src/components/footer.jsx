import lnkdn from "../assets/lnkdn.svg";
import ig from "../assets/ig.svg";
import gthb from "../assets/gthb.svg";
import gsap from "gsap";
function Footer() {
  // const handlegsapscroll = (index) => {
  //   gsap.to(window, {
  //     duration: 1,
  //     scrollTo: {
  //       y: `${index}`,
  //       offset: 70,
  //     },
  //   });
  // };
  return (
    <div className="3xl:px-[10%] 3xl:pb-16 relative px-6 pb-8 pt-8 sm:px-[4%] sm:pt-[5%]">
      <div className="text-center font-hkgro text-6xl font-black sm:text-5xl md:text-7xl lg:text-9xl">
        SAY HI!
      </div>
      <div className="">
        <div class="grid-gap grid grid-cols-2  gap-y-7 md:grid-cols-12  lg:gap-y-10">
          <div class=" flex flex-col md:col-span-6 lg:col-span-6">
            <span class="link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase">
              <fontsninja-text
                id="fontsninja-text-800"
                class="fontsninja-family-rule_overusedgrotesk_0f4e54_700_normal"
              >
                Navigation
              </fontsninja-text>
            </span>
            <div class="flex flex-col gap-y-2 md:gap-y-1">
              <a
                class=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="/"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-803"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Home
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-804"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Home
                  </fontsninja-text>
                </span>
              </a>
              <a
                class=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="#services"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-806"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Services
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-807"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Services
                  </fontsninja-text>
                </span>
              </a>
              <a
                class=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="#works"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-809"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Works
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-810"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Works
                  </fontsninja-text>
                </span>
              </a>
              <a
                class=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="#about"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-812"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    About
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-813"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    About
                  </fontsninja-text>
                </span>
              </a>
              <a
                class=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="#reviews"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-815"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Reviews
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-816"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Reviews
                  </fontsninja-text>
                </span>
              </a>
              <a
                class=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="contact"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-818"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Contact
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-819"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Contact
                  </fontsninja-text>
                </span>
              </a>
            </div>
          </div>
          <div class="flex flex-col md:col-span-3 lg:col-span-3">
            <span class="link-text border-accent-500  text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase">
              <fontsninja-text
                id="fontsninja-text-821"
                class="fontsninja-family-rule_overusedgrotesk_0f4e54_700_normal"
              >
                Socials
              </fontsninja-text>
            </span>
            <div class="flex flex-col gap-y-2 md:gap-y-1">
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.linkedin.com/in/huyngxyz/"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-824"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Linkedin
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-825"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Linkedin
                  </fontsninja-text>
                </span>
              </a>
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-827"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    YouTube
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-828"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    YouTube
                  </fontsninja-text>
                </span>
              </a>
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.instagram.com/huyngxyz/"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-830"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Instagram
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-831"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Instagram
                  </fontsninja-text>
                </span>
              </a>
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://bento.me/huyng"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-833"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Bento
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-834"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Bento
                  </fontsninja-text>
                </span>
              </a>
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://github.com/huyngxyz"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-836"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Github
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-837"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Github
                  </fontsninja-text>
                </span>
              </a>
            </div>
          </div>
          <div class="col-span-2 flex flex-col md:col-span-3 lg:col-span-3">
            <span class="link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase">
              <fontsninja-text
                id="fontsninja-text-839"
                class="fontsninja-family-rule_overusedgrotesk_0f4e54_700_normal"
              >
                Resources
              </fontsninja-text>
            </span>
            <div class="flex flex-col gap-y-2 md:gap-y-1">
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.pillarstack.com"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-842"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Pillarstack
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-843"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Pillarstack
                  </fontsninja-text>
                </span>
              </a>
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.figma.com/community/file/1328038510191576951/project-starter-template"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-845"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Figma Templates
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-846"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Figma Templates
                  </fontsninja-text>
                </span>
              </a>
              <a
                target="_blank"
                class="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://huyngportfoliov1.netlify.app/"
              >
                <span class="link1">
                  <fontsninja-text
                    id="fontsninja-text-848"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Portfolio V1
                  </fontsninja-text>
                </span>
                <span class="link2 ">
                  <fontsninja-text
                    id="fontsninja-text-849"
                    class="fontsninja-family-rule_overusedgrotesk_0f4e54_500_normal"
                  >
                    Portfolio V1
                  </fontsninja-text>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[56px] flex flex-col justify-between sm:flex-row">
          <div className="uppercase">
            <div className="font-neue text-[40px] font-black sm:text-[32px] lg:text-[80px]">
              © 2024
            </div>
            <div className="font-neue text-[40px] font-black sm:text-[32px] lg:text-[80px]">
              Leo-lifecode
            </div>
          </div>
          <div className="flex items-end text-[18px] font-semibold md:text-[20px] lg:text-[48px] xl:text-[60px]">
            ALL RIGHT RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
