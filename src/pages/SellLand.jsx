import React from 'react';
import Navbar from '../components/Navbar';
import { UploadCloud, MapPin, CheckCircle } from 'lucide-react';

const SellLand = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Sell your Land on Plotlelo</h1>
          <p className="text-slate-500 mt-2">Reach 10,000+ verified buyers. Zero brokerage for owners.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Form Header */}
          <div className="bg-slate-900 px-8 py-4 flex justify-between items-center">
            <span className="text-white font-semibold">Property Details</span>
            <span className="text-slate-400 text-sm">Step 1 of 3</span>
          </div>

          <form className="p-8 space-y-6">
            {/* Location Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Property Location</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="District" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                <input type="text" placeholder="Mandal / Village" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input type="text" placeholder="Paste Google Maps Link (Optional)" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Details Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Land Details</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-400 mb-1 block">Total Acres</span>
                  <input type="number" placeholder="0" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 mb-1 block">Price Per Acre</span>
                  <input type="text" placeholder="₹ 0" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition cursor-pointer">
              <UploadCloud className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-900">Click to upload property photos</p>
              <p className="text-xs text-slate-500">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
            </div>

            <button type="button" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
              Post Property Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellLand;