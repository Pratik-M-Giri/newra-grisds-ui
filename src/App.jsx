import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./components/Home/Home";
import "@fontsource/instrument-sans/500.css"; // Medium
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/600.css";
import Solutions from "./components/Solutions/Solutions";
import About from "./components/AboutUs/About";
import Platform from "./components/Platform/Platform";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
