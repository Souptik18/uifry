import React from "react";
import star2 from "../../assets/Star 2.png";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import gradient from "../../assets/gradient.png";
import designCircle from "../../assets/circle.png";
function PhoneDisplay() {
  return (
    <>
      <div className="relative flex justify-center items-center mt-12 lg:mt-0 w-[442px] h-[545px]">
        <img
          src={gradient}
          alt="gradient"
          className="absolute w-[280px] h-[500px] bottom-[-94px] right-[28px] z-0"
          style={{ rotate: "200deg" }}
        />
        <img
          src={iphone1}
          className="absolute"
          style={{
            width: "483px",
            height: "684px",
            top: "0px",
            left: "0px",
            zIndex: 10,
            rotate: "0deg",
          }}
          alt="iphone1"
        />
        <img
          src={designCircle}
          className="absolute"
          style={{
            rotate: "-4deg",
            width: "410px",
            height: "508px",
            top: "100px",
            left: "158px",
            zIndex: 1,
          }}
          alt="design circle"
        />
        <img
          src={iphone2}
          className="absolute"
          style={{
            width: "683px",
            height: "684px",
            top: "80px",
            left: "100px",
            zIndex: 4,
          }}
          alt="iphone2"
        />
        <img
          src={designCircle}
          className="absolute"
          style={{
            rotate: "-18deg",
            width: "310px",
            height: "520px",
            top: "100px",
            left: "208px",
            zIndex: 1,
          }}
          alt="design circle"
        />
        <img
          src={iphone1}
          className="absolute"
          style={{
            width: "683px",
            height: "684px",
            top: "160px",
            left: "200px",
            zIndex: 3,
          }}
          alt="iphone3"
        />
        <img
          src={designCircle}
          className="absolute"
          style={{
            rotate: "-10deg",
            width: "283px",
            height: "410px",
            top: "190px",
            left: "218px",
            zIndex: 1,
          }}
          alt="design circle"
        />
        <img
          src={star2}
          className="absolute w-12 h-12 top-[590px] left-[130px] z-1"
          alt="right star"
        />
      </div>
    </>
  );
}

export default PhoneDisplay;
