import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')`,
        }}
      >
        {/* Overlay - darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-3xl py-8 sm:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Buy & Sell Verified Lands
            <span className="block mt-2 text-emerald-400">in Mumbai & Maharashtra</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 font-light leading-relaxed">
            plotlelo is a Platform to discover verified lands. Our preliminary verification process eliminates 90% of the risks associated with Lands.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              to="/"
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-emerald-700 transition shadow-lg"
            >
              Browse Lands
            </Link>
            <Link 
              to="/sell"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-slate-100 transition shadow-lg"
            >
              Sell Your Land
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
