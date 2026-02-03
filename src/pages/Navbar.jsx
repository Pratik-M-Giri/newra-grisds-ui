import { Link, useLocation } from "react-router-dom"; // 🔥 useLocation add kiya
import newraText from "../assets/Logo.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // 🔥 current path track karne ke liye

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const navLinks = [
    { name: "Solutions", path: "/solutions" },
    { name: "Platform", path: "/platform" },
    { name: "About NRG", path: "/about" },
    // { name: "Insights", path: "/insights" },
  ];

  const tickerItems = [
    { label: "Solar power generation capacity", value: "2189 MW", up: true },
    { label: "Capacity utilisation factor", value: "25%", up: false },
    { label: "Energy ratio", value: "78%", up: true },
    { label: "Energy field", value: "$.5 MWh", up: false },
  ];

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      {/* TICKER TAPE */}
      <div className="w-full h-[32px] bg-[#09193C] overflow-hidden flex items-center border-b border-white/10">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center px-8 gap-2 text-white text-[12px] font-medium border-r border-white/20">
              <span className={item.up ? "text-[#4ADE80]" : "text-[#F87171]"}>
                {item.up ? "▲" : "▼"}
              </span>
              <span className="font-bold">{item.value}</span>
              <span className="opacity-70">{item.label}</span>
              <span className="ml-4 opacity-30">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVBAR CONTAINER */}
      <div className="w-full flex justify-center px-4 mt-4">
        <nav
          className="flex items-center justify-between"
          style={{
            width: "1344px",
            height: "54px",
            borderRadius: "40px",
            background: "rgba(255, 255, 255, 0.6)",
            padding: "4px 40px",
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* LEFT – LOGO */}
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
            <img src={newraText} alt="NewRa Grids" style={{ height: "24px" }} />
          </Link>

          {/* CENTER – Desktop Links with Active Style */}
          <div className="hidden lg:flex items-center gap-2 text-[14px] font-medium text-gray-800">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-2 transition-all duration-300 rounded-full ${
                    isActive 
                      ? "bg-white border border-gray-200 shadow-sm text-[#121212]" // 📸 Photo wala active style
                      : "hover:text-[#2D50A1]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT – Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[13px] font-medium border border-[#2D50A1]/30 rounded-full px-8 py-2 bg-white/40 hover:bg-white transition text-[#09193C]">
              Request demo
            </button>
            <button
              className="text-[13px] font-medium text-white rounded-full px-10 py-2 transition hover:brightness-110 shadow-lg"
              style={{ background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)" }}
            >
              Log in
            </button>
          </div>

          {/* HAMBURGER – Mobile */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <div className={`w-6 h-0.5 bg-[#09193C] mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-[#09193C] mb-1 ${open ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-[#09193C] ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-[100px] left-4 right-4 bg-white/95 rounded-3xl shadow-xl p-8 lg:hidden z-50">
          <div className="flex flex-col gap-4 text-[15px] font-medium text-gray-800">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setOpen(false)}
                className={`p-3 rounded-xl ${location.pathname === link.path ? "bg-gray-100 text-[#2D50A1]" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <button className="border border-gray-300 rounded-full py-2">Request demo</button>
            <button className="rounded-full py-2 text-white" style={{ background: "linear-gradient(115.92deg, #09193C -0.5%, #2D50A1 100%)" }}>
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;