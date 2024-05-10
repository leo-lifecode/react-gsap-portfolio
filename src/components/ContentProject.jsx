import React from "react";

const ContentProject = ({ img, link, name, brand, children, stylecustom }) => {
  return (
    <div className="grid grid-cols-12 items-center gap-[12px] lg:gap-[20px] overflow-hidden py-[100px] font-neue">
      <div className="col-span-12 lg:col-span-5">
        <div className="font-semibold capitalize sm:text-[68px] lg:text-[58px] xl:text-[72px] text-[42px]">{name}</div>
        <a href={link} target="_blank" className="text-gray-500">
          {link}
        </a>
        <div className="my-[4px] sm:my-[12px] flex xl:gap-x-[12px] font-medium sm:text-[28px] lg:text-[24px] xl:text-[32px] text-[14px] gap-x-1">
          <div>{brand}</div>
          <div>•</div>
          <div>Front-end developer</div>
        </div>
        <div>
          <div className="sm:text-xl lg:text-[20px] xl:text-2xl text-[12px]">{children}</div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7  me-[-50%] xl:me-[-50%] lg:me-[-35%] overflow-hidden rounded-2xl border-2 border-white">
        <a
          href="https://shoply-tnbcommerce.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img} className="" />
        </a>
      </div>
    </div>
  );
};

export default ContentProject;
