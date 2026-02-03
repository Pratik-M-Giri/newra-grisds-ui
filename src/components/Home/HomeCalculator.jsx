import React, { useState } from "react";
// 👉 Yahan apna logo import karein (Path sahi kar lena apne folder ke hisaab se)
import nrgLogo from "../../assets/logo.png"; 

const HomeCalculator = () => {
  // Logic: Bill value in Lakhs
  const [bill, setBill] = useState(1.5);

  // Calculation Formulas (Adjust multipliers as needed)
  const totalConsumption = (bill * 7).toFixed(1);
  const savingWithNrg = (bill * 1.6).toFixed(1);
  const yearlySavings = (bill * 1.3).toFixed(1);
  const kwh = Math.round(bill * 661);

  // Slider position percentage
  const maxBill = 5;
  const percentage = (bill / maxBill) * 100;

  return (
    <section className="w-full py-32 flex justify-center bg-[#F6FBFB]">
      <div className="w-full max-w-[1023px] flex flex-col items-center px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <p style={{ fontFamily: "Instrument Sans", fontWeight: 600, fontSize: "20px", color: "#2D50A1", marginBottom: "12px" }}>
            See how much you can save with NRG
          </p>
          <h2 style={{ fontFamily: "Glonto", fontWeight: 400, fontSize: "32px", lineHeight: "40px", color: "#121212", marginBottom: "12px" }}>
            What is your monthly electricity bill?
          </h2>
          <p style={{ fontFamily: "Instrument Sans", fontSize: "16px", color: "#121212", opacity: 0.8 }}>
            We can help you cut down 20–40% cost, reduce carbon footprint and accelerate your business.
          </p>
        </div>

        {/* ================= MAIN CALCULATOR CARD ================= */}
        <div className="w-full bg-white rounded-[24px] shadow-[0px_4px_30px_rgba(0,0,0,0.03)] border border-[#F0F0F0] overflow-hidden">
          
          <div className="p-10 md:p-16">
            <p style={{ textAlign: "center", fontFamily: "Glonto", fontSize: "18px", color: "#121212", marginBottom: "80px" }}>
              Your monthly electricity consumption
            </p>

            {/* ================= DYNAMIC SLIDER AREA ================= */}
            <div className="relative w-full mb-24 px-2">
              <input
                type="range"
                min="0.1"
                max={maxBill}
                step="0.1"
                value={bill}
                onChange={(e) => setBill(parseFloat(e.target.value))}
                className="absolute w-full h-2 opacity-0 cursor-pointer z-30"
              />

              {/* TRACKS */}
              <div style={{ height: "4px", background: "#F2F2F2", borderRadius: "10px" }} />
              <div 
                style={{ position: "absolute", top: 0, left: "8px", width: `${percentage}%`, height: "4px", background: "#FF9C55", borderRadius: "10px" }} 
              />

              {/* THUMB */}
              <div 
                style={{ position: "absolute", left: `${percentage}%`, top: "-10px", width: "24px", height: "24px", borderRadius: "50%", background: "#FF9C55", boxShadow: "0px 0px 10px rgba(255, 156, 85, 0.4)", transform: "translateX(-50%)", zIndex: 10 }} 
              />

              {/* VALUE BUBBLE */}
              <div style={{ position: "absolute", left: `${percentage}%`, top: "-75px", transform: "translateX(-50%)", background: "#FFFFFF", padding: "10px 15px", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)", border: "1px solid #F0F0F0", textAlign: "center", minWidth: "100px" }}>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "#121212" }}>₹ {bill}L</div>
                <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>/mo. ({kwh} kWh)</div>
              </div>
            </div>

            {/* ================= STATS LIST (Aligned) ================= */}
            <div className="flex flex-col gap-8 mb-4">
              {/* Row 1 */}
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: "Instrument Sans", fontSize: "18px", color: "#121212" }}>Total consumption</span>
                <div className="flex items-center min-w-[150px]">
                  <span className="text-gray-300 mr-auto">:</span>
                  <span style={{ fontSize: "24px", fontWeight: 600, color: "#121212" }}>₹ {totalConsumption}L</span>
                </div>
              </div>

              {/* Row 2: Logo Integration */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div style={{ width: "32px", height: "32px", borderRadius: "6px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img 
                       src={nrgLogo} 
                       alt="NRG Logo" 
                       style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                    />
                  </div>
                  <span style={{ fontFamily: "Instrument Sans", fontSize: "18px", color: "#121212" }}>Saving with NRG</span>
                </div>
                <div className="flex items-center min-w-[150px]">
                  <span className="text-gray-300 mr-auto">:</span>
                  <span style={{ fontSize: "24px", fontWeight: 600, color: "#121212" }}>₹ {savingWithNrg}L</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= YEARLY SAVINGS (Blue Bar Attached) ================= */}
          <div style={{ background: "#162F73", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#FFFFFF" }}>
            <span style={{ fontSize: "18px", fontWeight: 400, fontFamily: "Instrument Sans" }}>Yearly savings</span>
            <div className="flex items-center min-w-[150px]">
              <span className="text-white opacity-30 mr-auto">:</span>
              <span style={{ fontSize: "28px", fontWeight: 600 }}>₹ {yearlySavings}L</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCalculator;