import React from "react";
import { MapPin, User, Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/plotlelo-logo.jpg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-emerald-600/20">
            <img
              src={logo}
              alt="Plotlelo Logo"
              className="w-full h-full object-cover"
            />
          </div>

       <span className="text-[22px] font-extrabold tracking-tight flex items-center">
  <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
    plot
  </span>
  <span className="text-black ml-0.5 drop-shadow-lg">
    lelo
  </span>
</span>

        </Link>

        {/* MIDDLE NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <Link
            to="/"
            className="hover:text-emerald-600 hover:bg-slate-50 px-3 py-2 rounded-md transition"
          >
            Buy Land
          </Link>

          <Link
            to="/sell"
            className="hover:text-emerald-600 hover:bg-slate-50 px-3 py-2 rounded-md transition"
          >
            Sell Land
          </Link>

          <Link
            to="/pricing"
            className="hover:text-emerald-600 hover:bg-slate-50 px-3 py-2 rounded-md transition"
          >
            Pricing
          </Link>

          {/* MAP VIEW PILL */}
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-emerald-100 transition shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Map View
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">
          {/* POST PROPERTY */}
          <Link
            to="/post-property"
            className="hidden sm:flex items-center gap-1 text-slate-600 font-semibold text-sm hover:text-emerald-600 transition border border-transparent hover:border-slate-200 px-3 py-2 rounded-lg"
          >
            <Plus className="w-4 h-4" />
            Post Property
          </Link>

          {/* LOGIN BUTTON */}
          <Link
            to="/login"
            className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition shadow-md flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Login
          </Link>

          {/* MOBILE MENU */}
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
