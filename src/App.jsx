import React, { useState, useMemo } from 'react';
import { Filter, Search, Map as MapIcon, List, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
// import MockMap from './components/MockMap';
import RealMap from './components/RealMap';
import { PROPERTIES } from './data/mockData';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import SellLand from './pages/SellLand';
// import Pricing from './pages/Pricing';
// import Login from './pages/Login';

function App() {
  const [viewMode, setViewMode] = useState('both'); // 'list', 'map', 'both' (desktop default)
  const [filterVerified, setFilterVerified] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Logic to filter data
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchesSearch = p.location.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.location.district.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVerified = filterVerified ? p.verified : true;
      return matchesSearch && matchesVerified;
    });
  }, [searchQuery, filterVerified]);

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <Navbar />

      {/* --- FILTER BAR (Sticky) --- */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-sm z-40 shrink-0">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row gap-3 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search Village, Mandal..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg border-none focus:ring-2 focus:ring-emerald-500/50 text-sm font-medium transition"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setFilterVerified(!filterVerified)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition flex items-center gap-2 ${filterVerified ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
            >
              Verified Lands {filterVerified && '✓'}
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:border-slate-300">
              Price: Low to High
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:border-slate-300">
              Size: 1-5 Acres
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (Split View) --- */}
      <div className="flex-1 flex relative overflow-hidden">
        
        {/* LEFT: LIST VIEW */}
        <div className={`
          flex-1 h-full overflow-y-auto p-2 sm:p-4 md:p-6 bg-slate-50 scroll-smooth
          ${viewMode === 'map' ? 'hidden' : 'block'}
          lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[50%]
        `}>
          <div className="max-w-3xl mx-auto space-y-4 pb-24">
            <div className="flex justify-between items-end mb-2 px-1">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900">Properties for Sale</h1>
                <p className="text-slate-500 text-xs sm:text-sm">Showing {filteredProperties.length} results</p>
              </div>
            </div>

            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} data={prop} />
            ))}

            {filteredProperties.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400">No lands found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: MAP VIEW */}
        <div className={`
          flex-1 bg-slate-200 relative border-l border-slate-300
          ${viewMode === 'list' ? 'hidden lg:block' : 'block'}
        `}>
          <RealMap
            properties={filteredProperties} 
            // onMarkerClick={(id) => alert(`Clicked Property ID: ${id}`)} 
          />
        </div>

        {/* --- MOBILE FLOATING TOGGLE --- */}
        <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-slate-900 p-1 rounded-full flex shadow-2xl border border-slate-700/50">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${viewMode === 'list' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400'}`}
            >
              <List className="w-3 h-3" /> List
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${viewMode === 'map' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400'}`}
            >
              <MapIcon className="w-3 h-3" /> Map
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;