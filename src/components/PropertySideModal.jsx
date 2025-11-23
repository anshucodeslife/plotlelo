import React, { useState, useEffect } from 'react';
import { X, MapPin, Phone, Share2, Heart, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

const PropertySideModal = ({ property, onClose, onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when property changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [property]);

  if (!property) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[1000]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-4 top-20 bottom-4 w-80 md:w-96 bg-white rounded-xl shadow-2xl z-[1001] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
          <h3 className="font-bold text-lg text-slate-900">Property Details</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Image Gallery */}
          <div className="relative h-48 bg-slate-200">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
              {currentImageIndex + 1} / {property.images.length}
            </div>

            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {property.verified && (
                <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs font-bold">
                  ✓ VERIFIED
                </span>
              )}
              {property.premium && (
                <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">
                  ★ PREMIUM
                </span>
              )}
            </div>
          </div>

          {/* Property Info */}
          <div className="p-4">
            <h2 className="text-xl font-bold text-slate-900 mb-2">{property.title}</h2>

            <div className="flex items-center gap-2 text-slate-600 mb-4">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-sm">
                {property.location.village}, {property.location.district}
              </span>
            </div>

            {/* Price */}
            <div className="mb-4 pb-4 border-b border-slate-200">
              <div className="text-2xl font-bold text-emerald-600">{property.price.displayPrice}</div>
              <p className="text-slate-600 text-sm">Total: {property.price.displayTotal}</p>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Area:</span>
                <span className="font-semibold">{property.size.acres} Acres</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Type:</span>
                <span className="font-semibold capitalize">{property.type}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {property.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <a
                href={`tel:+917738377791`}
                className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Agent
              </a>

              <div className="flex gap-2">
                <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:border-emerald-200 transition flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  Save
                </button>
                <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:border-emerald-200 transition flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              <button
                onClick={() => onNavigate(property.id)}
                className="w-full bg-white border-2 border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-semibold hover:border-emerald-200 transition flex items-center justify-center gap-2"
              >
                <Maximize className="w-4 h-4" />
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySideModal;
