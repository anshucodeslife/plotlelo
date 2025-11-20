import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, Map as MapIcon, List, SlidersHorizontal } from 'lucide-react';

import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PremiumCTA from '../components/home/PremiumCTA';
import PropertyCard from '../components/PropertyCard';
import RealMap from '../components/RealMap';
import Footer from '../components/layout/Footer';
import { PROPERTIES } from '../data/mockData';
import PropertySideModal from '../components/PropertySideModal';

function Home() {
  const [viewMode, setViewMode] = useState("list"); // Changed default to "list" for mobile-first
  const [filterVerified, setFilterVerified] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const matchesSearch =
        p.location.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.district.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesVerified = filterVerified ? p.verified : true;

      return matchesSearch && matchesVerified;
    });
  }, [searchQuery, filterVerified]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* NEW LANDING PAGE SECTIONS */}
      <HeroSection />
      <ServicesSection />
      {/* PREMIUM CTA - COMMENTED OUT */}
      {/* <PremiumCTA /> */}

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="border-t border-slate-200"></div>
      </div>

      {/* EXISTING MAP/LIST SECTION */}
      <div className="flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Browse Available Properties
          </h2>
          <p className="text-slate-600 mb-6">
            Explore our verified land listings on the map or in list view
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="bg-white border-y border-slate-200 py-4 px-4 shadow-sm z-40 shrink-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by Village, District..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-medium transition outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setFilterVerified(!filterVerified)}
                className={`whitespace-nowrap px-5 py-3 rounded-lg text-sm font-semibold border-2 transition flex items-center gap-2 ${
                  filterVerified
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                    : "bg-white border-slate-200 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                {filterVerified && <span className="text-white">✓</span>}
                Verified Lands
              </button>

              <button className="whitespace-nowrap px-5 py-3 rounded-lg text-sm font-semibold bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 transition flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* MAIN SPLIT VIEW */}
        <div className="flex-1 flex relative overflow-hidden min-h-[calc(100vh-200px)]">

          {/* LEFT LIST */}
          <div
            className={`
              w-full lg:w-[60%] xl:w-[55%] 2xl:w-[50%] h-full overflow-y-auto bg-slate-50
              ${viewMode === "map" ? "hidden lg:block" : "block"}
            `}
          >
            <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-4 pb-24 lg:pb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Properties for Sale</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Showing {filteredProperties.length} result{filteredProperties.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {filteredProperties.map((prop) => (
                <PropertyCard key={prop.id} data={prop} />
              ))}

              {filteredProperties.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-slate-400 text-lg mb-2">No lands found</div>
                  <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT MAP */}
          <div
            className={`
              w-full lg:w-[40%] xl:w-[45%] 2xl:w-[50%] bg-slate-200 relative border-l border-slate-300
              ${viewMode === "list" ? "hidden lg:block" : "block"}
            `}
          >
            <RealMap 
              properties={filteredProperties} 
              onMarkerClick={(property) => setSelectedProperty(property)}
            />
            <PropertySideModal 
              property={selectedProperty} 
              onClose={() => setSelectedProperty(null)}
              onNavigate={(id) => navigate(`/property/${id}`)}
            />
          </div>

          {/* MOBILE TOGGLE - Fixed at bottom */}
          <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white p-1.5 rounded-full flex shadow-2xl border-2 border-slate-200">
              <button
                onClick={() => setViewMode("list")}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  viewMode === "list" 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <List className="w-4 h-4" />
                List
              </button>

              <button
                onClick={() => setViewMode("map")}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  viewMode === "map" 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <MapIcon className="w-4 h-4" />
                Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
