import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-999 w-full px-20 py-8 flex items-center justify-between text-white">
      <div>
        <p className="text-3xl font-bold">LOGO</p>
      </div>

      <div className="flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, idx) => (
            <Link
              href="#"
              key={idx}
              className={`text-lg font-light capitalize ${
                idx === 4 && "ml-32"
              }`}
            >
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
