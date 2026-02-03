

import React from 'react';
import turbineBg from "../../assets/HomeForm.png"; 

const SolutionForm = () => {
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
    // Section ko 'w-full' rakha hai taaki ye poori screen cover kare
    <section className="w-full flex items-center justify-center bg-white overflow-hidden">
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          width: '80vw', // 100% Viewport Width - Ekdum edge to edge
          height: '800px',
          // borderRadius: '0px', // Border radius removed
          backgroundImage: `url(${turbineBg})`,
          backgroundSize: 'cover', // Cover se width poori fill hogi
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center -200px', 
          borderRadius: '20px',
        }}
      >
        {/* Form Box - Same dimensions as before */}
    <div 
  className="relative flex flex-col items-center z-10"
  style={{ 
    width: '992px',
    height: '478px',
    padding: '40px',
    marginTop: '100px',
    borderRadius: '24px', 
    
    // Background ekdam transparent (0.1) kela ahe jyamule aar-paar disel
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)",
    
    // Blur thoda kami kela (42px -> 20px) karan khup jaast blur mule 'aar-paar' disat nahi
    backdropFilter: "blur(20px) saturate(180%)", 
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    
    // Border la ekdam sharp white line dili ahe reflection sathi
    border: '1px solid rgba(255, 255, 255, 0.4)',
    
    // Box shadow mule glass hawaat तरंगल्यासारखा disel
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
    
    // Subtle inner glow
    outline: "none"
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

{/* Type Selection & Button Section */}
<div className="w-full max-w-[830px] flex flex-col items-center mt-6 gap-8">
  
  {/* Radio Buttons - Center aligned as per photo */}
  <div className="flex items-center gap-8 justify-center">
    <span className="text-[14px] font-semibold text-[#121212]">
      Type: <span className="text-[#FF383C]">*</span>
    </span>
    <div className="flex gap-6">
      {['Green power for business', 'Green power for my home / society', 'Partnering as a generator'].map((label, i) => (
        <label key={i} className="flex items-center gap-2.5 text-[12px] font-medium text-[#121212] cursor-pointer group">
          <input 
            type="radio" 
            name="type" 
            className="w-4 h-4 accent-[#09193C] cursor-pointer" 
            defaultChecked={i === 0} 
          />
          <span className="group-hover:opacity-70 transition-opacity">{label}</span>
        </label>
      ))}
    </div>
  </div>

  {/* Button - Exact Specs (160x30) */}
  <button 
    type="submit"
    className="flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg"
    style={{ 
      width: '160px',
      height: '30px',
      borderRadius: '20px',
      paddingTop: '4px',
      paddingRight: '4px',
      paddingBottom: '4px',
      paddingLeft: '12px',
      background: 'linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    <span style={{
      width: '87px',
      height: '22px',
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '22px',
      letterSpacing: '-2%',
      color: '#FFFFFF',
      textAlign: 'center',
      display: 'inline-block'
    }}>
      Request 
    </span>
  </button>
</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SolutionForm;