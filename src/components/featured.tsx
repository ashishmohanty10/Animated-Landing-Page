"use client";

import Image from "next/image";
import React from "react";
import FeaturedImg1 from "/public/feature1.jpg";
import FeaturedImg2 from "/public/feature2.jpg";
import { motion, useAnimation, AnimationControls } from "framer-motion";

const Featured: React.FC = () => {
  const controls: AnimationControls[] = [useAnimation(), useAnimation()];

  const handleHover = (index: number) => {
    controls[index].start({
      scale: 1.05,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = (index: number) => {
    controls[index].start({
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl">Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            className="cardcontainer w-1/2 h-[75vh] relative"
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            animate={controls[0]}
          >
            <h1 className="text-[#CDEA68] headings text-8xl absolute right-0 translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter">
              {"FYDE".split("").map((item, idx) => (
                <motion.span
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                  className="inline-block"
                  key={idx}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden">
              <Image
                src={FeaturedImg1}
                alt="Featured Image"
                className="rounded-xl "
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="cardcontainer w-1/2 h-[75vh] relative"
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            animate={controls[1]}
          >
            <h1 className="text-[#CDEA68] headings text-8xl absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tighter flex">
              {"VISE".split("").map((item, idx) => (
                <motion.span
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                  className="inline-block"
                  key={idx}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden">
              <Image
                src={FeaturedImg2}
                alt="Featured Image"
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
