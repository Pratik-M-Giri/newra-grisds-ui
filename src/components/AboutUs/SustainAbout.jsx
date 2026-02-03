import React from "react";
// Asset Imports
import LeftImage from "../../assets/sustain.png"; 
import OverlayImage from "../../assets/aboutsustain.png"; 
import turbineBg from "../../assets/HomeForm.png"; 

const SustainAbout = () => {
  // Styles for the Form Inputs
  const inputStyle = {
    width: '403px',
    height: '36px',
    borderRadius: '8px',
    border: '0.5px solid rgba(255, 255, 255, 0.5)',
    padding: '8px 12px',
    background: 'rgba(255, 255, 255, 0.8)', 
    fontFamily: 'Instrument Sans',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '20px',
    outline: 'none',
    color: '#121212',
    position: 'relative'
  };

  const CustomInput = ({ label, type = "text", width = "403px" }) => (
    <div className="relative flex items-center" style={{ width }}>
      <input 
        type={type} 
        className="peer w-full h-full bg-transparent outline-none"
        style={{ ...inputStyle, width: '100%' }}
        placeholder=" " 
      />
      <div className="absolute left-3 pointer-events-none peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden flex items-center gap-1">
        <span className="text-[#121212]/60">{label}</span>
        <span className="text-[#FF383C]">*</span> 
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#FBFBFC]">
      
      {/* ================= SECTION 1: PHILOSOPHY ================= */}
      {/* overflow-visible z-0 taaki iski images niche wale section ke piche ja sakein */}
      <section className="relative w-full flex justify-start items-center overflow-visible py-20 z-0">
        <div className="relative w-full flex flex-col lg:flex-row items-center">
          
          <div className="w-full lg:w-[50%] flex justify-start items-center px-10 relative">
            {/* GRADIENT BLOB */}
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '188px',
                height: '257px',
                borderRadius: '182.5px',
                background: 'rgba(247, 144, 80, 1)',
                filter: 'blur(150px)', 
                left: '-44px',
                top: '100px',
                opacity: 0.8,
                zIndex: -1
              }}
            />
            {/* IN IMAGES KO NICHE WALE SECTION KE PICHE BHEJNE KE LIYE LOW Z-INDEX */}
            <img
              src={LeftImage}
              alt="Sustainability Grid"
              className="w-[100%] h-auto object-contain origin-left relative z-0" 
              style={{ transform: 'scale(0.95)' }} 
            />
            <img
              src={OverlayImage}
              alt="Overlay Detail"
              className="absolute left-1/2 -mt-20 ml-10 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto object-contain pointer-events-none z-0"
            />
          </div>

          <div className="w-full  -mt-[600px] lg:w-[50%] px-12 lg:pl-20 relative z-10">
            <p style={{ fontFamily: "Instrument Sans", fontSize: "20px", color: "rgba(45, 80, 161, 1)", fontWeight: "600", marginBottom: "16px", width: "613px", lineHeight: "100%" }}>
              What we stand for
            </p>
            <h2 style={{ fontFamily: "Glonto, sans-serif", fontSize: "32px", color: "rgba(18, 18, 18, 1)", lineHeight: "40px", fontWeight: "400", marginBottom: "24px", width: "613px" }}>
              Sustainability Philosophy
            </h2>
            <div style={{ fontFamily: "Instrument Sans", fontSize: "16px", color: "rgba(18, 18, 18, 1)", lineHeight: "24px", fontWeight: "400", marginBottom: "60px", width: "613px" }}>
              <p>
                By making renewable energy practical to access, simple to manage, and predictable to operate, broader participation across industries and communities becomes possible. Sustainability is achieved through systems that make cleaner choices the default — consistently and at scale.
              </p>
            </div>
            <h3 style={{ fontFamily: "Urbanist, sans-serif", fontWeight: "100", fontSize: "40px", lineHeight: "56px", width: "566px", background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              At NewRa Grids, sustainability is embedded in execution.
            </h3>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: HOME FORM (OVERLAPPING ON TOP) ================= */}
      {/* -mt (negative margin) is used to pull the form UP over the images */}
      <section className="relative w-full -mt-[480px] flex items-center justify-center overflow-visible pb-20 z-10">
        
        {/* Turbine Background Box */}
        <div 
          className="relative flex items-center justify-center shadow-xl"
          style={{ 
            width: '80vw', 
            height: '800px',
            backgroundImage: `url(${turbineBg})`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -200px', 
            borderRadius: '20px',
            overflow: 'hidden'
          }}
        >
          {/* Glassmorphism Form Box */}
          <div 
            className="relative flex flex-col items-center z-20"
            style={{ 
              width: '992px',
              height: '540px', 
              padding: '40px',
              borderRadius: '24px',
              background: "radial-gradient(98.05% 261.61% at 1.95% 3.59%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
              backdropFilter: "blur(42px)",
              WebkitBackdropFilter: "blur(42px)",
              border: '0.8px solid rgba(255, 255, 255, 0.6)',
            }}
          >
            <div className="text-center mb-8">
              <h2 className="mb-2" style={{ fontFamily: "Glonto", fontSize: "32px", fontWeight: 400, color: "#121212" }}>
                Talk to Our Energy Experts
              </h2>
              <p style={{ fontFamily: "Instrument Sans", fontSize: "16px", color: "rgba(18, 18, 18, 0.8)", maxWidth: "790px" }}>
                Explore how NRG can help you save on power costs, stay compliant, and switch to clean energy—without operational complexity.
              </p>
            </div>

            <form className="flex flex-col items-center w-full" style={{ gap: '24px' }}>
              <div className="grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
                <CustomInput label="First name" />
                <CustomInput label="Last name" />
                <CustomInput label="Phone Number" type="tel" />
                <CustomInput label="Email" type="email" />
              </div>

              <CustomInput label="Company/ Society name" width="830px" />

              <div className="w-full flex flex-col items-center gap-8 mt-4">
                <div className="flex items-center gap-6">
                  <span className="text-[12px] font-medium text-[#121212]">Type: <span className="text-[#FF383C]">*</span></span>
                  <div className="flex gap-4">
                    {['Green power for business', 'Green power for my home / society', 'Partnering as a generator'].map((label, i) => (
                      <label key={i} className="flex items-center gap-2 text-[11px] cursor-pointer text-[#121212]">
                        <input type="radio" name="type" className="accent-[#2D50A1]" defaultChecked={i === 0} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="px-14 py-3 rounded-full text-white text-[14px] font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg"
                  style={{ background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)", minWidth: '220px' }}
                >
                  Request demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainAbout;