import React from 'react';
import SolutionsGes from './SolutionsGes';

const SolutionsGep = () => {
  const features = [
    {
      id: 1,
      title: "Assured Energy Offtake",
      description: "Access to a verified base of enterprise energy subscribers."
    },
    {
      id: 2,
      title: "Consumer Aggregation & Matching",
      description: "Alignment of generation profiles with suitable demand."
    },
    {
      id: 3,
      title: "Power Sale, Billing & Settlement",
      description: "Centralised invoicing, reconciliation, and settlement management."
    },
    {
      id: 4,
      title: "Open Access Enablement",
      description: "Regulatory coordination and documentation handled within the platform."
    },
    {
      id: 5,
      title: "Revenue Assurance & Compliance Support",
      description: "Reduced administrative burden and improved cash-flow predictability."
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 md:px-16">
      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LEFT CONTENT */}
    <div className="lg:w-1/2 flex flex-col">
  {/* GEP Tag ani Heading madhla gap kami kela */}
 <span 
  className="text-[#2D50A1] font-semibold text-base mb-2 uppercase tracking-wide" 
  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
>
  GEP
</span>
  
  {/* Heading cha bottom margin mb-8 varun mb-4 kela */}
  <h2 
  className="text-[#121212] text-3xl md:text-[32px] leading-[1.1] mb-4" 
  style={{ 
    fontFamily: "Glonto, sans-serif", 
    fontWeight: 400,
    letterSpacing: "-0.02em" // Photo sarkha thoda tight look sathi
  }}
>
  Structured demand <br /> & reliable settlement
</h2>

  {/* Paragraphs madhla gap space-y-6 varun space-y-3 kela */}
  <div className="space-y-3 text-[#475467] text-[16px] leading-relaxed max-w-[540px]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
    <p>
      For renewable energy producers, scale depends on certainty of offtake and clarity of settlement.
    </p>
    <p>
      Fragmented demand, multiple counterparties, and regulatory coordination increase administrative overhead and revenue risk. These constraints limit utilisation and slow expansion.
    </p>
    <p>
      NRG operates as a system layer between generation and consumption — aggregating demand and managing execution centrally.
    </p>
  </div>

  {/* Outcome Card cha top margin mt-10 varun mt-6 kela */}
  <div className="mt-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm max-w-[540px]">
    <h4 className="text-[#121212] font-semibold text-lg mb-2">Partner's outcome</h4>
    <p className="text-[#475467] leading-relaxed">
      Producers benefit from stable demand, simplified operations, and transparent settlement — allowing focus on asset performance and expansion rather than transaction management.
    </p>
  </div>

  {/* Button cha top margin mt-10 varun mt-6 kela */}
  <button className="mt-6 w-fit px-8 py-2.5 border border-[#D0D5DD] rounded-full text-[#121212] font-medium hover:bg-gray-50 transition-all text-sm">
    Partner as a GEP
  </button>
</div>

        {/* RIGHT LIST SECTION */}
        <div className="lg:w-1/2 flex flex-col">
          {features.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex items-start gap-6 py-8 ${index !== features.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ECFDF3] flex items-center justify-center text-[#039855] font-bold text-lg">
                {item.id}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#121212] text-xl font-medium mb-2" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#475467] text-[16px]" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <SolutionsGes/>
    </section>
  );
};

export default SolutionsGep;