import React from 'react';
import socketImg from "../../assets/solutionplug.png"; 

const SolutionsGes = () => {
  const gesFeatures = [
    { 
      id: 1, 
      title: "Community Solar & Wind Access", 
      description: "Shared renewable participation without asset ownership or operational responsibility." 
    },
    { 
      id: 2, 
      title: "Captive & Group Captive Models", 
      description: "Long-term green power through compliant structures, managed end-to-end." 
    },
    { 
      id: 3, 
      title: "Open Access & Green Energy Open Access (GEOA)", 
      description: "Automated regulatory handling and accelerated onboarding." 
    },
    { 
      id: 4, 
      title: "Virtual Power Purchase Agreements (VPPA)", 
      description: "Financial access to renewable energy without physical delivery constraints." 
    },
    { 
      id: 5, 
      title: "Hybrid Energy Supply (Solar + Wind + Storage)", 
      description: "Improved reliability through balanced generation profiles." 
    }
  ];

  const infoCards = [
    { 
      text: "Our platform automates the entire value\nchain — from capacity allocation and\nscheduling to billing, SLDC\ncoordination, and ESG impact tracking." 
    },
    { 
      text: "We aggregate industrial and\ncommercial consumers with our\nrenewable energy partners across\nMaharashtra through a fully digital,\nsubscription-based ecosystem." 
    },
    { 
      text: "Our platform automates the entire\nprocess, from energy allocation, billing,\nand compliances to performance\nanalytics ensuring a seamless transition\nto green power without operational\nburden." 
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* SECTION 1: GES PREDICTABLE ACCESS (Screenshot 2026-02-02 222605.png) */}
      <section className="w-full py-20 px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* LEFT LIST SECTION (Opposite of GEP) */}
          <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            {gesFeatures.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex items-start gap-6 py-6 ${index !== gesFeatures.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ECFDF3] flex items-center justify-center text-[#039855] font-bold text-lg">
                  {item.id}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#121212] text-lg font-medium mb-1" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#475467] text-[15px] leading-snug" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
            <span 
              className="text-[#2D50A1] font-semibold text-base mb-2 uppercase tracking-wide" 
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              GES
            </span>
            
            <h2 
              className="text-[#121212] text-3xl md:text-[32px] leading-[1.1] mb-4" 
              style={{ fontFamily: "Glonto, sans-serif", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              Predictable access <br /> to clean power
            </h2>

            <div className="space-y-4 text-[#475467] text-[16px] leading-relaxed max-w-[540px]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
              <p>
                For enterprises, the challenge is rarely intent. It is risk. Renewable energy procurement often introduces uncertainty through regulatory complexity, long implementation cycles, capital exposure, and ongoing operational involvement. These factors slow decision-making and limit adoption.
              </p>
              <p>
                NRG addresses this by delivering clean energy as a subscription-based service — structured to integrate into existing procurement and operational frameworks.
              </p>
            </div>

            {/* Enterprise Outcome Card */}
            <div className="mt-8 bg-white p-8 rounded-xl border border-gray-100 shadow-sm max-w-[540px]">
              <h4 className="text-[#121212] font-semibold text-lg mb-2">Enterprise outcome</h4>
              <p className="text-[#475467] leading-relaxed">
                Enterprises gain transparent, compliant access to clean energy with no capital expenditure, minimal internal effort, and clearly defined commercial terms. Decision-making shifts from project management to strategic procurement.
              </p>
            </div>

            <button className="mt-8 w-fit px-8 py-2.5 border border-[#D0D5DD] rounded-full text-[#121212] font-medium hover:bg-gray-50 transition-all text-sm">
              Become a GES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsGes;