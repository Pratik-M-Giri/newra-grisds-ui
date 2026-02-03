import React from "react";
import { motion } from "framer-motion";

// 👉 ASSETS
import poweringDiagram from "../../assets/Powering.png";
import poweringRightImg from "../../assets/poweringrigh.jpg";
import handIcon from "../../assets/Dashboardcurve.png"; 
import boxIcon from "../../assets/Onboard.png";
import docIcon from "../../assets/Filing.png";
import screenIcon from "../../assets/Aggregator.png";

const Powering = () => {
  // 🟢 Exact Reference Style: 259x76, padding 12, border 0.8
  const cardBaseStyle = "w-[259px] h-[76px] rounded-[20px] p-[12px] flex items-center gap-[8px] border-[0.8px] border-white/40 backdrop-blur-[20px] absolute z-50 bg-transparent shadow-[inset_2px_2px_6px_0px_rgba(255,255,255,0.02)]";
  
  // 🟢 Left PNG Style: 52x52, padding 14, border 0.5
  const iconBoxStyle = "w-[52px] h-[52px] rounded-[100px] border-[0.5px] border-white/20 bg-white/10 flex items-center justify-center shrink-0 shadow-sm";
  
  // 🟢 Dot Style
  const dotStyle = "absolute w-2.5 h-2.5 rounded-full bg-[#F79050] shadow-[0_0_10px_#F79050] z-[60]";

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#F6FBFB]">
      
      {/* 🟢 SEAMLESS GRADIENT - Niche shift kela ahe line avoid karnyasathi */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          left: '-150px',
          top: '60%', // Thoda azun niche ghetlay
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(40, 184, 180, 0.3) 0%, rgba(40, 184, 180, 0) 80%)',
          filter: 'blur(100px)',
          opacity: '0.4',
          zIndex: 1
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ================= LEFT SIDE: OVERLAY DATA ================= */}
          <div className="w-full lg:w-1/2 flex justify-center relative min-h-[500px]">
            <div className="relative w-[500px] h-[450px] flex justify-center items-center">
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <g stroke="rgba(157, 157, 157, 0.9)" strokeWidth="1.5" strokeDasharray="4,4" fill="none">
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8 }} d="M 194 88 L 306 158" />
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} d="M 306 158 L 194 228" />
                  <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1 }} d="M 194 228 L 306 298" />
                </g>
              </svg>

              <img src={poweringDiagram} alt="Diagram" className="w-[800px] h-auto object-contain relative z-20 mt-30 opacity-100" />

              {/* BOX 1: TOP LEFT */}
              <div className={`${cardBaseStyle} top-[50px] left-[-70px]`}>
                <div className={iconBoxStyle}>
                  <img src={handIcon} alt="Onboard" className="w-full h-full p-[14px] object-contain" />
                </div>
                <div className="w-[175px] h-[44px] flex items-center">
                  <p className="text-[#121212] text-[14px] leading-[22px] font-normal" style={{ fontFamily: 'Glonto' }}>
                    Onboard Renewable Energy Assets
                  </p>
                </div>
                <div className={`${dotStyle} right-[-5px] top-1/2 -translate-y-1/2`} />
              </div>

              {/* BOX 2: MIDDLE RIGHT */}
              <div className={`${cardBaseStyle} top-[120px] right-[-70px]`}>
                <div className={`${dotStyle} left-[-5px] top-1/2 -translate-y-1/2`} />
                <div className={iconBoxStyle}>
                  <img src={boxIcon} alt="Subscriptions" className="w-full h-full p-[14px] object-contain" />
                </div>
                <div className="w-[175px] h-[44px] flex items-center">
                  <p className="text-[#121212] text-[14px] leading-[22px] font-normal" style={{ fontFamily: 'Glonto' }}>
                    Enable Long-Term Green Power Subscriptions
                  </p>
                </div>
              </div>

              {/* BOX 3: MIDDLE LEFT */}
              <div className={`${cardBaseStyle} top-[190px] left-[-70px]`}>
                <div className={iconBoxStyle}>
                  <img src={docIcon} alt="Regulations" className="w-full h-full p-[14px] object-contain" />
                </div>
                <div className="w-[175px] h-[44px] flex items-center">
                  <p className="text-[#121212] text-[14px] leading-[22px] font-normal" style={{ fontFamily: 'Glonto' }}>
                    Manage Regulations & Compliance End-to-End
                  </p>
                </div>
                <div className={`${dotStyle} right-[-5px] top-1/2 -translate-y-1/2`} />
              </div>

              {/* BOX 4: BOTTOM RIGHT */}
              <div className={`${cardBaseStyle} top-[260px] right-[-70px]`}>
                <div className={`${dotStyle} left-[-5px] top-1/2 -translate-y-1/2`} />
                <div className={iconBoxStyle}>
                  <img src={screenIcon} alt="Dashboards" className="w-full h-full p-[14px] object-contain" />
                </div>
                <div className="w-[175px] h-[44px] flex items-center">
                  <p className="text-[#121212] text-[14px] leading-[22px] font-normal" style={{ fontFamily: 'Glonto' }}>
                    Deliver Full Transparency Through Dashboards
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE: CONTENT ================= */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="mb-8 w-full rounded-[24px] overflow-hidden">
              <img src={poweringRightImg} alt="Powering" className="w-full h-auto object-cover" />
            </div>
            <p className="text-[#2D50A1] font-bold text-xs mb-2 uppercase tracking-widest">About Us</p>
            <h2 className="text-[#121212] text-[48px] lg:text-[54px] leading-[1.1] mb-6 font-medium tracking-tight" style={{ fontFamily: 'Glonto' }}>
              Powering change
            </h2>
            <p className="text-[#0e0707] text-[18px] font-medium leading-snug mb-4">Sustainability must be practical and built to last.</p>
            <p className="text-[#5C5C5C] text-[16px] leading-relaxed">NewRa Grids simplifies onboarding so businesses can switch to green power without friction.</p>
            <button className="mt-8 px-10 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#09193C] to-[#2D50A1]">
              Learn more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Powering;