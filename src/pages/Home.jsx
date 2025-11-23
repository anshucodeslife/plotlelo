import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PROPERTIES } from "../data/mockData";

// UI components
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import Footer from "../components/layout/Footer";
import RealMap from "../components/RealMap";
import PropertyCard from "../components/PropertyCard";
import PropertySideModal from "../components/PropertySideModal";
import WhatsAppChatbot from "../components/WhatsAppChatbot";

// Icons / utilities
import { Search, List, Map as MapIcon, SlidersHorizontal } from "lucide-react";

function Home() {
  // View mode (list or map)
  const [viewMode, setViewMode] = useState("list");
  const [filterVerified, setFilterVerified] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;
  const navigate = useNavigate();

  // Filtered properties based on search and verified toggle
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchesSearch =
        p.location.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.district.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVerified = filterVerified ? p.verified : true;
      return matchesSearch && matchesVerified;
    });
  }, [searchQuery, filterVerified]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterVerified]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  const goToPage = page => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="border-t border-slate-200"></div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-y border-slate-200 py-4 px-4 shadow-sm z-40 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by Village, District..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-medium transition outline-none"
            />
          </div>
          {/* Verified toggle */}
          <button
            onClick={() => setFilterVerified(!filterVerified)}
            className={`whitespace-nowrap px-5 py-3 rounded-lg text-sm font-semibold border-2 transition flex items-center gap-2 ${filterVerified ? "bg-emerald-600 text-white border-emerald-600 shadow-md" : "bg-white border-slate-200 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50"}`}
          >
            {filterVerified && <span className="text-white">✓</span>}
            Verified Lands
          </button>
          {/* More filters placeholder */}
          <button className="whitespace-nowrap px-5 py-3 rounded-lg text-sm font-semibold bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 transition flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Main split view */}
      <div className="flex-1 flex relative overflow-hidden min-h-[calc(100vh-200px)]">
        {/* Left list */}
        <div className={`w-full lg:w-[60%] xl:w-[55%] 2xl:w-[50%] h-full overflow-y-auto bg-slate-50 ${viewMode === "map" ? "hidden lg:block" : "block"}`}>
          <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-4 pb-24 lg:pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Properties for Sale</h3>
              <p className="text-slate-500 text-sm mt-1">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredProperties.length)} of {filteredProperties.length} result{filteredProperties.length !== 1 ? "s" : ""}
              </p>
            </div>
            {currentProperties.map(prop => (
              <PropertyCard key={prop.id} data={prop} />
            ))}
            {filteredProperties.length === 0 && (
              <div className="text-center py-20">
                <div className="text-slate-400 text-lg mb-2">No lands found</div>
                <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
              </div>
            )}
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8 pb-4">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg font-semibold text-sm bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition"
                >
                  Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                    const showPage =
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    const showEllipsis =
                      (page === currentPage - 2 && currentPage > 3) ||
                      (page === currentPage + 2 && currentPage < totalPages - 2);
                    if (showEllipsis) return <span key={page} className="px-2 py-2 text-slate-400">...</span>;
                    if (!showPage) return null;
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`min-w-[40px] px-3 py-2 rounded-lg font-semibold text-sm transition ${currentPage === page ? "bg-emerald-600 text-white shadow-md" : "bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600"}`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg font-semibold text-sm bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Right map */}
        <div className={`w-full lg:w-[40%] xl:w-[45%] 2xl:w-[50%] bg-slate-200 relative border-l border-slate-300 ${viewMode === "list" ? "hidden lg:block" : "block"}`}>
          <RealMap
            properties={filteredProperties}
            onMarkerClick={property => setSelectedProperty(property)}
          />
          <PropertySideModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
            onNavigate={id => navigate(`/property/${id}`)}
          />
        </div>
      </div>

      {/* Mobile toggle */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white p-1.5 rounded-full flex shadow-2xl border-2 border-slate-200">
          <button
            onClick={() => setViewMode("list")}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${viewMode === "list" ? "bg-emerald-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <List className="w-4 h-4" />
            List
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${viewMode === "map" ? "bg-emerald-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <MapIcon className="w-4 h-4" />
            Map
          </button>
        </div>
      </div>

      <Footer />
      <WhatsAppChatbot />
    </>
  );
}

export default Home;
