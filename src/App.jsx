import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import SellLand from "./pages/SellLand";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* LAND LISTING + MAP PAGE */}
        <Route path="/" element={<Home />} />

        {/* OTHER PAGES */}
        <Route path="/sell" element={<SellLand />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />

        {/* Post Property maps to SellLand */}
        <Route path="/post-property" element={<SellLand />} />
      </Routes>
    </Router>
  );
}

export default App;
