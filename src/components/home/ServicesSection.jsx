import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Users, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, expandable = false, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 ${
        expandable 
          ? 'bg-emerald-50 border-emerald-200 hover:border-emerald-300' 
          : 'bg-white border-slate-200 hover:border-emerald-200 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 sm:gap-4 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1 sm:mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
            
            {isExpanded && expandable && (
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-emerald-200">
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  Get access to exclusive Joint Venture (JV) land opportunities perfect for real estate development projects. We connect developers with verified land parcels suitable for residential and commercial developments.
                </p>
                <Link 
                  to="/developers"
                  className="inline-flex items-center text-sm sm:text-base text-emerald-600 font-semibold hover:text-emerald-700 transition"
                >
                  Learn More →
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {expandable ? (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 sm:ml-4 p-2 hover:bg-emerald-100 rounded-lg transition flex-shrink-0"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            ) : (
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            )}
          </button>
        ) : (
          <div className="ml-2 sm:ml-4 flex-shrink-0">
            <span className="text-emerald-600 text-xl sm:text-2xl">→</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Buy through plotlelo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            plotlelo is a platform to discover verified lands. You can call the sellers directly. 
            However, if you need extra help from us in buying lands, you can check out our services below:
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <ServiceCard
            icon={Building2}
            title="For Developers"
            description="Access Joint Venture (JV) Lands and more for your City."
            expandable={true}
          />

          <Link to="/tag-along" className="block">
            <ServiceCard
              icon={Users}
              title="Tag-along"
              description="We buy large land parcels. You can tag along. Starting @ ₹4 lakh/ acre."
              link="/tag-along"
            />
          </Link>

          <Link to="/corporate-land" className="block">
            <ServiceCard
              icon={Handshake}
              title="Corporate Land Acquisitions"
              description="Need help buying lands as a company? Get in touch. Minimum Budget - ₹25Cr."
              link="/corporate"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
