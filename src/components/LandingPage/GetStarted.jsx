import React from "react";
import LeftStar from "../../assets/Star 1.png";
import playbutton from "../../assets/Group 3.png";
import getStartarrow from "../../assets/Vector 1.png";
import gradient from "../../assets/gradient.png";
function GetStarted() {
  return (
    <>
      <div className="relative w-[618px] h-[300px] mt-[95px]">
        <img
          src={LeftStar}
          className="absolute top-[-150px] left-[-150px] w-12 h-12 rotate-45"
          alt="left star"
        />
        <div className="relative ">
          <img
            src={gradient}
            alt="gradient"
            className="absolute top-[-100px] left-[80px] w-[420px] h-[350px] z-0"
          />
          <span className="text-6xl font-bold leading-tight relative z-10">
            Make The Best <br />
            Financial Decisions
          </span>
        </div>
        <p className="text-lg mt-4 text-gray-500 w-[638px] h-[58px] relative z-10 opacity-[50]">
          Cum Et Convallis Risus Placerat Aliquam, Nunc Scelerisque Aliquet
          <br />
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="flex space-x-8 mt-8 w-[372px] h-[60px] relative z-10">
          <button className="bg-black text-white font-medium py-3 px-6 rounded-[4px] w-[180px] h-[60px] flex items-center justify-between">
            <span>Get Started</span>
            <img src={getStartarrow} alt="arrow" className="ml-2" />
          </button>
          <button className="flex items-center text-black font-medium">
            <img src={playbutton} alt="play button" className="w-7 h-7 mr-2" />
            Watch Video
          </button>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
