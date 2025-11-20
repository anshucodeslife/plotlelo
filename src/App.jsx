import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

// Import Pages
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import SellLand from "./pages/SellLand";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import VerificationProcess from "./pages/VerificationProcess";
import TagAlong from "./pages/TagAlong";
import CorporateLand from "./pages/CorporateLand";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/sell" element={<SellLand />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* PROPERTY DETAILS */}
          <Route path="/property/:id" element={<PropertyDetails />} />

          {/* INFORMATION PAGES */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verification" element={<VerificationProcess />} />

          {/* SERVICE PAGES */}
          <Route path="/tag-along" element={<TagAlong />} />
          <Route path="/corporate-land" element={<CorporateLand />} />
          <Route path="/developers" element={<TagAlong />} />

          {/* LEGAL PAGES */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />

          {/* ALIASES */}
          <Route path="/post-property" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
