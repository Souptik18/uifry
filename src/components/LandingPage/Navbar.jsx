import React from "react";
import vector from "../../assets/Vector.png";
import ellipse from "../../assets/Ellipse.png";
import uiText from "../../assets/uifryText.png";
import RightStar from "../../assets/Star 1.png";
function Navbar() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[1090px] h-[60px] mt-2">
        <div className=" flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="relative inline-flex items-center w-[117px] h-[34px]">
            <div className="relative">
              <img src={vector} alt="logo" className="w-[27px] h-[34px]" />
              <img
                src={ellipse}
                className="absolute top-4 left-[10px] h-2 w-2"
                alt="decoration"
              />
            </div>
            <span className="ml-2">
              <img src={uiText} className="w-16 h-7" alt="" />
            </span>
            <span className="text-[4px] font-extrabold relative -top-1">
              TM
            </span>
          </div>
          <div className="hidden grow items-start lg:flex w-[378px] h-[26px]">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-xl font-bold text-gray-800 hover:text-rose-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-bold text-gray-800 hover:text-rose-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-bold text-gray-800 hover:text-rose-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-bold text-gray-800 hover:text-rose-500"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-[4px] bg-black text-lg  font-medium text-white shadow-sm w-[180px] h-[60px]"
            >
              Download
            </button>
          </div>
          <img
            src={RightStar}
            alt=""
            className="absolute top-[44px] right-[-100px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
