import React from 'react';
import turbineBg from "../../assets/HomeForm.png"; 
import Subtitles from './Subtitles';

const HomeForm = () => {
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

  return <>

<section>
  <Subtitles/>
</section>

    <section className="w-full flex items-center justify-center bg-white overflow-hidden py-10">
      <div 
        className="relative flex items-center justify-center"
        style={{ 
          width: '80vw', 
          height: '800px',
          backgroundImage: `url(${turbineBg})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center -200px', 
          borderRadius: '20px',
        }}
      >
        {/* Glassmorphism Form Box */}
        <div 
          className="relative flex flex-col items-center z-10"
          style={{ 
            width: '992px',
            height: '520px', // Adjusted height to accommodate centered button
            padding: '40px',
            marginTop: '100px',
            borderRadius: '10px',
            background: "radial-gradient(98.05% 261.61% at 1.95% 3.59%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
            backdropFilter: "blur(42px)",
            WebkitBackdropFilter: "blur(42px)",
            border: '0.8px solid rgba(255, 255, 255, 1)',
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

            {/* LOWER AREA: TYPE & CENTERED BUTTON */}
            <div className="w-full flex flex-col items-center gap-8 mt-2">
              
              {/* Radio Group Centered */}
              <div className="flex items-center gap-6">
                <span className="text-[12px] font-medium text-[#121212]">
                  Type: <span className="text-[#FF383C]">*</span>
                </span>
                <div className="flex gap-4">
                  {['Green power for business', 'Green power for my home / society', 'Partnering as a generator'].map((label, i) => (
                    <label key={i} className="flex items-center gap-2 text-[11px] cursor-pointer text-[#121212]">
                      <input type="radio" name="type" className="accent-[#2D50A1]" defaultChecked={i === 0} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Request Demo Button Centered */}
              <button 
                type="submit"
                className="px-12 py-3 rounded-full text-white text-[14px] font-medium transition-transform active:scale-95 shadow-md"
                style={{ 
                  background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)",
                  minWidth: '220px'
                }}
              >
                Request demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
};

export default HomeForm;