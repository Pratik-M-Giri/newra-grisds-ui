import React, { useState } from 'react';
import puzzleImg from "../../assets/Solutionhome.png"; 
import socketImg from "../../assets/solutionplug.png"; 
import SolutionSubtitle from './SolutionsSubtitle';

const SolutionsHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const solutionSteps = [
    { id: "01.", title: "Engage the system" },
    { id: "02.", title: "One platform. Aligned incentives." },
    { id: "03.", title: "One platform. Aligned incentives." },
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
      {/* SECTION 1: OUR SOLUTIONS */}
      <section className="w-full pt-52 pb-20 px-4 md:px-10">
        <div className="max-w-[1344px] mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <p className="mb-2" style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600, fontSize: "20px", color: "rgba(45, 80, 161, 1)" }}>
              A Structured Energy System
            </p>
            <h2 className="mb-2" style={{ fontFamily: "Glonto, sans-serif", fontWeight: 400, fontSize: "32px", color: "rgba(18, 18, 18, 1)" }}>
              Our Solutions
            </h2>
            <p className="max-w-[914px]" style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "rgba(18, 18, 18, 1)" }}>
              Clean energy adoption becomes scalable only when demand and supply operate within a single, well-defined system. NRG structures renewable energy not as a series of transactions or projects, but as an integrated platform that aligns consumers, producers, and regulatory processes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
            <div className="flex flex-col rounded-[12px]" style={{ width: "510px", height: "450px", justifyContent: "space-between", padding: "24px", border: "0.5px solid rgba(198, 203, 217, 1)", background: "white" }}>
              {solutionSteps.map((step, index) => (
                <div key={index} onClick={() => setActiveIndex(index)} className={`p-6 rounded-lg transition-all duration-300 cursor-pointer flex flex-col justify-center h-[120px] ${activeIndex === index ? "bg-[#F2F4F7] border border-gray-100 shadow-sm scale-[1.01]" : "bg-transparent border-transparent opacity-60 hover:opacity-100"}`}>
                  <span className="text-[12px] font-medium text-gray-500 block mb-1">{step.id}</span>
                  <h3 style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 500, fontSize: "24px", lineHeight: "32px", color: activeIndex === index ? "rgba(9, 25, 60, 1)" : "#4B5563", width: "414px" }}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6" style={{ width: "614px" }}>
              <div className="rounded-[12px] overflow-hidden shadow-lg h-[250px]">
                <img src={puzzleImg} alt="Solutions" className="w-full h-full object-cover transition-opacity duration-500" />
              </div>
              <div className="bg-white p-10 rounded-[12px] border border-gray-100 shadow-sm">
                <p className="text-gray-600 text-[16px]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
                  Whether the objective is enterprise-grade clean energy procurement or reliable renewable offtake, NRG provides a structured path forward. Select your point of entry, or explore the platform in detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WE SIMPLIFY THE SWITCH */}
      <section className="w-full pt-24 pb-12 px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1344px] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 
              className="text-[#09193C]  -mt-52 leading-[1.2]" 
              style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 500, fontSize: "48px", maxWidth: "600px" }}
            >
              We simplify the switch to<br/> green power by automating 
              <span className="text-[#09193C]"> allocation, billing, compliance & performance tracking</span> 
            </h2>
          </div>
<div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
  {/* Width 380px varun 250px keli sathi perfect zoom-out */}
  <div className="w-[380px] h-auto transition-all duration-300">
    <img 
      src={socketImg} 
      alt="Switch" 
      className="w-full h-auto object-contain opacity-90" 
    />
  </div>
</div>
        </div>
      </section>

      {/* SECTION 3: THREE INFO CARDS (Exact match with photo) */}
      <section className="w-full pb-40 -mt-23 px-4 md:px-10">
        <div className="max-w-[1344px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[12px] border border-[#E2E8F0] shadow-sm flex items-start"
              style={{ minHeight: "260px" }}
            >
              <p 
                className="text-[#1D2939] leading-[28px] whitespace-pre-line"
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "18px", fontWeight: "400" }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SolutionSubtitle/>
    </div>
  );
};

export default SolutionsHome;