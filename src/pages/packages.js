import React from "react";
import Link from "next/link";
import { ImNpm } from "react-icons/im";

const packages = () => {
  return (
    <div className="w-full h-full px-10 font-nunitoSans flex flex-col items-center bg-gradient-radial dark:bg-gradient-radial-dark animate-gradient-x">
      <div className="w-full h-[15rem] md:h-[18.5rem] lg:h-[19.5rem] xl:h-[20.5rem] flex flex-col justify-end items-center">
        <h1
          data-aos="fade"
          data-aos-duration={700}
          className="text-[#185533] dark:text-[#8fdcc1] mb-8 font-extrabold text-[3.3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]"
        >
          Packages
        </h1>
      </div>
      <div
        data-aos="fade"
        data-aos-delay={200}
        data-aos-duration={700}
        className="w-full xl:w-[75rem] h-full mt-12 md:h-[60vh]"
      >
        <Link
          href={
            "https://www.npmjs.com/package/react-text-gradients-and-animations?activeTab=readme"
          }
          className="bg-white/50 dark:bg-[#298050] w-full h-[15rem] rounded-xl flex flex-col items-start justify-evenly p-10 transition hover:-translate-y-1 ease-in-out duration-500"
        >
          <div className="text-[#185533]">
            <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px]">
              React Text Gradients and Animations
            </h2>
          </div>
          <div className="text-[12px] sm:text-[16px] md:text-[18px]">
            <p>Easily Apply Linear, Radial, or Conic Gradients to Text.</p>
            <p>Animate Text Gradients Instantly.</p>
            <p>No Limit on Color Stops.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default packages;
