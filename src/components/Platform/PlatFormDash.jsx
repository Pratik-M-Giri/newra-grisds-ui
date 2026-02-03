import React from "react";

import CenterImg from "../../assets/dashboard.png";
import LeftTop from "../../assets/platform2.png";
import LeftBottom from "../../assets/platform4.png";
import RightTop from "../../assets/platform3.png";
import RightBottom from "../../assets/platform5.png";
import Cleanenergy from "./Cleanenergy";

const PlatFormDash = () => {
  return <>
    <section className="relative w-full bg-[#F4F5F7] py-32 -mt-80 overflow-hidden flex justify-center items-center min-h-[800px]">

      {/* 🟢 MAIN WRAPPER - Ha sagle photos eksobat center madhe thevel */}
      <div className="relative w-full max-w-[1200px] flex justify-center items-center">
        
        {/* CENTER BIG IMAGE */}
        <div className="relative z-10">
          <img
            src={CenterImg}
            alt="center dashboard"
            className="w-[900px] h-auto" 
          />
        </div>

        {/* LEFT TOP - Photo sarkha thoda aat ghetlay overlap sathi */}
        <img
          src={LeftTop}
          alt="left-top overlay"
          className="
            absolute 
            z-20
            left-[5%] 
            top-[10%] 
            w-[260px]
          "
        />

        {/* LEFT BOTTOM - Thoda dashboard chya border var overlap kela ahe */}
        <img
          src={LeftBottom}
          alt="left-bottom overlay"
          className="
            absolute 
            z-20
            left-[2%] 
            bottom-[5%] 
            w-[230px]
          "
        />

        {/* RIGHT TOP - Right side la overlap effect */}
        <img
          src={RightTop}
          alt="right-top overlay"
          className="
            absolute 
            z-20
            right-[8%] 
            top-[25%] 
            w-[220px]
          "
        />

        {/* RIGHT BOTTOM - Ekdum photo sarkha khali placement */}
        <img
          src={RightBottom}
          alt="right-bottom overlay"
          className="
            absolute 
            z-20
            right-[5%] 
            bottom-[-5%] 
            w-[250px]
          "
        />

      </div>

    </section>

    <section>
<Cleanenergy/>

    </section>
  </>
};

export default PlatFormDash;