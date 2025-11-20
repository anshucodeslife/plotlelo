import React, { useState } from 'react';
import { MapPin, ArrowRight, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setShowOTP(true);
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Demo: Accept any OTP
    if (otp.length >= 4) {
      login(phone);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="bg-slate-900 p-6 text-center">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto shadow-lg mb-4">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Welcome back</h2>
          <p className="text-slate-400 text-sm mt-1">Login to access your dashboard</p>
        </div>

        {/* Demo Credentials Info */}
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 m-6 mb-0">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-emerald-900 text-sm mb-1">Demo Login</h3>
              <p className="text-emerald-700 text-xs leading-relaxed">
                Enter any 10-digit phone number and any 4-digit OTP to login and explore the dashboard!
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-6">
          {!showOTP ? (
            <form onSubmit={handleSendOTP} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    placeholder="98765 43210" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 block w-full rounded-none rounded-r-lg border border-slate-300 py-3 px-3 focus:ring-2 focus:ring-emerald-500 outline-none" 
                    required
                    minLength="10"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
              >
                Send OTP <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Enter OTP</label>
                <input 
                  type="text" 
                  placeholder="1234" 
                  value={otp}
                  onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full rounded-lg border border-slate-300 py-3 px-3 focus:ring-2 focus:ring-emerald-500 outline-none text-center text-2xl tracking-widest font-bold" 
                  required
                  minLength="4"
                  autoFocus
                />
                <p className="text-xs text-slate-500 mt-2">
                  OTP sent to +91 {phone}
                </p>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
              >
                Verify & Login <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                type="button"
                onClick={() => setShowOTP(false)}
                className="w-full text-emerald-600 font-semibold text-sm hover:underline"
              >
                ← Change Phone Number
              </button>
            </form>
          )}

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