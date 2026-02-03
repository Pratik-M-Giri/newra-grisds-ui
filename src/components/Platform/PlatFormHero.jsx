import React from "react";
import PlatformImg from "../../assets/platformhero.png";

const PlatFormHero = () => {
  return (
    <section className="relative h-screen bg-[#F4F5F7] py-28 overflow-hidden">

      {/* LEFT Background Image */}
      <img
        src={PlatformImg}
        alt="platform"
        className="
          absolute 
          left-3
         -mt-20
          top-1/2 
          -translate-y-1/2
          w-[650px]
          opacity-90
          pointer-events-none
          select-none
        "
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-24">

        <p className="text-[#2D50A1] font-semibold text-lg mb-4">
          NRG Platform Overview
        </p>

        <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6">
          The System Behind the Simplicity
        </h2>

        <p className="text-[#121212] leading-snug mb-4 text-[16px]">
          The NewRa Grid platform functions as a unified operating layer that
          connects renewable energy generation, enterprise consumption,
          and regulatory processes into a single, automated framework.
        </p>

        <p className="text-[#121212] leading-snug mb-8 text-[16px]">
          It replaces fragmented coordination with structured workflows,
          enabling clean energy to operate as predictable infrastructure
          rather than a bespoke project.
        </p>

        <button
          className="
    font-instrument
    text-white
    text-[16px]
    w-[140px]
    mt-6
    flex
    items-center
    justify-center
    px-[5px]
    py-[5px]
    rounded-[24px]
    opacity-100
    mx-auto
  "
          style={{
            background:
              "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)",
          }}
        >
          Learn more
        </button>


      </div>
    </section>
  );
};

export default PlatFormHero;
