import React from 'react';
    import { motion } from 'framer-motion';

    const OurStory = () => {
    // 👉 Timeline remains shifted right with 115px vertical gaps
    const milestones = [
        { 
        id: 1, 
        year: "2023", 
        text: "Conceptualized NewRa Grids with a vision to simplify renewable-energy access.", 
        top: "0px", left: "250px", dotSide: "right" 
        },
        { 
        id: 2, 
        year: "2024", 
        text: "Formed key partnerships with solar and wind farms; launched pilot aggregator model.", 
        top: "115px", left: "600px", dotSide: "left" 
        },
        { 
        id: 3, 
        year: "2025", 
        text: "Developed the NewRa Smart Energy Platform, integrating AI-powered dashboards.", 
        top: "230px", left: "250px", dotSide: "right" 
        },
        { 
        id: 4, 
        year: "2026", 
        text: "Beyond – Expanding to multi-state operations and ESG reporting integration.", 
        top: "345px", left: "600px", dotSide: "left" 
        },
    ];

    return (
        <section className="relative w-full bg-[#FBFBFC] py-24 px-12 overflow-hidden flex justify-center">
        
        {/* 🎨 GRADIENTS ADDED BACK HERE - NO OTHER CODE CHANGED */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
             style={{ background: 'radial-gradient(circle, rgba(40,184,180,0.4) 0%, rgba(40,184,180,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
             style={{ background: 'radial-gradient(circle, rgba(247,144,80,0.3) 0%, rgba(247,144,80,0) 70%)', filter: 'blur(80px)', zIndex: 0 }} />

        <div className="relative w-full max-w-[1300px] flex items-start justify-between" style={{ zIndex: 1 }}>
            
            {/* 👇 LEFT SIDE CONTENT (AS PER IMAGE) */}
            <div className="w-[900px] pt-4">
            <p style={{ fontFamily: "Instrument Sans", fontSize: "16px", color: "#4A6CF7", fontWeight: "600", marginBottom: "12px" }}>
                Our story
            </p>
            <h2 style={{ fontFamily: "Glonto", fontSize: "48px", color: "#121212", lineHeight: "1.1", marginBottom: "24px" }}>
                From idea to execution
            </h2>
            <div style={{ fontFamily: "Instrument Sans", fontSize: "15px", color: "rgba(18,18,18,0.7)", lineHeight: "1.7", marginBottom: "40px" }}>
                <p className="mb-4">
                Energy systems were difficult to navigate, heavy on coordination, and dependent on bespoke execution. This complexity limited participation and slowed adoption, even where intent was strong. From the beginning,
                </p>
                <p>
                NewRa Grids chose infrastructure over improvisation. By focusing on system design, automation, and transparency, clean energy was rethought as something that could work quietly and reliably as part of everyday operations.
                </p>
            </div>
            
            <h3 style={{ 
            fontFamily: "Urbanist, sans-serif", 
            fontWeight: "200", 
            fontSize: "40px", 
            color: "#2B4596", 
            lineHeight: "1.2", 
            marginTop: "60px",
            width:"600px",
            maxWidth: "780px" // 👈 Restricts width to force exactly 2 lines
          }}>
            NewRa Grids began with a refusal to accept the status quo.
          </h3>
            </div>

            {/* 👇 RIGHT SIDE TIMELINE (UNCHANGED POSITIONS) */}
            <div className="relative w-full max-w-[900px]">
            <div className="relative w-full h-[460px]">
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
                <g stroke="rgba(157, 157, 157, 1)" strokeWidth="0.8" strokeDasharray="2,2">
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} 
                    d="M 466 54 L 590 169" fill="none" />
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} 
                    d="M 590 169 L 466 284" fill="none" />
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} 
                    d="M 466 284 L 590 399" fill="none" />
                </g>
                </svg>

                {milestones.map((node) => (
                <div key={node.id} className="absolute flex flex-col"
                    style={{ 
                        top: node.top, 
                        left: node.left, 
                        width: "206px",
                        height: "108px",
                        borderRadius: "20px",
                        border: "0.8px solid rgba(255, 255, 255, 0.3)",
                        padding: "12px",
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        background: "radial-gradient(98.05% 261.61% at 1.95% 3.59%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
                        backdropFilter: "blur(42px)",
                        WebkitBackdropFilter: "blur(42px)",
                        boxShadow: "0px 4px 12px rgba(0,0,0,0.03)", 
                    }}>
                    
                    <p style={{ 
                    fontFamily: "Glonto", fontSize: "14px", lineHeight: "22px", color: "#121212", fontWeight: "400", marginBottom: "4px" 
                    }}>
                    {node.year}
                    </p>

                    <p style={{ 
                    fontFamily: "Instrument Sans", fontSize: "12px", lineHeight: "18px", color: "rgba(18, 18, 18, 0.7)", fontWeight: "400"
                    }}>
                    {node.text}
                    </p>

                    <div className="absolute top-1/2 -translate-y-1/2 z-20"
                        style={{ 
                        width: "10px", height: "10px", [node.dotSide]: "-10px", borderRadius: "100px", 
                        background: "linear-gradient(136.38deg, #F79050 0%, #FFF8F5 207.62%)", 
                        backdropFilter: "blur(20px)", border: "0.5px solid rgba(255, 255, 255, 1)" 
                        }}
                    />
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default OurStory;