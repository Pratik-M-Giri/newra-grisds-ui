import React from "react";
import rightPhoto from "../../assets/teamwork.jpg";

const BuiltForEnergy = () => {
  const sectors = [
    "Commercial & Industrial (C&I)",
    "Manufacturing Units",
    "Housing Societies",
    "Individual Homes",
    "Offices & Tech Parks",
    "Goverment/Instituational Areas",
  ];

  return <>
    <section className="relative w-full bg-[#FAF8F6] py-20 overflow-hidden">
      
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(40, 184, 180, 0.4) 0%, transparent 70%)", filter: "blur(80px)" }} />
      
      {/* Sticky Wrapper kadhun flex container kela aahe jyamule height natural hoil */}
      <div className="relative flex flex-col justify-center">
        
        <div className="relative max-w-[1130px] mx-auto px-4 z-10 w-full">
          
          {/* TOP CONTENT */}
          <div className="mb-12">
            <p className="text-[#2D50A1] font-semibold text-sm mb-2 uppercase tracking-wide">
              Built for Energy Stakeholders
            </p>
            <h2 style={{ fontFamily: 'Glonto, sans-serif', fontSize: '32px', fontWeight: '400' }} className="text-[#09193C] mb-4">
              Who we work with
            </h2>
            <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '16px' }} className="text-[#5C6B8A] max-w-[800px]">
              We help industries get cheaper, cleaner power all day.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-10 items-start">
            
            {/* LEFT: List Card */}
            <div 
              className="hide-scrollbar"
              style={{
                width: "510px",
                height: "420px",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                padding: "0 24px",
                background: "rgba(255, 255, 255, 1)",
                backdropFilter: "blur(40px)",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                scrollSnapType: "y mandatory"
              }}
            >
              {sectors.map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-col justify-center border-b border-gray-100 last:border-b-0 shrink-0" 
                  style={{ height: "105px", scrollSnapAlign: "start" }}
                >
                  <span className="text-[#5C6B8A] text-[14px] mb-1">{String(i + 1).padStart(2, "0")}.</span>
                  <span style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "rgba(9, 25, 60, 1)",
                  }}>{item}</span>
                </div>
              ))}
            </div>

            {/* RIGHT: Photo Box */}
            <div 
              style={{
                width: "580px",
                height: "420px",
                borderRadius: "10px",
                padding: "24px",
                background: "rgba(255, 255, 255, 1)",
                border: "1px solid #E5E7EB",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <p className="font-semibold text-[#2D50A1]">Energy transition made simple.</p>
              <img src={rightPhoto} alt="Team" className="w-full h-[250px] object-cover rounded-lg" />
              <div className="text-[20px] text-center flex items-center justify-center gap-2">
                <span>Making</span>
                <div className="w-5 h-5 rounded-full bg-[#C6CBD9]" />
                <span>’s power move</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </section>

<section className="w-full py-16 flex justify-center bg-[#FDFDFD]">
      {/* MAIN CONTAINER: 1300x506 with Left-to-Right Gradient */}
      <div 
        className="relative rounded-[32px] overflow-hidden border border-gray-100 shadow-sm"
        style={{ 
          width: "1300px", 
          height: "506px",
          // ⚪ White to 🟠 Light Orange Gradient (Left to Right)
          background: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 60%, rgba(247, 144, 80, 0.08) 100%)",
        }}
      >
        
        {/* 🟠 TOP-LEFT VERY SUBTLE GLOW (Optional, layout balance sathi) */}
        <div 
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(247, 144, 80, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0
          }}
        />

        {/* CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-20 lg:px-28 items-center gap-16 lg:gap-32">
          
          {/* GES COLUMN */}
          <div className="flex flex-col">
            <h4 className="text-[#2D50A1] font-bold text-lg mb-3 tracking-wide" style={{ fontFamily: "Instrument Sans" }}>
              GES
            </h4>
            <h3 className="text-[#0B1B3A] text-[32px] leading-[40px] font-semibold mb-6" style={{ fontFamily: "Glonto" }}>
              Predictable access to <br /> clean power
            </h3>
            <p className="text-black text-[16px] leading-[24px] mb-8 max-w-[460px] opacity-70" style={{ fontFamily: "Instrument Sans" }}>
              Enterprises gain transparent, compliant access to clean energy with no capital expenditure, minimal internal effort & clearly defined commercial terms.
            </p>
            <div className="flex items-center gap-4">
              <button className="h-[34px] px-8 rounded-full text-white text-sm font-medium transition-transform hover:scale-105"
                style={{ background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)", border: "none", cursor: "pointer" }}>
                Become a GES
              </button>
              <button className="h-[34px] px-8 rounded-full border border-gray-200 bg-[#F8F9FA] text-[#121212] text-sm font-medium hover:bg-gray-100 cursor-pointer">
                Learn more
              </button>
            </div>
          </div>

          {/* GEP COLUMN */}
          <div className="flex flex-col">
            <h4 className="text-[#2D50A1] font-bold text-lg mb-3 tracking-wide" style={{ fontFamily: "Instrument Sans" }}>
              GEP
            </h4>
            <h3 className="text-[#0B1B3A] text-[32px] leading-[40px] font-semibold mb-6" style={{ fontFamily: "Glonto" }}>
              Structured demand & reliable <br /> settlement
            </h3>
            <p className="text-black text-[16px] leading-[24px] mb-8 max-w-[460px] opacity-70" style={{ fontFamily: "Instrument Sans" }}>
              Partners benefit from stable demand, simplified operations, and transparent settlement — allowing focus on asset performance and expansion.
            </p>
            <div className="flex items-center gap-4">
              <button className="h-[34px] px-8 rounded-full text-white text-sm font-medium transition-transform hover:scale-105"
                style={{ background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)", border: "none", cursor: "pointer" }}>
                Partner as a GEP
              </button>
              <button className="h-[34px] px-8 rounded-full border border-gray-200 bg-[#F8F9FA] text-[#121212] text-sm font-medium hover:bg-gray-100 cursor-pointer">
                Learn more
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
};

export default BuiltForEnergy;