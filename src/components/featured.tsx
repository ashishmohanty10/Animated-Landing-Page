import Image from "next/image";
import React from "react";
import FeaturedImg1 from "/public/feature1.jpg";
import FeaturedImg2 from "/public/feature2.jpg";

const Featured = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-8xl">Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div className="cardcontainer w-1/2 h-[75vh]    relative">
            <h1 className="text-[#CDEA68]  headings text-8xl absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-999 leading-none tracking-tighter">
              {"FYDE".split("").map((item, idx) => (
                <span className="" key={idx}>
                  {item}
                </span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden">
              <Image
                src={FeaturedImg1}
                alt="Featured Image"
                className="  rounded-xl"
              />
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh] relative">
            <h1 className="text-[#CDEA68]  headings text-8xl absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-999 leading-none tracking-tighter">
              {"VISE".split("").map((item, idx) => (
                <span className="" key={idx}>
                  {item}
                </span>
              ))}
            </h1>

            <div className="w-full h-full overflow-hidden">
              <Image
                src={FeaturedImg2}
                alt="Featured Image"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
