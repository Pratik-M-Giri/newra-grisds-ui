import React from 'react';
// Hero Assets
import leftBg from "../../assets/AboutHero.png"; 
import rightBg from "../../assets/abouthero2.png";
import gridImages from "../../assets/aboutushero.png"; 

// Why NewRa Assets
import treeImage from "../../assets/solutiontree.jpg"; 
import thunderIcon from "../../assets/flash.png"; 

const AboutUsHero = () => {
  return (
    <div className="bg-white w-full relative overflow-hidden">
      
      {/* ===== THE GRADIENT GLOW (Exact Implementation from Image) ===== */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '450px', // Increased size for a softer bleed
          height: '450px',
background: 'radial-gradient(circle, rgba(247, 144, 80, 0.15) 0%, rgba(247, 144, 80, 0) 70%)',
          filter: 'blur(60px)',
          top: '1100px', // Positioned between Section 2 and 3
          left: '-200px',
          opacity: '0.8',
          zIndex: 0
        }}
      />

      {/* ===== HERO SECTION (EKDAM SAME, NO CHANGES) ===== */}
      <section className="relative w-full bg-white py-70 px-6 md:px-16 overflow-hidden min-h-screen flex items-center">
        
        {/* ===== Background Decorative Elements ===== */}
        <img 
          src={leftBg} 
          alt="" 
          className="absolute top-20 left-4 w-47   pointer-events-none" 
        />
        <img 
          src={rightBg} 
          alt="" 
          className="absolute top-10 right-40 w-50  pointer-events-none" 
        />
        <img 
          src={leftBg} 
          alt="" 
          className="absolute top-20 left-4 w-47   pointer-events-none" 
        />
        <img 
          src={rightBg} 
          alt="" 
          className="absolute top-10 right-40 w-50  pointer-events-none" 
        />
        <img 
          src={rightBg} 
          alt="" 
          className="absolute top-10 right-10 w-50  pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* ===== Left Side: Text Content ===== */}
          <div className="flex flex-col -mt-72 gap-8">
            <h1 className="text-5xl font-semibold text-[#051129] tracking-tight">
              About Us
            </h1>
            
            <div className="flex flex-col gap-6 text-[17px] leading-relaxed text-black max-w-xl font-light">
              <p>
                NewRa Grids was built to solve a practical problem in the energy 
                transition: while renewable energy is proven, accessing and 
                operating it remains complex, slow, and fragmented.
              </p>

              <p>
                We were founded on the belief that sustainability should not be 
                aspirational or symbolic. It must be practical, fiscally balanced, and 
                commercially permanent.
              </p>

              <p>
                NewRa Grids focuses on designing systems that allow clean 
                energy to function as dependable infrastructure within real-world 
                operating constraints, ensuring transparency for the offtaker 
                and generator throughout the energy lifecycle.
              </p>
            </div>
          </div>

          {/* ===== Right Side: Single Grid Image ===== */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              <img 
                src={gridImages} 
                alt="Sustainable Energy Infrastructure" 
                className="w-full h-auto object-contain rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

    {/* ===== NEW MIDDLE SECTION: LIGHTNING PATTERN & TEXT ===== */}
      <section className="relative w-full   -mt-30 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start gap-4 relative z-10"> 
          {/* gap-4 mule text ani icon javal yetil */}
          
          <div className="max-w-3xl">
            <p className="text-[#1A2E5A] text-3xl md:text-5xl font-light leading-tight tracking-tight">
              NewRa Grids was built to solve a <br className="hidden md:block"/>
              practical problem in the energy <br className="hidden md:block"/>
              transition: while renewable energy is <br className="hidden md:block"/>
              proven, accessing & operating it <br className="hidden md:block"/>
              remains complex, slow & fragmented.
            </p>
          </div>
          
          {/* Lightning Outline Icon - Bigger and closer */}
          <div className="relative shrink-0">
             <img 
              src={thunderIcon} 
              alt="" 
              className="w-64 md:w-[350px] opacity-20 brightness-0 invert-0" 
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION: WHY NEWRA GRIDS ===== */}
      <section className="relative w-full pb-32 px-6 mt-40 md:px-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image (Tree) */}
            <div className="w-full">
              <img 
                src={treeImage} 
                alt="Sustainability" 
                className="w-full h-auto rounded-3xl shadow-sm"
              />
            </div>

            {/* Right Card Content */}
            <div className="bg-white border border-gray-100 p-8 md:p-14 rounded-[2.5rem] shadow-[0px_10px_40px_rgba(0,0,0,0.03)]">
              <h2 className="text-4xl font-semibold text-[#051129] mb-4">
                Why NewRa Grids?
              </h2>
              <p className="text-gray-500 italic text-sm mb-8">
                Because intent alone does not deliver the energy transition. Execution does.
              </p>
              
              <div className="space-y-6 text-[17px] leading-relaxed text-gray-700 font-light">
                <p>
                  NewRa Grids exists to remove friction from clean energy adoption by 
                  replacing fragmented, project-led approaches with structured, repeatable 
                  systems.
                </p>
                <p>
                  By aligning producers and consumers within a single execution 
                  framework, renewable power becomes predictable, scalable, and reliable 
                  over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHero;