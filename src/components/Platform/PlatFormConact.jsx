import React from "react";


import Asset from "../../assets/platformcontact.png";

// 👉 CONTACT IMAGE
import contactBg from "../../assets/Talktoourteam.jpg";

// 👉 WHATSAPP ICON
import whatsappIcon from "../../assets/wapp.png";

const PlatFormContact = () => {
    return (
        <>
            {/* 🌊 GLOBAL WRAPPER — CONTINUOUS GRADIENT */}
            <div className="relative h-screen bg-[#F9FBFF] overflow-hidden">

                <img
                    src={Asset}
                    alt="pattern"
                    className="absolute top-0 left-0 w-full object-cover pointer-events-none z-0"
                />

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


                {/* ================= TALK TO OUR TEAM ================= */}
                {/* ================= TALK TO OUR TEAM ================= */}
                <section className="relative w-full py-10 z-10 flex justify-center mt-28">
                    <div className="w-full max-w-[1500px] px-18">

                        <div
                            className="relative w-full h-[380px] rounded-2xl shadow-lg overflow-hidden bg-no-repeat bg-center bg-cover flex items-center justify-center"
                            style={{
                                backgroundImage: `url(${contactBg})`,
                            }}
                        >

                            {/* CARD */}
                            <div className="absolute right-16 backdrop-blur-xl"
                                style={{
                                    width: "496px",
                                    height: "266px",
                                    padding: "40px",
                                    borderRadius: "10px",
                                    border: "0.8px solid rgba(255,255,255,0.6)",
                                    background: "rgba(255,255,255,0.25)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "24px",
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

export default PlatFormContact;