import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="bg-slate-900 p-6 text-center">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto shadow-lg mb-4">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Welcome back</h2>
          <p className="text-slate-400 text-sm mt-1">Login to access premium land data</p>
        </div>

        <div className="p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                  +91
                </span>
                <input 
                  type="tel" 
                  placeholder="98765 43210" 
                  className="flex-1 block w-full rounded-none rounded-r-lg border border-slate-300 py-3 px-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
                />
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
              Send OTP <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
             <p className="text-xs text-slate-400">By continuing, you agree to our Terms & Privacy Policy.</p>
             <Link to="/" className="text-sm text-emerald-600 font-semibold mt-4 block hover:underline">
               ← Back to Home
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;