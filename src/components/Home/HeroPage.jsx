import React, { useEffect, useState, useRef } from "react";
import heroImg from "../../assets/Hero.png";
// import Subtitles from "./Subtitles";

const HeroPage = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  // Typing effect states
  const [displayText, setDisplayText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef(null);
  const fullText = "We act as a Green Energy aggregator, bridging the gap between renewable generators and HT/LT consumers under Open Access, GEOA, and Virtual PPA frameworks.";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer to detect scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Typing logic
  useEffect(() => {
    if (startTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 40); 
      return () => clearTimeout(timeout);
    }
  }, [startTyping, displayText]);

  return (
    <div className="overflow-x-hidden">
      {/* ================= EXISTING SECTION (UNCHANGED) ================= */}
      <section className="relative w-screen h-screen overflow-hidden">
        
        {/* PHOTO (as it is) */}
        <div
          className="w-full mt-[680px] h-full bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "100% 100%",
          }}
        />

        {/* TEXT LAYER */}
        <div className="absolute inset-0 flex items-start justify-center">
          <div className="relative flex flex-col items-center">

            <p
              className="font-instrument text-[44px] font-normal text-[rgba(0,0,0,1)] mb-8 absolute left-1/2 -translate-x-1/2"
              style={{ top: "200px" }}
            >
              Empowering
            </p>

            <h1 className="font-instrument text-[72px] md:text-[96px] font-semibold text-white/20 text-center">
              The Green Shift
            </h1>

            <h1
              className="
                pointer-events-none
                absolute
                font-instrument
                text-[72px] md:text-[96px]
                font-semibold
                text-[#f4a261]
                w-[679px]
                h-[296px]
                opacity-100
              "
              style={{
                top: "252px",
                left: "31px",
                WebkitMaskImage: `radial-gradient(
                  400px 400px at ${pos.x}% ${pos.y}%,
                  black 0%,
                  transparent 70%
                )`,
                maskImage: `radial-gradient(
                  400px 400px at ${pos.x}% ${pos.y}%,
                  black 0%,
                  transparent 70%
                )`,
              }}
            >
              The Green Shift
            </h1>

            <p
              className="
                font-instrument
                font-normal
                text-[20px]
                leading-[28px]
                text-center
                text-[rgba(92,92,92,1)]
                w-[679px]
                h-[56px]
                opacity-100
                mt-[320px]
                mx-auto
              "
            >
              We make your energy transmission seamless and impactful driving both
              economic and ecological benefit.
            </p>

            <button
              className="
                font-instrument
                text-white
                text-[16px]
                font-medium
                w-[160px]
                mt-6
                flex
                items-center
                justify-center
                px-[20px]
                py-[10px]
                rounded-[24px]
                opacity-100
              "
              style={{
                background:
                  "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)",
              }}
            >
              Get started
            </button>

          </div>
        </div>
      </section>

      {/* ================= NEW SECTION (SCROLL SECTION WITH PHOTO) ================= */}
      <section
        ref={sectionRef}
        className="relative w-screen h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />

        <div className="relative z-10 max-w-5xl text-center px-6">
          <p className="font-instrument font-light text-[28px] md:text-[36px] leading-[48px] text-white mb-10 min-h-[150px]">
            {displayText}
          </p>

          <button className="font-instrument text-[17px] font-medium px-8 py-3 rounded-full bg-white text-[#09193C]">
            About NRG
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;