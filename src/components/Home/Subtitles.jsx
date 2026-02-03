import React from "react";

const Subtitles = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{
        padding: "8px",
        background: "#F9FBFF",
      }}
    >
      {/* VIEWPORT */}
      <div
        className="overflow-hidden w-full"
        style={{
          height: "168px",
        }}
      >
        {/* MARQUEE TRACK */}
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 100,              // 🔥 ultra-thin
                fontSize: "140px",
                lineHeight: "100%",
                letterSpacing: "-0.03em",     // tighter = thinner feel
                color: "rgba(198, 203, 217, 1)",
                opacity: 0.6,                 // visually lighter
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Go Carbon Neutral & Boost Profit Margin&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* AUTO SCROLL ANIMATION */}
      <style>{`
        .marquee-track {
          width: 2363px;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Subtitles;
