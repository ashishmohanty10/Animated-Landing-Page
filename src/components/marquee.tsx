import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="1.2"
      className="w-full py-10 rounded-t-3xl bg-[#004D43]"
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap text-white pr-20">
        {["We are Brand Name", "We are Brand Name", "We are Brand Name"].map(
          (item, idx) => (
            <motion.h1
              key={idx}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
              className="text-[24vw]  leading-none font-medium uppercase "
            >
              {item}
            </motion.h1>
          )
        )}
      </div>
    </div>
  );
};

export default Marquee;
