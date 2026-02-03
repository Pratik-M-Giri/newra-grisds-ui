import React from "react";
import { motion } from "framer-motion";

// Dashboard Images
import dashboardMain from "../../assets/dashboard.png";
import platformCard1 from "../../assets/platform1.png";
import platformCard2 from "../../assets/platform2.png";
import platformCard3 from "../../assets/platform3.png";
import sideImage from "../../assets/halfnet.png"; 

const OverLapImagesPlatform = () => {
  return (
    <section className="relative w-full bg-[#F4F5F7] py-40 overflow-hidden">
      
      {/* ================= RIGHT SIDE PNG IMAGE (DECORATIVE) ================= */}
      <div className="absolute top-0 -mt-[400px] right-0 h-[120%] pointer-events-none z-0">
        <img 
          src={sideImage} 
          alt="" 
          className="h-full w-auto object-contain object-right opacity-100" 
        />
      </div>

      {/* ================= BACKGROUND GRADIENT BLOB ================= */}
      <div 
        className="absolute pointer-events-none opacity-40"
        style={{
          width: '300px',
          height: '280px',
          right: '-50px',
          bottom: '10%',
          borderRadius: '182.5px',
          background: 'rgba(40, 184, 180, 1)',
          filter: 'blur(100px)',
          zIndex: 1
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32">

        {/* ================= LEFT : DASHBOARD STACK (ZOOMED OUT) ================= */}
        {/* scale-[0.75] makes the photos appear zoomed out/smaller */}
        <div className="relative w-full md:w-1/2 h-[600px] flex items-center justify-center scale-[0.75] origin-center">
          
          {/* Base Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full flex justify-center"
          >
            <img
              src={dashboardMain}
              alt="Main Dashboard"
              className="w-full block h-auto" 
            />
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: -80, y: -100 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute z-20 top-20 left-0 w-[48%]"
          >
            <img src={platformCard1} alt="card" className="w-full block h-auto" />
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 70, y: -70 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute z-30 top-10 right-0 w-[45%]"
          >
            <img src={platformCard2} alt="card" className="w-full block h-auto" />
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: -60, y: 80 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute z-40 bottom-0 left-0 w-[50%]"
          >
            <img src={platformCard3} alt="card" className="w-full block h-auto" />
          </motion.div>
        </div>

        {/* ================= RIGHT : TEXT CONTENT ================= */}
        <div className="w-full md:w-1/2 space-y-10 flex flex-col justify-center">
          <div>
            <p className="text-[22px] text-[#2D50A1] mb-3 font-semibold" style={{ fontFamily: "Instrument Sans, sans-serif" }}>
              How It Works
            </p>

            <h2
              style={{ fontFamily: "Glonto, sans-serif" }}
              className="text-[42px] leading-[50px] font-normal text-[#121212] md:whitespace-nowrap max-w-none"
            >
              How the platform holds it together
            </h2>
          </div>

          <p
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
            className="text-[18px] leading-[28px] text-[#121212] max-w-[550px]"
          >
            The platform is organised around integrated capabilities that
            function as one system. Each capability addresses a specific
            source of execution risk in clean energy delivery.
          </p>

          <div className="pt-8">
            <h1
              style={{ 
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 200,
                background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width:"890px"
              }}
              className="text-[52px] leading-[64px] max-w-[950px]"
            >
              Intelligence is functional, <br />
              not ornamental.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverLapImagesPlatform;