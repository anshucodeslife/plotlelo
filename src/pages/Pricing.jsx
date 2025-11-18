import React from 'react';
import Navbar from '../components/Navbar';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-slate-500 mb-12">Choose the plan that fits your real estate journey.</p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          
          {/* FREE PLAN */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-slate-900">Basic</h3>
            <div className="my-4"><span className="text-4xl font-bold">Free</span></div>
            <p className="text-slate-500 text-sm mb-6">For casual browsers exploring land prices.</p>
            <button className="w-full py-2 border border-slate-200 rounded-lg font-medium text-slate-600 hover:border-slate-900 hover:text-slate-900 transition">Get Started</button>
            <div className="mt-8 space-y-3">
              <li className="flex gap-3 text-sm text-slate-600"><Check className="w-5 h-5 text-emerald-500" /> View standard listings</li>
              <li className="flex gap-3 text-sm text-slate-600"><Check className="w-5 h-5 text-emerald-500" /> Basic map search</li>
            </div>
          </div>

          {/* PRO PLAN (Highlighted) */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-900 shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <h3 className="text-lg font-semibold text-white">Premium</h3>
            <div className="my-4 text-white"><span className="text-4xl font-bold">₹499</span><span className="text-slate-400 text-sm">/mo</span></div>
            <p className="text-slate-400 text-sm mb-6">For serious buyers who need owner contacts.</p>
            <button className="w-full py-3 bg-emerald-600 rounded-lg font-bold text-white hover:bg-emerald-500 transition">Subscribe Now</button>
            <div className="mt-8 space-y-3">
              <li className="flex gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-emerald-400" /> Access Owner Phone Numbers</li>
              <li className="flex gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-emerald-400" /> Verify Land Documents</li>
              <li className="flex gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-emerald-400" /> Advanced Revenue Map Overlay</li>
            </div>
          </div>

          {/* DEVELOPER PLAN */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-slate-900">Developer</h3>
            <div className="my-4"><span className="text-4xl font-bold">₹4,999</span><span className="text-slate-500 text-sm">/mo</span></div>
            <p className="text-slate-500 text-sm mb-6">For agents and developers listing multiple lands.</p>
            <button className="w-full py-2 border border-slate-200 rounded-lg font-medium text-slate-600 hover:border-slate-900 hover:text-slate-900 transition">Contact Sales</button>
            <div className="mt-8 space-y-3">
              <li className="flex gap-3 text-sm text-slate-600"><Check className="w-5 h-5 text-emerald-500" /> Unlimited Listings</li>
              <li className="flex gap-3 text-sm text-slate-600"><Check className="w-5 h-5 text-emerald-500" /> Featured "Top Slot" placement</li>
              <li className="flex gap-3 text-sm text-slate-600"><Check className="w-5 h-5 text-emerald-500" /> Dedicated Relationship Manager</li>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;