import React from "react";
import { motion } from "framer-motion";

// Dashboard Giant Images
import dashboardGiantGEP from "../../assets/dashboard.png";
import dashboardGiantGES from "../../assets/dashboard.png";

// Feature Photo Tags
import tagGEP1 from "../../assets/enable1.png";
import tagGEP2 from "../../assets/enable2.png";
import tagGEP3 from "../../assets/enable3.png.png"; 
import tagGEP4 from "../../assets/enable4.png";

import tagGES1 from "../../assets/enable1.png";
import tagGES2 from "../../assets/enable2.png";
import tagGES3 from "../../assets/enable3.png.png";
import tagGES4 from "../../assets/enable4.png";

const PlatFormEnables = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-20">
          <p className="text-[#2D50A1] font-semibold uppercase text-xs tracking-widest mb-4" style={{ fontFamily: "Instrument Sans, sans-serif" }}>
            Platform outcome
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-[#121212]" style={{ fontFamily: "Glonto, sans-serif" }}>
            What the Platform Enables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          
          {/* ================= LEFT COLUMN: GEP ================= */}
          <div className="flex flex-col">
            {/* Styled as per reference: Instrument Sans, 20px, SemiBold */}
            <h3 className="mb-2" style={{ 
              fontFamily: "Instrument Sans, sans-serif", 
              fontWeight: 600, 
              fontSize: "20px", 
              color: "rgba(45, 80, 161, 1)",
              lineHeight: "100%"
            }}>
              GEP
            </h3>

            {/* Styled as per reference: Glonto, 18px, Regular */}
            <h4 className="mb-6" style={{ 
              fontFamily: "Glonto, sans-serif", 
              fontWeight: 400, 
              fontSize: "18px", 
              color: "rgba(18, 18, 18, 1)",
              lineHeight: "26px"
            }}>
              What the platform enables for GEP
            </h4>

            <div className="space-y-4 mb-24 max-w-sm">
              <p className="text-gray-600 text-sm leading-relaxed">
                For GEP participants, the platform functions as a demand and execution backbone.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The result is stable offtake and operational clarity without managing multiple buyer relationships independently.
              </p>
            </div>

            {/* Visual Container */}
            <div className="relative w-full h-[400px] flex items-center justify-center scale-[0.9]">
               <img src={dashboardGiantGEP} className="w-full h-auto object-contain z-0" alt="" />
               
               <motion.img 
                  initial={{ opacity: 0, x: 50, y: 0 }}
                  whileInView={{ opacity: 1, x: 120, y: -160 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src={tagGEP1} className="absolute z-10 w-60" 
                  alt="GEP Enable 1"
               />
               <motion.img 
                  initial={{ opacity: 0, x: -50, y: 0 }}
                  whileInView={{ opacity: 1, x: -120, y: -60 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  src={tagGEP2} className="absolute z-20 w-60" 
                  alt="GEP Enable 2"
               />
               <motion.img 
                  initial={{ opacity: 0, x: 50, y: 0 }}
                  whileInView={{ opacity: 1, x: 100, y: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src={tagGEP3} className="absolute z-30 w-56" 
                  alt="GEP Enable 3"
               />
               <motion.img 
                  initial={{ opacity: 0, x: -50, y: 0 }}
                  whileInView={{ opacity: 1, x: -100, y: 180 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  src={tagGEP4} className="absolute z-40 w-64" 
                  alt="GEP Enable 4"
               />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: GES ================= */}
          <div className="flex flex-col">
            {/* Styled same as GEP title */}
            <h3 className="mb-2" style={{ 
              fontFamily: "Instrument Sans, sans-serif", 
              fontWeight: 600, 
              fontSize: "20px", 
              color: "rgba(45, 80, 161, 1)",
              lineHeight: "100%"
            }}>
              GES
            </h3>

            {/* Styled same as GEP sub-header */}
            <h4 className="mb-6" style={{ 
              fontFamily: "Glonto, sans-serif", 
              fontWeight: 400, 
              fontSize: "18px", 
              color: "rgba(18, 18, 18, 1)",
              lineHeight: "26px"
            }}>
              What the platform enables for GES
            </h4>

            <div className="space-y-4 mb-24 max-w-sm">
              <p className="text-gray-600 text-sm leading-relaxed">
                For GES participants, the platform acts as an execution and governance layer.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The result is access to clean energy that behaves like dependable infrastructure, not a special project.
              </p>
            </div>

            {/* Visual Container */}
            <div className="relative w-full h-[400px] flex items-center justify-center scale-[0.9]">
               <img src={dashboardGiantGES} className="w-full h-auto object-contain z-0" alt="" />

               <motion.img 
                  initial={{ opacity: 0, x: -50, y: 0 }}
                  whileInView={{ opacity: 1, x: -120, y: -150 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src={tagGES1} className="absolute z-10 w-64" 
                  alt="GES Enable 1"
               />
               <motion.img 
                  initial={{ opacity: 0, x: 50, y: 0 }}
                  whileInView={{ opacity: 1, x: 120, y: -40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  src={tagGES2} className="absolute z-20 w-60" 
                  alt="GES Enable 2"
               />
               <motion.img 
                  initial={{ opacity: 0, x: -50, y: 0 }}
                  whileInView={{ opacity: 1, x: -100, y: 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src={tagGES3} className="absolute z-30 w-56" 
                  alt="GES Enable 3"
               />
               <motion.img 
                  initial={{ opacity: 0, x: 50, y: 0 }}
                  whileInView={{ opacity: 1, x: 110, y: 190 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  src={tagGES4} className="absolute z-40 w-64" 
                  alt="GES Enable 4"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatFormEnables;