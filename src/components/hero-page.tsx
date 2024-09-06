import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, idx) => {
          return (
            <div key={idx} className="masker">
              <div className="w-fit flex items-center">
                {idx === 1 && (
                  <div className="w-[8vw] h-[4.8vw] rounded-md bg-green-500"></div>
                )}
                <h1 className="uppercase text-[5vw] leading-[5.7vw] tracking-tighter font-medium text-white">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between  py-5 px-20 text-white">
        {[
          "For Public and Private companies",
          "From the first pitch to IPO",
        ].map((item, idx) => (
          <p
            key={idx}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-medium text-xs">
            Start the project
          </div>

          <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
