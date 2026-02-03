import React from 'react';
import solutionImg1 from "../../assets/solution1.png";
import solutionImg2 from "../../assets/solution2.png";
import solutionImg3 from "../../assets/solution3.png";

const HomeSolutions = () => {
  const solutions = [
    {
      title: "Our Solution",
      heading: "End-to-end energy management solutions",
      description: "Combining foundational data and energy intelligence with industry expertise and strategic partnerships, Arcadia provides complete solutions to optimize costs, mitigate risk, and achieve sustainability goals.",
      img: solutionImg1 
    },
    {
      title: "Our Solution",
      heading: "End-to-end energy management solutions",
      description: "Combining foundational data and energy intelligence with industry expertise and strategic partnerships, Arcadia provides complete solutions to optimize costs, mitigate risk, and achieve sustainability goals.",
      img: solutionImg2
    },
    {
      title: "Our Solution",
      heading: "End-to-end energy management solutions",
      description: "Combining foundational data and energy intelligence with industry expertise and strategic partnerships, Arcadia provides complete solutions to optimize costs, mitigate risk, and achieve sustainability goals.",
      img: solutionImg3
    }
  ];

  return (
    <section className="w-full py-12 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 relative">
        
   {/* CENTER DASHED LINE & ORANGE DOTS */}
<div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden lg:flex flex-col items-center pointer-events-none w-full">
  
  {/* Vertical Dashed Line - Iski height aap top/bottom se adjust kar rahe ho */}
  <div 
    className="absolute left-1/2 -translate-x-1/2 border-l border-dashed border-gray-300 z-0"
    style={{ top: '7%', bottom: '22%' }}
  ></div>

  {/* DOT 1 - Adjust top value to match first "Our Solution" */}
  <div 
    className="absolute w-[18px] h-[18px] rounded-full bg-[#F79050] z-10 shadow-[0_0_10px_rgba(247,144,80,0.5)]"
    style={{ top: '7%' }} 
  ></div>

  {/* DOT 2 - Adjust top value to match second "Our Solution" */}
  <div 
    className="absolute w-[18px] h-[18px] rounded-full bg-[#F79050] z-10 shadow-[0_0_10px_rgba(247,144,80,0.5)]"
    style={{ top: '41%' }} 
  ></div>

  {/* DOT 3 - Adjust top value to match third "Our Solution" */}
  <div 
    className="absolute w-[18px] h-[18px] rounded-full bg-[#F79050] z-10 shadow-[0_0_10px_rgba(247,144,80,0.5)]"
    style={{ top: '77%' }} 
  ></div>

</div>

        {/* VERTICAL GAP REDUCED HERE: gap-12 lg:gap-16 */}
        <div className="flex flex-col gap-12 lg:gap-16 relative z-10">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24"
            >
              
              {/* LEFT SIDE: DIAGRAM IMAGES */}
              <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[400px]"> {/* Reduced image container size slightly */}
                  <img 
                    src={item.img} 
                    alt={item.heading} 
                    className="w-full h-auto object-contain" 
                  />
                </div>
              </div>

              {/* RIGHT SIDE: CONTENT BLOCKS */}
              <div className="w-full lg:w-[45%] flex flex-col items-start lg:pl-12">
                
                {/* "Our Solution" Label */}
                <h4 
                  style={{ 
                    fontFamily: "Instrument Sans", 
                    fontWeight: 600, 
                    fontSize: "20px", 
                    lineHeight: "100%", 
                    color: "rgba(45, 80, 161, 1)",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h4>

                {/* Main Heading */}
                <h3 
                  style={{ 
                    maxWidth: "536px",
                    fontFamily: "Glonto", 
                    fontWeight: 400, 
                    fontSize: "32px", 
                    lineHeight: "40px", 
                    color: "rgba(18, 18, 18, 1)",
                    marginBottom: "16px",
                  }}
                >
                  {item.heading}
                </h3>

                {/* Description */}
                <p 
                  style={{ 
                    maxWidth: "536px",
                    fontFamily: "Instrument Sans", 
                    fontWeight: 400, 
                    fontSize: "16px", 
                    lineHeight: "24px", 
                    color: "rgba(18, 18, 18, 1)",
                    marginBottom: "24px",
                  }}
                >
                  {item.description}
                </p>

                {/* Learn More Button */}
                <button 
                  style={{ 
                    width: "160px",
                    height: "30px",
                    borderRadius: "20px",
                    border: "1px solid #C6CBD9",
                    background: "#F4F5F7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: "Urbanist", 
                      fontWeight: 500, 
                      fontSize: "14px", 
                      lineHeight: "22px", 
                      letterSpacing: "-2%", 
                      color: "rgba(9, 25, 60, 1)" 
                    }}
                  >
                    Learn more
                  </span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;