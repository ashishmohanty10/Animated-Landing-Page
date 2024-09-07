import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center gap-5 px-32">
      <div className="cardcontainer w-1/2  h-[50vh]">
        <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <p className="text-[#CDEA68] text-4xl font-bold">LOGO</p>

          <button className="text-[#CDEA68] absolute px-5 py-1 border-2 border-[#CDEA68] left-10 bottom-10 rounded-full">
            &copy;
          </button>
        </div>
      </div>
      <div className="cardontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card rounded-xl w-1/2 h-full bg-[#061b18]">
          <div className="relative card rounded-xl w-full h-full  flex items-center justify-center">
            <p className="text-[#CDEA68] text-4xl font-bold">LOGO</p>

            <button className="text-[#CDEA68] absolute px-5 py-1 border-2 border-[#CDEA68] left-10 bottom-10 rounded-full">
              &copy;
            </button>
          </div>
        </div>
        <div className="card rounded-xl w-1/2 h-full bg-[#061b18]">
          <div className="relative card rounded-xl w-full h-full flex items-center justify-center">
            <p className="text-[#CDEA68] text-4xl font-bold">LOGO</p>

            <button className="text-[#CDEA68] absolute px-5 py-1 border-2 border-[#CDEA68] left-10 bottom-10 rounded-full">
              &copy;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
