import React from 'react';
import { Crown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumCTA = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-y border-amber-200 py-8 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900">
            Premium Subscription
          </h3>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg text-amber-800 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          If you have a specific requirement outside of our services, Here's how Premium Subscription 
          helps with better discovery.
        </p>
        
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-amber-700 transition shadow-lg"
        >
          Check Premium Benefits
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </div>
  );
};

export default PremiumCTA;
