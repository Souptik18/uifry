import React from "react";
import RightStar from "../../assets/Star 3.png";
import LeftStar from "../../assets/Star 1.png";
import EllipseCircle from "../../assets/Ellipse 2159.png";
import trophy from "../../assets/trophy-01.png";
import Line from "../../assets/Line 1.png";
import bankicon from "../../assets/bank-note-03.png";
import line6 from "../../assets/Rectangle 6.png";
import line5 from "../../assets/Rectangle 7.png";
import star7 from "../../assets/Star 7.png";
import react5 from "../../assets/Rectangle 5.png";
import star8 from "../../assets/Star 8.png";
function FinanceSection() {
  return (
    <div className="relative flex items-center justify-center w-[569px] h-[358px] bg-white">
      <img
        src={star8}
        className="w-[48px] h-[48px] absolute top-[-80px] left-[100px]"
        alt=""
      />
      <div className="relative flex transform rotate-[-28deg]">
        <span className="font-bold text-[102px] w-[89px] relative top-[-36px] left-[48px] z-10">
          A
        </span>
        <div className="w-[512px] h-[313px] mt-1 relative z-10">
          <div className="relative pl-4 w-[534px] h-[71px] bg-black text-white p-2 flex items-center rounded-tr-lg rounded-br-lg">
            <div className="flex items-center m-2 justify-center w-8 h-8">
              <img
                src={EllipseCircle}
                alt="right star"
                className="relative w-[31px] h-[31px] left-3"
              />
              <img
                src={trophy}
                alt="right star"
                className="w-[24px] h-[24px] relative right-4 rotate-[28deg]"
              />
            </div>
            <div className="text-left mr-4">
              <p className="text-sm font-bold">Achievements</p>
              <p className="text-xs">Best Finance App on Playstore</p>
            </div>
            <img src={Line} alt="" className="rotate-[28deg] m-2" />
            <div className="relative bg-black text-white flex items-center space-x-4 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none">
              <div className="flex items-center justify-center w-8 h-8 ml-4">
                <img
                  src={EllipseCircle}
                  alt="right star"
                  className="relative w-[31px] h-[31px] left-3"
                />
                <img
                  src={bankicon}
                  alt="right star"
                  className="w-[24px] h-[24px] rotate-[28deg] relative right-4"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Finance</p>
                <p className="text-xs">Most Popular Accounting App</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "352px",
            // height: "72px",
            borderBottom: "72px solid #EF4444",
            borderLeft: "28px solid transparent",
            transform: "rotate(-20deg)",
            position: "absolute",
            top: "62px",
            right: "-19px",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="rounded-tr-2xl"
        >
          <span
            style={{
              fontWeight: "600",
              fontSize: "12px",
            }}
            className="absolute left-[50px] top-[24px] "
          >
            Make The Best Financial Decision
          </span>
        </div>
      </div>
      <div className="w-[256px] h-[71px] bg-red-500 flex items-center justify-center absolute top-[135px] left-[278px] rounded-tl-[28px]  rounded-bl-[28px] z-0">
        <span className="   bg-red-500 flex items-center space-x-4 rounded-tr-lg  rounded-br-lg rounded-tl-[28px]  rounded-bl-lg">
          <img
            src={react5}
            className="w-[240px] h-[22px] rotate-[45deg] rounded-tl-[28px] rounded-bl-[28px]"
            alt=""
          />
          <img src={line5} className="" alt="" />
          <img src={star7} alt="" className="w-[41px] h-[41px]" />
          <img src={line6} alt="" />
          <span className="flex justify-center flex-col items-center text-center w-[218px] h-[38px]">
            <span className="font-semibold text-[11px]">Ultra Premium</span>
            <span className="text-sm">Free Trial</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default FinanceSection;
