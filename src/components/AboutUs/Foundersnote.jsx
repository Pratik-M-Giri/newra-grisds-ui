import React from 'react';
import bulbIcon from "../../assets/bulb.png"; 
import founderImg from "../../assets/solteam.png"; 

const Foundersnote = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-16 overflow-hidden min-h-[1200px]">
      
      {/* ===== TEAL BACKGROUND GLOW ===== */}
      <div 
        className="absolute bottom-[-10%] right-[-5%] pointer-events-none z-0"
        style={{
          width: '800px',
          height: '800px',
          background: 'rgba(40, 184, 180, 0.25)',
          filter: 'blur(300px)',
          borderRadius: '50%',
        }}
      />

      {/* ===== LEFT SIDE DECORATIVE BULB (Exact Specs) ===== */}
      <div 
        className="absolute z-0 pointer-events-none hidden lg:block"
        style={{
          width: '285.5px',
          height: '958px',
          top: '150px', // Adjusted for visual flow
          left: '125px',
          opacity: 1
        }}
      >
        <img 
          src={bulbIcon} 
          alt="Decorative Bulb" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== TOP SECTION: FOUNDER'S NOTE ===== */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-48">
          
          {/* Left Spacer to align with the Bulb Decor */}
          <div className="hidden lg:block w-[350px] flex-shrink-0"></div>

          {/* Right Content Area (Exact Specs) */}
          <div 
            className="flex flex-col gap-[16px]"
            style={{ width: '778px' }}
          >
            {/* Founder Image Box (Exact Specs: 158x158) */}
            <div 
              className="bg-white rounded-[10px] border border-[#C6CBD9] backdrop-blur-[20px] overflow-hidden flex items-center justify-center mb-4"
              style={{ 
                width: '158px', 
                height: '158px',
                boxShadow: 'inset 2px 2px 6px 0px rgba(255, 255, 255, 0.02)'
              }}
            >
                <img 
                  src={founderImg} 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
            </div>
            
            {/* Heading: Glonto Regular 18px */}
            <h2 className="font-['Glonto',_sans-serif] font-[400] text-[18px] leading-[26px] text-[#051129]">
              Founder’s note
            </h2>
            
            {/* Main Text: Instrument Sans Italic 16px */}
            <div className="font-['Instrument_Sans',_sans-serif] font-[400] italic text-[16px] leading-[24px] text-[#1A2E5A] space-y-6">
              <p>We built NewRa Grids with a long-term responsibility in mind.</p>
              
              <p>
                From the beginning, the focus has been on designing energy systems that are dependable, 
                accountable, and capable of enduring real-world use. The objective was never rapid 
                expansion or short-term momentum, but infrastructure that organisations can rely on year after year.
              </p>
              
              <p>
                Energy underpins critical operations and economic activity. Treating it casually introduces risk. 
                At NewRa Grids, clean energy systems are expected to meet the same standards of reliability 
                and discipline as any other core infrastructure.
              </p>

              <p>
                This perspective continues to guide how the platform is designed, how partnerships are chosen, 
                and how decisions are made — with an emphasis on stability, transparency, and long-term alignment.
              </p>

              <p className="text-[#051129] font-semibold not-italic text-right pt-4">~ Dhruv Jain</p>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM SECTION: VISION & MISSION ===== */}
        <div className="relative">
          <div 
            className="mx-auto border-[0.8px] border-gray-200 rounded-[10px] p-[40px] flex flex-col lg:flex-row gap-[24px] bg-white items-stretch"
            style={{ maxWidth: '1270px' }}
          >
            {/* Team Image */}
            <div className="w-full lg:w-[532px] h-[349px] flex-shrink-0">
              <img 
                src={founderImg} 
                alt="Team Unity" 
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>

            {/* Vision/Mission Content */}
            <div className="flex flex-col gap-[24px] w-full lg:w-[634px] justify-between">
              <h3 className="text-[40px] leading-[56px] font-[200] font-['Urbanist',_sans-serif] text-[#1A2E5A]">
                Turning renewable power into <br /> reliable infrastructure
              </h3>

              <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="flex-1 border-[0.5px] border-gray-200 rounded-[10px] p-[24px] flex flex-col gap-[8px]">
                  <h4 className="text-[18px] font-['Glonto'] text-[#051129]">Our vision</h4>
                  <p className="text-[16px] font-['Instrument_Sans'] text-gray-500">
                    To make clean energy a dependable part of everyday operations — accessible, transparent, and built to scale.
                  </p>
                </div>
                <div className="flex-1 border-[0.5px] border-gray-200 rounded-[10px] p-[24px] flex flex-col gap-[8px]">
                  <h4 className="text-[18px] font-['Glonto'] text-[#051129]">Our mission</h4>
                  <p className="text-[16px] font-['Instrument_Sans'] text-gray-500">
                    To simplify clean energy adoption by designing systems that connect producers and consumers through structured execution, automation, and clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Foundersnote;