import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Heart, Phone, Share2, MapPin } from 'lucide-react';
import normalizeImagePath from '../utils/normalizeImagePath';

const PropertyCard = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${data.id}`);
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    window.location.href = `tel:+917738377791`;
  };

  const handleShareClick = (e) => {
    e.stopPropagation();
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
  };

  

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row h-full sm:h-48 relative"
    >

      {/* Image Section */}
      <div className="sm:w-48 md:w-56 lg:w-64 h-48 sm:h-auto relative shrink-0">
        <img
          src={normalizeImagePath(data.images[0])}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {data.verified && (
            <span className="bg-white/95 backdrop-blur-sm text-emerald-700 text-[10px] uppercase font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm border border-emerald-100">
              <ShieldCheck className="w-3 h-3" /> Verified
            </span>
          )}
          {data.premium && (
            <span className="bg-amber-400 text-amber-950 text-[10px] uppercase font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm w-fit">
              ★ Premium
            </span>
          )}
        </div>
        <button
          onClick={handleLikeClick}
          className="absolute top-2 right-2 p-1.5 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full text-white transition"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-1">

        {/* Top Info */}
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-emerald-700 transition line-clamp-1">
              {data.title}
            </h3>
            <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
              #{data.id}
            </span>
          </div>

          <p className="text-slate-500 text-xs sm:text-sm flex items-center gap-1 mb-2">
            <MapPin className="w-3 h-3" /> {data.location.village}, {data.location.district}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded">
              {data.size.acres} Acres {data.size.guntas > 0 && `${data.size.guntas} Guntas`}
            </span>
            {data.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-medium border border-slate-200 text-slate-500 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Info (Price & CTA) */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-slate-900">{data.price.displayPrice}</span>
            </div>
            <p className="text-xs text-slate-400">Total: {data.price.displayTotal}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleShareClick}
              className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleContactClick}
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition"
            >
              <Phone className="w-3 h-3" /> Contact
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;