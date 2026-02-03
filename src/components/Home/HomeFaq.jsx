import React from 'react';
import windPong from "../../assets/windpong.png"; 
import GoCarbonTitle from './GoCarbonTitle';

const HomeFaq = () => {
  const faqData = [
    {
      question: "What information is required to get started?",
      answer: "Participants typically provide basic organisational details, relevant energy consumption or generation data, and applicable documentation. The platform guides onboarding through structured workflows without requiring complex modelling or manual coordination."
    },
    {
      question: "Do I need specialised energy or regulatory expertise to use the platform?",
      answer: "No. The platform is designed to absorb regulatory and operational complexity, allowing participants to engage through defined processes rather than specialist intervention."
    },
    {
      question: "Can multiple teams or stakeholders access the platform?",
      answer: "Yes. Role-based access and permissions enable multiple teams and counterparties to collaborate with shared visibility while maintaining appropriate controls."
    },
    {
      question: "How is transparency maintained between offtaker and generator?",
      answer: "The platform provides shared visibility into performance, billing, and compliance, ensuring transparency between offtaker and generator."
    }
  ];

  return <>
    <section className="relative w-full py-20 overflow-hidden min-h-[900px] flex flex-col items-center bg-white">
      
      {/* ================= BACKGROUND GLOW (ORANGE BLUR) ================= */}
      <div 
        style={{
          position: "absolute",
          width: "187px",
          height: "188px",
          top: "10%", // Adjusted top for visibility in this section
          left: "-50px",
          borderRadius: "182.5px",
          background: "rgba(247, 144, 80, 1)",
          filter: "blur(120px)", // 500px logic scaled for small container visibility
          opacity: 0.4,
          zIndex: 0
        }}
      />

      {/* ================= BACKGROUND IMAGE (Centered) ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src={windPong} 
          alt="Windmill" 
          className="w-full h-auto object-contain max-h-screen opacity-60" 
          style={{ filter: 'none' }}
        />
      </div>

      {/* HEADER SECTION */}
      <div className="relative z-10 text-center mb-16">
        <p className="text-[#2D50A1] font-semibold text-[20px] mb-3 uppercase tracking-wider" style={{ fontFamily: "Instrument Sans" }}>FAQs</p>
        <h2 className="text-[#121212] text-[42px] font-normal" style={{ fontFamily: "Glonto" }}>Frequently asked questions</h2>
      </div>

      {/* FAQ CONTAINER */}
      <div className="relative z-10 w-full max-w-[1115px] px-4 flex flex-col items-center">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            style={{ 
              width: "100%",
              maxWidth: "1115px",
              padding: "32px 0px",
              borderBottom: "0.5px solid rgba(198, 203, 217, 1)",
              background: "transparent", 
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between"
            }}
          >
            {/* CONTENT */}
            <div style={{ width: "90%", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span 
                style={{ 
                  fontFamily: "Urbanist",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "rgba(9, 25, 60, 1)"
                }}
              >
                {faq.question}
              </span>

              <p 
                style={{ 
                  fontFamily: "Instrument Sans",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(92, 92, 92, 1)"
                }}
              >
                {faq.answer}
              </p>
            </div>

            {/* ================= RIGHT SIDE ARROW CIRCLE ================= */}
            <div 
              style={{ 
                position: "relative",
                width: "30px", 
                height: "30px", 
                borderRadius: "100px",
                background: "linear-gradient(133.42deg, #FFFFFF 0%, #2D50A1 170.44%)",
                flexShrink: 0,
                marginTop: "4px"
              }}
            >
              {/* PROPER BAAN (ARROW WITH STEM) */}
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  position: "absolute",
                  top: "6px",
                  left: "6px"
                }}
              >
                <path 
                  d="M12 5V19M12 19L5 12M12 19L19 12" 
                  stroke="#2D50A1" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
     
    </section>
     <div   className=''  >
        
      <GoCarbonTitle/>
      </div>
  </>
};

export default HomeFaq;