import { useRef, useState } from "react";
import lnkdn from "../assets/lnkdn.svg";
import ig from "../assets/ig.svg";
import gthb from "../assets/gthb.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  const formcontact = useRef();
  const [status, setstatus] = useState({ success: "", error: "" });
  const [modal, setmodal] = useState(false);
  useGSAP(() => {
    gsap.from("#contact", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top +=250",
        end: "top +=250",
        once: true,
      },
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      y: 80,
    });
  });
  const handlesubmitform = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("aselolejos", "template_a5jg57b", formcontact.current, {
        publicKey: "qByr7pGR89bJ6qKww",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setstatus({ ...status, success: "success", error: "" });
          setmodal(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setstatus({ ...status, error: "error", success: "" });
        },
      );
  };

  return (
    <>
      {modal ? (
        <div className="fixed left-0 top-0 z-[9999999999999] flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[80%] max-w-xl rounded-xl bg-white font-neue sm:rounded-2xl">
            <div className="w-full">
              <div className="m-8 mx-auto my-10 max-w-[400px]">
                <h1 className="text-center text-3xl font-extrabold">
                  message sent successfully
                </h1>
              </div>
            </div>
            <div
              onClick={() => setmodal(false)}
              className="absolute right-[-10px] top-[-12px] flex cursor-pointer items-center justify-center rounded-full bg-slate-200 px-4 py-1 text-2xl leading-normal"
            >
              x
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex h-full w-full flex-col items-center px-4 py-2 sm:justify-center md:px-[52px] md:py-[20px]">
        <div className="overflow-hidden font-neue text-[28px] font-semibold sm:mb-4 sm:text-[50px] sm:capitalize md:text-[60px] md:font-medium lg:mb-7 lg:text-[90px]">
          <div id="contact">Contact me</div>
        </div>
        <div className="flex w-full flex-col md:flex-row md:items-center">
          <div className="flex flex-col md:w-2/3 md:pe-[48px]">
            <div className="">
              <div className="gap-2 font-neue text-2xl font-semibold md:leading-3">
                <div className="sm:text-4xl lg:text-[36px]">
                  Let's connect with me ?
                </div>
                <div className="sm:mt-[18px] lg:text-[36px]">Contact me</div>
              </div>
              <div className="my-[8px] font-neue text-[12px] text-gray-400 sm:text-[18px] md:my-[23px] lg:text-[18px]">
                I am looking for freelance opportunities or internship <br /> in
                startup,agencies or companies.
              </div>
            </div>
            <div className="w-full">
              <form ref={formcontact} onSubmit={handlesubmitform}>
                <div className="flex gap-8">
                  <div className="w-full sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="fname"
                        id="fName"
                        placeholder="Your Name"
                        className="w-full "
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="mb-5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full "
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[8px] flex w-full md:mt-[20px]">
                  <div className="w-full">
                    <div className="mb-3 md:mb-5 ">
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="h-[100px] w-full resize-none md:h-[150px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="hover:shadow-form border-1 rounded-[48px] border border-[#e0e0e0] bg-black px-4 py-2 text-center text-base font-semibold text-white duration-200 hover:bg-[#969689] hover:text-black md:px-8 md:py-3 ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-[20px] space-y-6 font-neue text-[18px] sm:mt-1 sm:space-y-0 md:w-1/3 md:space-y-12">
            <div className="space-y-1">
              <div className="text-[18px] font-semibold md:text-[22px]">
                Contact Details
              </div>
              <div className="text-[14px] md:text-[18px]">
                fahryzalsagala@gmail.com
              </div>
              <div className="text-[14px] md:text-[18px]">
                +62 8952 6195 247
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[18px] font-semibold md:text-[22px]">
                My Digital Social
              </div>
              <a
                target="_blank"
                href="http://github.com/leo-lifecode"
                className="flex gap-x-2"
              >
                <img src={gthb} alt="" className="w-[15px] md:w-[24px]" />
                <div className="text-[14px] md:text-[18px]">Github</div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/leo.alife/"
                className="flex gap-x-2"
              >
                <img src={ig} alt="" className="w-[15px] md:w-[24px]" />
                <div className="text-[14px] md:text-[18px]">Instagram</div>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/fahrizal-sagala-9b9777283"
                className="flex gap-x-2"
              >
                <img src={lnkdn} alt="" className="w-[15px] md:w-[24px]" />
                <div className="text-[14px] md:text-[18px]">Linkedin</div>
              </a>
            </div>
            <div className="space-y-1">
              <div className="text-[18px] font-semibold md:text-[22px]">
                Location
              </div>
              <div className="text-[14px] md:text-[18px]">
                Sumatera utara, Medan Indoensia
              </div>
              <div className="text-[14px] md:text-[18px]">date</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
