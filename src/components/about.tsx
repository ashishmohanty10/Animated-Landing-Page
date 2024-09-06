import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#CDEA68] rounded-t-3xl text-black p-20">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 flex gap-5">
        <div className="w-1/2">
          <h1 className="text-6xl">Our Approach:</h1>
          <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-8 flex gap-10 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-zinc-800/20  rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
