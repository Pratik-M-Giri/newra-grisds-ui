import React from 'react';
import { motion } from 'framer-motion';

// 👉 ASSETS IMPORT
import dashboardImg from "../../assets/dashboard.png"; 
import procurementImg from "../../assets/procurement.png";
import complianceImg from "../../assets/compiliance.png";
import billingImg from "../../assets/billinganalysis.png";
import sustainabilityImg from "../../assets/sustainbility.png";

const NrgPlatForm = () => {
  // Nodes data for the small ecosystem below
  const nodes = [
    { id: 1, src: procurementImg, top: "0px", left: "0px", dotSide: "right" },
    { id: 2, src: complianceImg, top: "180px", left: "0px", dotSide: "right" },
    { id: 3, src: billingImg, top: "90px", left: "300px", dotSide: "left" },
    { id: 4, src: sustainabilityImg, top: "270px", left: "300px", dotSide: "left" },
  ];

  return (
    <div className="w-full bg-[#F9FBFF]">
      
      {/* ================= SECTION 1: NRG PLATFORM (NO CHANGES) ================= */}
      <section className="relative w-full py-24 overflow-visible">
        
        {/* 🌊 BACKGROUND GLOW */}
        <div
          className="absolute left-[-250px] top-[40%] transform -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(40, 184, 180, 0.12) 0%, rgba(40, 184, 180, 0) 70%)",
            filter: "blur(100px)",
          }}
        />

        <div className="relative max-w-[1240px] mx-auto px-6 z-10">
          
          {/* TOP HEADER */}
          <div className="text-center mb-20">
            <p className="mb-4" style={{ fontFamily: "Instrument Sans", fontWeight: 600, fontSize: "20px", color: "rgba(45, 80, 161, 1)" }}>
              NRG Platform
            </p>
            <h2 className="mb-6" style={{ fontFamily: "Glonto", fontSize: "36px", color: "#121212" }}>
              Energy as Automated, Affordable, Sustainable Service
            </h2>
            <button className="px-10 py-2.5 bg-[#09193C] text-white rounded-full text-sm font-medium shadow-md">
              Learn more
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT SIDE: ECOSYSTEM NODES */}
            <div className="lg:col-span-4 -ml-10 space-y-12 lg:pt-10">
              <div className="max-w-[326px] bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <h3 className="mb-3 font-bold text-[#121212]" style={{ fontFamily: "Glonto", fontSize: "18px" }}>
                  About NRG Grids platform
                </h3>
                <p className="text-[14px] text-gray-500 leading-[22px]" style={{ fontFamily: "Instrument Sans" }}>
                  The NRG platform functions as a unified operating layer that connects renewable energy generation into a single, automated framework.
                </p>
              </div>

              {/* 👇 ADDED: MINI DIGITAL ECOSYSTEM (CHOTA ADJUST KELA AAHE) */}
              <div className="pt-4">
                <p className="text-[18px] mb-8 font-medium text-[#121212]" style={{ fontFamily: "Glonto" }}>
                   Our digital ecosystem simplifies
                </p>
                <div className="relative w-full h-[350px] scale-[0.85] origin-top-left">
                    {/* SVG Dotted Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
                        <g stroke="rgba(157, 157, 157, 1)" strokeWidth="0.5" strokeDasharray="2,2">
                            <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} d="M 140 28 L 300 118" fill="none" />
                            <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} d="M 140 208 L 300 118" fill="none" />
                            <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} d="M 140 208 L 300 298" fill="none" />
                        </g>
                    </svg>

                    {/* Compact Nodes */}
                    {nodes.map((node) => (
                        <div key={node.id} className="absolute flex items-center justify-center bg-white"
                             style={{ top: node.top, left: node.left, width: "139px", height: "56px", borderRadius: "10px", border: "0.8px solid rgba(0,0,0,0.08)", boxShadow: "0px 4px 12px rgba(0,0,0,0.03)", zIndex: 10 }}>
                            <div className="w-full h-full overflow-hidden rounded-[10px]">
                                <img src={node.src} alt="node" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 z-20"
                                 style={{ width: "10px", height: "10px", [node.dotSide]: "-14px", borderRadius: "100px", background: "linear-gradient(136.38deg, #F79050 0%, #FFF8F5 207.62%)", backdropFilter: "blur(20px)", border: "0.5px solid rgba(255, 255, 255, 0.3)" }}
                            />
                        </div>
                    ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: DASHBOARD & GLASS LABELS */}
            <div className="lg:col-span-8 relative flex flex-col items-center">
              <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl border border-gray-100 w-full overflow-visible">
                <img src={dashboardImg} alt="NRG Dashboard" className="w-full h-[600px] rounded-[2.2rem]" />

                {/* 🏷️ BOTTOM LEFT: GOVERNS BILLING */}
                <div 
                  className="absolute bottom-[5%] left-[30px] z-50 flex items-center gap-3 shadow-xl" 
                  style={{ 
                    width: "223px", height: "64px", borderRadius: "10px", padding: "12px",
                    background: "radial-gradient(98.05% 261.61% at 1.95% 3.59%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                    backdropFilter: "blur(42px)", 
                    border: "0.8px solid rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <div className="flex items-center justify-center min-w-[24px] h-[24px] rounded-full" style={{
                    background: "linear-gradient(133.42deg, #FFFFFF 0%, #2D50A1 170.44%)",
                  }}>
                    <svg width="10" height="7" viewBox="0 0 11 8" fill="none">
                      <path d="M1 4L4 7L10 1" stroke="rgba(45, 80, 161, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ fontFamily: "Instrument Sans", fontWeight: 500, fontSize: "12px", lineHeight: "16px",   color: "rgba(45, 80, 161, 1)" }}>
                    Governs billing, settlement & reconciliation
                  </p>
                </div>

                {/* 🏷️ BOTTOM RIGHT: SIMPLICITY */}
                <div 
                  className="absolute bottom-[5%] right-[20px] z-50 flex items-center gap-3 shadow-xl" 
                  style={{ 
                    width: "223px", height: "64px", borderRadius: "10px", padding: "12px",
                    background: "radial-gradient(98.05% 261.61% at 1.95% 3.59%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                    backdropFilter: "blur(42px)", 
                    border: "0.8px solid rgba(255, 255, 255, 0.4)"
                  }}
                >
                  <div className="flex items-center justify-center min-w-[24px] h-[24px] rounded-full" style={{
                    background: "linear-gradient(133.42deg, #FFFFFF 0%, #2D50A1 170.44%)",
                  }}>
                    <svg width="10" height="7" viewBox="0 0 11 8" fill="none">
                      <path d="M1 4L4 7L10 1" stroke="rgba(45, 80, 161, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ fontFamily: "Instrument Sans", fontWeight: 500, fontSize: "12px", lineHeight: "16px", color: "rgba(45, 80, 161, 1)" }}>
                    What users experience is simplicity.
                  </p>
                </div>
              </div>

              {/* 🎯 BOTTOM TAGLINE */}
              <div className="mt-16 z-30 flex justify-center w-full">
                <div style={{
                  width: "713px", height: "48px", borderRadius: "10px", padding: "12px",
                  border: "0.8px solid rgba(255, 255, 255, 0.4)",
                  background: "radial-gradient(98.05% 261.61% at 1.95% 3.59%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                  backdropFilter: "blur(42px)", display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <p className="text-center" style={{ fontFamily: "Urbanist", fontWeight: 600, fontSize: "15px", color: "#1D3557" }}>
                    At its core the NRG platform is built to manage complexity without transferring it to the user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NrgPlatForm;