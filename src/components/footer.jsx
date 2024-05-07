import gsap from "gsap";
function Footer() {
  const handlegsapscroll = (index) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `${index}`,
        offset: 70,
      },
    });
  };
  return (
    <div className="">
      <div className="text-center font-hkgro text-6xl font-black sm:text-5xl md:text-7xl lg:text-9xl">
        SAY HI!
      </div>
      <div className="3xl:px-[10%] 3xl:pb-16 relative px-6 pb-8 pt-8 font-neue sm:px-[4%] sm:pt-[5%]">
        <div className="grid grid-cols-2 gap-x-[1.5rem] gap-y-7 md:grid-cols-12 lg:gap-x-[2.5rem] lg:gap-y-10">
          <div className=" flex flex-col md:col-span-6 lg:col-span-6">
            <span className="link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1 font-bold uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <a className=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <div
                  className="navfooter cursor-pointer"
                  onClick={() => handlegsapscroll("#section1")}
                >
                  Home
                </div>
              </a>
              <a className="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <div
                  onClick={() => handlegsapscroll("#section2")}
                  className="navfooter cursor-pointer"
                >
                  About
                </div>
              </a>
              <a className=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <div
                  onClick={() => handlegsapscroll("#section3")}
                  className="navfooter cursor-pointer"
                >
                  Projects
                </div>
              </a>
              <a className=" link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <div
                  onClick={() => handlegsapscroll("#section4")}
                  className="navfooter cursor-pointer"
                >
                  Contact
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:col-span-3 lg:col-span-3">
            <span className="link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase">
              Socials
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <a
                target="_blank"
                className="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.linkedin.com/in/fahrizal-sagala-9b9777283"
              >
                <div className="link1 navfooter">Linkedin</div>
              </a>
              <a
                target="_blank"
                className="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="https://www.instagram.com/leo.alife/"
              >
                <div className="link1 navfooter">Instagram</div>
              </a>
              <a
                target="_blank"
                className="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium"
                href="http://github.com/leo-lifecode"
              >
                <div className="link1 navfooter">Github</div>
              </a>
            </div>
          </div>
          <div className="col-span-2 flex flex-col md:col-span-3 lg:col-span-3">
            <span className="link-text border-accent-500 text-secondary-300 mb-3 flex border-b-[1.5px] pb-1  font-bold uppercase">
              Projects
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              <div className="link-text ledivding-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <span className="link1">Tanjung Balai</span>
              </div>
              <div className="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <span className="link1">Indonesia</span>
              </div>
              <div className="link-text leading-base text-secondary-100 group relative block h-fit w-fit overflow-hidden font-medium">
                <span className="link1">Portfolio V1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-gap mt-14 grid grid-cols-1 items-end font-hkgro sm:grid-cols-12">
          <span className="tracking-heading text-secondary-300 order-last col-span-8 text-[2.5rem] font-bold leading-[85%] sm:order-first sm:text-[3.5rem] md:col-span-6 lg:col-span-6 lg:text-[5rem]">
            © 2024
            <br className="block" />
            LEO-LIFE
          </span>
          <div className="link-text col-span-4 flex flex-col text-[1.2rem] sm:text-[1.6rem] lg:text-[2.3rem]">
            <span className="text-secondary-300 font-bold uppercase">
              ALL RIGHT RESERVED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
