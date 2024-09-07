import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 p-20 flex gap-5 ">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-2">
            EYE-
          </h1>
          <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-2 ">
            OPENING
          </h1>
        </div>

        <h3 className="text-2xl font-bold mt-2">LOGO</h3>
      </div>

      <div className="w-1/2">
        <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-4">
          Presentation
        </h1>
        <div className="dets flex flex-col mt-12 gap-5 font-medium text-2xl">
          {[
            "Facebook",
            "Twitter",
            "Instagram",
            "LinkedIn",
            "Github",
            "Youtbe",
          ].map((item, idx) => (
            <Link href={"#"} key={idx}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
