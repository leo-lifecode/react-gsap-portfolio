import { useState } from "react";

const Contacts = () => {
  const [form, setform] = useState([]);
  const handlesubmitform = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fName: formData.get("fName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    setform(data);

    if (
      form.message == "" &&
      form.fName == "" &&
      form.email == "" &&
      form.subject == ""
    ) {
      alert("Please fill the form");
      console.log(form)
    }
  };

  return (
    <div className="flex h-full items-center justify-center px-3 sm:px-2">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-[60px] lg:gap-[200px]">
        <div className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
          <div className="flex gap-2 sm:block ">
            <div>Let's</div>
            <div>connect</div>
          </div>
          <div className="flex-wrap text-base text-[#5c5b5b] sm:mt-[18px] sm:text-lg lg:w-[280px] lg:text-2xl">
            Contact Me for questions or discussion
          </div>
        </div>
        <div className="">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handlesubmitform}>
              <div className="flex gap-2">
                <div className="w-full sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="flex w-full">
                <div className="w-full">
                  <div className="mb-5 ">
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Message"
                      className="w-[100%] rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="hover:shadow-form border-1 w-full rounded-md border border-[#e0e0e0] bg-transparent px-8 py-3 text-center text-base font-semibold text-[#6B7280] duration-200 hover:bg-[#d3d3ad] hover:text-white">
                  send a massage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
