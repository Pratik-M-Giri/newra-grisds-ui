import React, { useEffect, useState } from "react";
import newraText from "../assets/footerlogo.png";
import facebook from "../assets/fb.png";
import insatgram from "../assets/instagram.png";
import youtube from "../assets/utube.png";
import linedin from "../assets/Linedin.png";

const Footer = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.18);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="text-white font-sans overflow-hidden">
      {/* ===== Top Section: CTA ===== */}
      <div className="relative text-center bg-[#051129] text-[#C6CBD9] py-16 overflow-hidden">
        {/* BIG NRG Parallax Background */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <h1 className="text-[200px] md:text-[300px] font-bold tracking-widest text-white/5 select-none">
            NRG
          </h1>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl mb-10 font-light tracking-wide">
            Stability, Transparency & Long-term Alignment.
          </h2>

          <div className="max-w-xl mx-auto px-4">
            <p className="text-[10px] tracking-[2px] text-gray-400 mb-3 text-left ml-4">
              REQUEST A DEMO
            </p>
            <div className="flex items-center rounded-full bg-white/5 border border-white/20 p-1 backdrop-blur-sm shadow-inner">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-white placeholder-gray-500 px-6 py-2 focus:outline-none text-sm"
              />
              <button className="bg-white text-[#051129] px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="bg-[#0A1D45] pt-16 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 text-left">
            <div className="hidden md:block"></div>
            
            <div>
              <h3 className="text-[11px] tracking-[3px] text-gray-400 mb-6 font-semibold uppercase">All</h3>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li className="hover:text-white cursor-pointer transition">About us</li>
                <li className="hover:text-white cursor-pointer transition">How it works</li>
                <li className="hover:text-white cursor-pointer transition">Work with us</li>
                <li className="hover:text-white cursor-pointer transition">Careers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[3px] text-gray-400 mb-6 font-semibold uppercase">Solutions</h3>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li className="hover:text-white cursor-pointer transition">For green energy partners</li>
                <li className="hover:text-white cursor-pointer transition">For green energy subscribers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[3px] text-gray-400 mb-6 font-semibold uppercase">Resources</h3>
              <ul className="space-y-4 text-[13px] text-gray-300">
                <li className="hover:text-white cursor-pointer transition">Blogs</li>
                <li className="hover:text-white cursor-pointer transition">Posts</li>
                <li className="hover:text-white cursor-pointer transition">Words from subscribers</li>
                <li className="hover:text-white cursor-pointer transition">Words from partners</li>
              </ul>
            </div>
          </div>

          {/* Bottom Row: Branding, Socials (Direct Icons), and Contact */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            
            {/* Logo Section */}
            <div className="flex flex-col gap-2">
              <img src={newraText} alt="NewRa Grids" className="h-15 w-auto object-contain" />
              <p className="text-[12px] italic text-gray-400">
                {/* <span className="text-[#F79050]">Crafted in</span> India, for a sustainable future. */}
              </p>
            </div>

            {/* Center Section: Social Icons (Circles Removed) & Legal */}
            <div className="flex flex-col items-center">
              <div className="flex gap-6 mb-6">
                <a href="#"><img src={linedin} alt="linkedin" className="w-10 h-10 hover:scale-110 transition-transform" /></a>
                <a href="#"><img src={facebook} alt="facebook" className="w-10 h-10 hover:scale-110 transition-transform" /></a>
                <a href="#"><img src={youtube} alt="youtube" className="w-10 h-10 hover:scale-110 transition-transform" /></a>
                <a href="#"><img src={insatgram} alt="instagram" className="w-10 h-10 hover:scale-110 transition-transform" /></a>
              </div>
              <div className="flex gap-8 text-[12px] text-gray-400 mb-4">
                <span className="hover:text-white cursor-pointer transition">Terms & conditions</span>
                <span className="hover:text-white cursor-pointer transition">Privacy</span>
                <span className="hover:text-white cursor-pointer transition">Security</span>
              </div>
              <p className="text-[12px] text-[#F79050] tracking-wide">
                ©2025 NewRa Grids. All rights Reserved.
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-right">
              <p className="text-[13px] font-semibold text-gray-300 mb-4 tracking-wide uppercase">Contact us</p>
              <div className="flex flex-col gap-2 items-end">
               <a 
  href="mailto:newragrids@gmail.com" 
  style={{
    width: '194px',
    height: '26px',
    fontFamily: '"Instrument Sans", sans-serif',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '26px',
    textDecoration: 'underline',
    textDecorationThickness: '1px', // This makes the line thin
    textUnderlineOffset: '4px',    // This adds space between text and line
    opacity: 1,
  }}
  className="text-gray-200 hover:text-white transition-colors block"
>
  newragrids@gmail.com
</a>
                <p className="text-gray-300 text-[15px]">+91 1234567890</p>
                <p className="text-[#F79050] text-[11px] mt-2 font-medium">
                  Official office hours – 7AM to 8PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;