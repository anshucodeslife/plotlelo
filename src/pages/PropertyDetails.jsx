import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { MapPin, Phone, Share2, Heart, ArrowLeft, ChevronLeft, ChevronRight, Shield, Calendar, Maximize } from 'lucide-react';
import { PROPERTIES } from '../data/mockData';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Convert id from string to number for comparison
  const property = PROPERTIES.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Property Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              ← Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <div className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-6 font-semibold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Listings
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                {/* Main Image */}
                <div className="relative h-96 md:h-[500px] bg-slate-200">
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {property.verified && (
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        VERIFIED
                      </span>
                    )}
                    {property.premium && (
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ★ PREMIUM
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {property.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        currentImageIndex === index
                          ? 'border-emerald-600'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">{property.title}</h1>
                
                <div className="flex items-center gap-2 text-slate-600 mb-6">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-lg">
                    {property.location.village}, {property.location.mandal}, {property.location.district}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-emerald-600">{property.price.displayPrice}</span>
                    <span className="text-slate-500">per acre</span>
                  </div>
                  <p className="text-slate-600 mt-2">Total Price: {property.price.displayTotal}</p>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Total Area</div>
                    <div className="font-bold text-slate-900">
                      {property.size.acres} Acres {property.size.guntas > 0 && `${property.size.guntas} Guntas`}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Property Type</div>
                    <div className="font-bold text-slate-900 capitalize">{property.type}</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-1">Posted</div>
                    <div className="font-bold text-slate-900">{property.postedTime}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">Description</h2>
                  <p className="text-slate-600 leading-relaxed">
                    This {property.size.acres} acre {property.type} land is located in {property.location.village}, 
                    {property.location.district}. The property features {property.tags.join(', ').toLowerCase()} 
                    and is ideal for agricultural or investment purposes. 
                    {property.verified && ' This property has been verified by our team for authenticity and clear title.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Seller</h3>
                
                <div className="space-y-4 mb-6">
                  <a
                    href={`tel:+917506980918`}
                    className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>

                  <a
                    href={`https://wa.me/+917506980918/?text=I'm interested in ${property.title} - ${property.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </a>

                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition shadow-md flex items-center justify-center gap-2 ${
                      isLiked
                        ? 'bg-red-50 text-red-600 border-2 border-red-600'
                        : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-red-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-600' : ''}`} />
                    {isLiked ? 'Saved' : 'Save'}
                  </button>

                  <button className="w-full bg-white text-slate-700 px-6 py-4 rounded-lg font-semibold text-lg border-2 border-slate-200 hover:border-emerald-200 transition shadow-md flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>

                {/* Property ID */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-600 mb-1">Property ID</div>
                  <div className="font-mono text-slate-900 font-semibold">#{property.id}</div>
                </div>

                {/* Safety Tips */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2 text-sm">Safety Tips</h4>
                  <ul className="text-xs text-amber-800 space-y-1">
                    <li>• Always verify property documents</li>
                    <li>• Visit the property in person</li>
                    <li>• Don't make advance payments</li>
                    <li>• Use legal assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
