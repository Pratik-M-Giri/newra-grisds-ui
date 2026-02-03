import React from "react";
import { motion } from 'framer-motion';

import procurementImg from "../../assets/procurement.png";
import complianceImg from "../../assets/compiliance.png";
import billingImg from "../../assets/billinganalysis.png";
import sustainabilityImg from "../../assets/sustainbility.png";

const Cleanenergy = () => {
    const nodes = [
        { id: 1, src: procurementImg, top: "0px", left: "0px", dotSide: "right" },
        { id: 2, src: complianceImg, top: "180px", left: "0px", dotSide: "right" },
        { id: 3, src: billingImg, top: "90px", left: "300px", dotSide: "left" },
        { id: 4, src: sustainabilityImg, top: "270px", left: "300px", dotSide: "left" },
    ];

    return (
        <section className="relative w-full bg-[#F4F5F7] py-24 overflow-hidden">
            
            {/* 🟢 SEAMLESS BACKGROUND GRADIENT (Ekdum Light ani Soft) */}
            <div 
                className="absolute pointer-events-none"
                style={{
                    width: '800px',
                    height: '600px',
                    left: '-200px',
                    top: '40%', 
                    background: 'radial-gradient(circle, rgba(40, 184, 180, 0.15) 0%, rgba(40, 184, 180, 0) 70%)',
                    filter: 'blur(120px)',
                    zIndex: 0
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">

                {/* ================= TOP 2 CARDS ================= */}
                <div className="grid md:grid-cols-2 gap-15">
                    <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] text-black leading-relaxed border border-white/50">
                        <h3 className="font-semibold text-xl mb-4 text-[#0B1C3D]">
                            One system, aligned incentives
                        </h3>
                        <p className="text-[#5B6472]">
                            GES and SDP enter the platform from different points, but operate
                            within the same underlying framework.
                        </p>
                        <p className="mt-4 text-[#5B6472]">
                            This consistency aligns incentives, reduces friction, and allows
                            participation to scale without redesigning processes for each new entrant.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] text-black leading-relaxed border border-white/50">
                        <h3 className="font-semibold text-xl mb-4 text-[#0B1C3D]">
                            Built for endurance
                        </h3>
                        <p className="text-[#5B6472]">
                            The platform is designed for long-term operation.
                        </p>
                        <p className="mt-4 text-[#5B6472]">
                            Standardisation supports regulatory change. Automation limits
                            operational drift. Transparency builds trust across the ecosystem
                            as scale increases.
                        </p>
                        <p className="mt-4 text-[#5B6472]">
                            This focus on durability ensures clean energy adoption remains viable at enterprise scale.
                        </p>
                    </div>
                </div>

                {/* ================= MAIN SECTION ================= */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ===== LEFT ECOSYSTEM FLOW ===== */}
                    <div className="pt-4 lg:ms-10">
                        <p className="text-[22px] mb-12 font-medium text-[#121212]" style={{ fontFamily: "Glonto" }}>
                            Our digital ecosystem simplifies
                        </p>
                        
                        <div className="relative w-full h-[380px] scale-[0.95] origin-top-left">
                            {/* SVG Dotted Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 5 }}>
                                <g stroke="rgba(157, 157, 157, 0.4)" strokeWidth="1" strokeDasharray="4,4">
                                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} d="M 145 28 L 295 118" fill="none" />
                                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} d="M 145 208 L 295 118" fill="none" />
                                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} d="M 145 208 L 295 298" fill="none" />
                                </g>
                            </svg>

                            {/* Compact Nodes */}
                            {nodes.map((node) => (
                                <div key={node.id} className="absolute flex items-center justify-center bg-white"
                                    style={{ 
                                        top: node.top, 
                                        left: node.left, 
                                        width: "145px", 
                                        height: "58px", 
                                        borderRadius: "12px", 
                                        border: "1px solid rgba(0,0,0,0.05)", 
                                        boxShadow: "0px 10px 25px rgba(0,0,0,0.04)", 
                                        zIndex: 10 
                                    }}>
                                    <div className="w-full h-full overflow-hidden rounded-[12px]">
                                        <img src={node.src} alt="node" className="w-full h-full object-cover" />
                                    </div>
                                    
                                    {/* Orange Glowing Dots */}
                                    <div className="absolute top-1/2 -translate-y-1/2 z-20 shadow-[0_0_10px_rgba(247,144,80,0.5)]"
                                        style={{ 
                                            width: "10px", 
                                            height: "10px", 
                                            [node.dotSide]: "-5px", 
                                            borderRadius: "100px", 
                                            background: "linear-gradient(135deg, #F79050 0%, #FAD7C1 100%)",
                                            border: "1.5px solid white"
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== RIGHT CONTENT ===== */}
                    <div className="lg:ps-10 space-y-10">
                        <h2 className="text-[36px] font-semibold text-[#0B1C3D] leading-[1.2] tracking-tight">
                            Clean energy becomes dependable only when the systems behind it are designed for execution.
                        </h2>

                        {/* GLASS CARD */}
                        <div
                            className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-[24px] p-8 space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
                        >
                            <h4 className="text-[22px] font-semibold text-[#0B1C3D]">
                                Designed as an operating system
                            </h4>

                            <p className="text-[15px] text-[#5B6472] leading-relaxed">
                                At its core, the NRG platform is built to manage complexity without transferring it to the user.
                                Instead of requiring enterprises or producers to navigate multiple counterparties,
                                regulatory bodies, and operational steps, the platform absorbs this complexity
                                through defined processes, automation, and controls.
                            </p>

                            <div className="space-y-4 pt-2">
                                {[
                                    "What users experience is simplicity.",
                                    "What the system manages is execution.",
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#E6F7F7] shrink-0">
                                            <svg className="w-4 h-4 text-[#28B8B4]" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className="text-[16px] text-[#121212] font-medium">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cleanenergy;