import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { useAuth } from '../context/AuthContext';
import { Heart, Share2, MapPin, Phone, Plus } from 'lucide-react';
import { PROPERTIES } from '../data/mockData';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('uploaded'); // 'uploaded' or 'shortlisted'
  const [propertyType, setPropertyType] = useState('lands'); // 'lands' or 'plots'

  if (!user) {
    navigate('/login');
    return null;
  }

  // Demo data - first 3 properties as uploaded
  const uploadedProperties = PROPERTIES.slice(0, 3);
  // Demo data - next 5 properties as shortlisted
  const shortlistedProperties = PROPERTIES.slice(3, 8);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Header with User Info */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
                <p className="text-slate-600">+91 {user.phone}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('uploaded')}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === 'uploaded'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Uploaded ({uploadedProperties.length})
            </button>
            <button
              onClick={() => setActiveTab('shortlisted')}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === 'shortlisted'
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Shortlisted ({shortlistedProperties.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {activeTab === 'uploaded' ? (
            <div>
              {/* Add Land Button */}
              <div className="mb-6">
                <a
                  href="https://wa.me/+917506980918/?text=I want to list my land"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-md"
                >
                  <Plus className="w-5 h-5" />
                  Add Land
                </a>
              </div>

              {/* Property Type Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setPropertyType('lands')}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    propertyType === 'lands'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-200'
                  }`}
                >
                  Lands
                </button>
                <button
                  onClick={() => setPropertyType('plots')}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    propertyType === 'plots'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-200'
                  }`}
                >
                  Plots
                </button>
              </div>

              {/* Properties Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition">
                    <div className="relative h-48">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      {property.verified && (
                        <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Verified
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{property.title}</h3>
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{property.location.village}, {property.location.district}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-emerald-600">{property.price.displayPrice}</p>
                          <p className="text-xs text-slate-500">{property.size.acres} Acres</p>
                        </div>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition">
                          <Share2 className="w-5 h-5 text-slate-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-emerald-900 mb-4">Benefits of Listing</h3>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Get direct calls from verified buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>FREE listing with no hidden charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Reach thousands of active land buyers</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              {/* Property Type Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setPropertyType('lands')}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    propertyType === 'lands'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-200'
                  }`}
                >
                  Lands
                </button>
                <button
                  onClick={() => setPropertyType('plots')}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    propertyType === 'plots'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-200'
                  }`}
                >
                  Plots
                </button>
              </div>

              {/* Shortlisted Properties Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shortlistedProperties.map((property) => (
                  <div key={property.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition">
                    <div className="relative h-48">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      {property.verified && (
                        <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Verified
                        </div>
                      )}
                      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition">
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{property.title}</h3>
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{property.location.village}, {property.location.district}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-emerald-600">{property.price.displayPrice}</p>
                          <p className="text-xs text-slate-500">{property.size.acres} Acres</p>
                        </div>
                        <a
                          href={`tel:+917506980918`}
                          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
