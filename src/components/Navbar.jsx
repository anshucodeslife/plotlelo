import React from 'react';
import { MapPin, User, Menu, Plus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* 1. LOGO SECTION */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">plotlelo</span>
        </div>

        {/* 2. MIDDLE NAVIGATION (Buy, Sell, Pricing, Map View) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="#" className="hover:text-emerald-600 hover:bg-slate-50 px-3 py-2 rounded-md transition">
            Buy Land
          </a>
          <a href="#" className="hover:text-emerald-600 hover:bg-slate-50 px-3 py-2 rounded-md transition">
            Sell Land
          </a>
          <a href="#" className="hover:text-emerald-600 hover:bg-slate-50 px-3 py-2 rounded-md transition">
            Pricing
          </a>
          
          {/* Map View Pill */}
          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-emerald-100 transition shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Map View
          </div>
        </div>

        {/* 3. RIGHT ACTION BUTTONS (+ Post, Login) */}
        <div className="flex items-center gap-4">
          
          {/* + Post Property Button */}
          <button className="hidden sm:flex items-center gap-1 text-slate-600 font-semibold text-sm hover:text-emerald-600 transition border border-transparent hover:border-slate-200 px-3 py-2 rounded-lg">
            <Plus className="w-4 h-4" />
            Post Property
          </button>

          {/* Login Button */}
          <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition shadow-md flex items-center gap-2">
            <User className="w-4 h-4" /> 
            Login
          </button>

          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;