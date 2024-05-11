import React from "react";

const ContentProject = ({ img, link, name, brand, children, stylecustom }) => {
  return (
    <div className="grid grid-cols-12 items-center gap-[12px] overflow-hidden py-[100px] font-neue lg:gap-[20px]">
      <div className="col-span-12 lg:col-span-5">
        <div className="text-[42px] font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px]">
          {name}
        </div>
        <a
          href={link}
          target="_blank"
          className="text-[14px] text-gray-500 sm:text-[18px]"
        >
          {link}
        </a>
        <div className="my-[4px] flex gap-x-1 text-[14px] font-medium sm:my-[12px] sm:text-[28px] lg:text-[24px] xl:gap-x-[12px] xl:text-[32px]">
          <div>{brand}</div>
          <div>•</div>
          <div>Front-end developer</div>
        </div>
        <div>
          <div className="text-[12px] sm:text-xl lg:text-[20px] xl:text-2xl">
            {children}
          </div>
        </div>
      </div>
      <div className="col-span-12 me-[-50%]  overflow-hidden rounded-2xl border-2 border-white lg:col-span-7 lg:me-[-35%] xl:me-[-50%]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} className="" />
        </a>
      </div>
    </div>
  );
};

export default ContentProject;
