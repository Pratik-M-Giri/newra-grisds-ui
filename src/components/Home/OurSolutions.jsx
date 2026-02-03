import React from "react";

// 👉 RIGHT SIDE ASSETS
import plateImg from "../../assets/solutionplate.png";
import sunImg from "../../assets/sun.png";
import labelsImg from "../../assets/Texts.png";
import windImg from "../../assets/solutionwind.png"; 
import Subtitles from "./Subtitles";

// 👉 CONTACT IMAGE
import contactBg from "../../assets/Talktoourteam.jpg";

// 👉 WHATSAPP ICON
import whatsappIcon from "../../assets/wapp.png";

const OurSolutions = () => {
  return (
    <>
      <Subtitles />

      {/* 🌊 GLOBAL WRAPPER — CONTINUOUS GRADIENT */}
      <div className="relative w-full bg-[#F9FBFF] overflow-hidden">

        {/* 🌊 UPDATED LEFT-CENTER TEAL GRADIENT */}
        <div
          className="absolute left-[-250px] top-[40%] transform -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(40, 184, 180, 0.2) 0%, rgba(40, 184, 180, 0) 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* 🟠 NEW RIGHT-BOTTOM ORANGE GRADIENT (As per photo) */}
        <div
          className="absolute right-[-100px] bottom-[-100px] w-[900px] h-[900px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(247, 144, 80, 0.15) 0%, rgba(247, 144, 80, 0) 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* ================= OUR SOLUTIONS ================= */}
        <section className="relative w-full py-16 z-10">
          <div className="relative max-w-[1440px] mx-auto px-6">
            <div className="bg-white rounded-3xl p-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start shadow-sm relative overflow-hidden">

              {/* LEFT CONTENT */}
              <div className="relative z-10">
                <p className="text-base font-bold text-[#2D50A1] mb-4">Our Solutions</p>
                <h2 className="text-4xl font-semibold mb-6 text-[#0B1B3A]">A Structured Energy System</h2>
                
                {/* Vertical gaps reduced here (mb-8 to mb-4) */}
                <p className="text-black text-lg leading-7 mb-4 max-w-xl">
                  Clean energy adoption becomes scalable only when demand and supply operate within a single, well-defined system.
                </p>
                <p className="text-black text-lg leading-7 mb-4 max-w-xl">
                  NRG structures renewable energy not as a series of transactions or projects, but as an integrated platform.
                </p>
                <p className="text-black text-lg leading-7 mb-8 max-w-xl">
                  The platform supports two entry points, each designed around enterprise-grade requirements.
                </p>

                <button style={{
                  width: "120px", height: "30px", borderRadius: "20px", padding: "4px 12px",
                  background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF",
                  fontFamily: "Urbanist, sans-serif", fontWeight: 400, fontSize: "14px", border: "none", cursor: "pointer",
                }}>
                  Learn more
                </button>

                {/* Vertical gap reduced (mt-12 to mt-6) */}
                <p className="mt-8" style={{
                    width: "701px", fontFamily: "Urbanist, sans-serif", fontWeight: 200,
                    fontSize: "40px", lineHeight: "50px", color: "#2D50A1", padding: "8px 12px",
                    WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale",
                  }}>
                  The result is predictability <br /> in timelines, costs, <br /> compliance & outcomes.
                </p>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative min-h-[560px] w-full">
                <img src={sunImg} className="absolute top-0 left-[-40px] w-36 z-10 opacity-80" alt="Sun" />
                
                <img src={windImg} alt="Wind Energy" className="absolute top-10 right-[-50px] w-[450px] z-0 opacity-70"
                  style={{ objectFit: "contain", transform: "scale(1.1)", transformOrigin: "top right" }} />
                
                <img src={labelsImg} className="absolute top-32 right-10 w-[360px] scale-[0.85] z-30" alt="Labels" />

                {/* Subtle Glow behind the plate */}
                <div className="absolute -bottom-20 right-0 w-[450px] h-[250px]"
                  style={{ background: "radial-gradient(circle, rgba(247, 144, 80, 0.1) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 5 }} />

                <img src={plateImg} className="absolute -bottom-14 right-[190px] w-[500px] max-w-none z-20 scale-[1.1]"
                  style={{ transformOrigin: "bottom right" }} alt="Solar Plate" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TALK TO OUR TEAM ================= */}
        <section className="relative w-full py-10 z-10">
          <div className="relative w-full flex justify-center px-6">
            <div className="relative w-full max-w-[1500px] h-[520px] overflow-hidden rounded-2xl shadow-lg"
              style={{ backgroundImage: `url(${contactBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              
              <div className="absolute right-16 top-1/2 -translate-y-1/2 backdrop-blur-xl"
                style={{
                  width: "496px", height: "266px", padding: "40px", borderRadius: "10px",
                  border: "0.8px solid rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.25)",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "24px",
                }}>
                <h3 style={{ fontFamily: "Glonto, sans-serif", fontWeight: 400, fontSize: "32px", lineHeight: "40px", textAlign: "center", color: "#000000" }}>
                  Talk to Our Team
                </h3>
                <p style={{ fontFamily: "Glonto, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", textAlign: "center", color: "#000000" }}>
                  Fill in your details and we’ll take it from there.
                </p>

                <div style={{ width: "100%", display: "flex", gap: "12px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={whatsappIcon} alt="WhatsApp" style={{ width: "22px", height: "22px" }} />
                  </div>
                  <div style={{ flex: 1, height: "44px", borderRadius: "12px", background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", padding: "0 16px" }}>
                    <input type="text" placeholder="+91" style={{ border: "none", outline: "none", background: "transparent", width: "100%", fontSize: "14px", color: "#000" }} />
                  </div>
                </div>

                <button style={{
                    width: "160px", height: "30px", borderRadius: "20px", padding: "4px 12px",
                    background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF",
                    fontFamily: "Glonto, sans-serif", fontWeight: 400, fontSize: "14px", border: "none", cursor: "pointer",
                  }}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default OurSolutions;