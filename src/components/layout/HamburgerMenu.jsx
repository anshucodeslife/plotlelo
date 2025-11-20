import React from 'react';
import { X, User, ArrowRight, FileText, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HamburgerMenu = ({ isOpen, onClose }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isAuthenticated ? 'bg-emerald-100 text-emerald-600 font-bold border border-emerald-200' : 'bg-slate-200'}`}>
              {isAuthenticated ? (user?.name?.charAt(0) || 'U') : <User className="w-5 h-5 text-slate-600" />}
            </div>
            <div>
              <p className="font-bold text-slate-900">{isAuthenticated ? user?.name : 'Guest User'}</p>
              {!isAuthenticated && (
                <Link to="/login" className="text-sm text-emerald-600 hover:underline" onClick={onClose}>
                  Login
                </Link>
              )}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-4">
          {/* Navigation Links */}
          <nav className="space-y-1">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              Buy Land
            </Link>
            <Link
              to="/map"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              Map View
            </Link>
            <Link
              to="/sell"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
            >
              Sell Land
            </Link>
            <div className="my-2 border-t border-slate-100"></div>
            <Link
              to="/about"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
            >
              About Us
            </Link>
            <Link
              to="/verification"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
            >
              Our Verification Process
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Cards */}
          <div className="mt-6 space-y-3">
            {/* Developer Dashboard */}
            {/* <Link 
              to="/developers"
              className="block w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
              onClick={onClose}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Developer Dashboard!</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link> */}

            {/* Tag Along Card */}
            <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-lg">
              <h3 className="font-bold text-emerald-900 mb-2">Tag Along</h3>
              <p className="text-sm text-emerald-700 mb-3">
                Buy Large Land Parcels with us, starting @ ₹4 Lakh/ Acre.
              </p>
              <Link 
                to="/tag-along"
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition"
                onClick={onClose}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 pt-6 border-t border-slate-200 space-y-2">
            <Link 
              to="/privacy" 
              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg transition text-slate-600"
              onClick={onClose}
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm">Privacy Policy</span>
            </Link>

            <Link 
              to="/terms" 
              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-lg transition text-slate-600"
              onClick={onClose}
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm">Terms & Conditions</span>
            </Link>

            {isAuthenticated && (
              <button
                onClick={() => {
                  logout();
                  onClose();
                  navigate('/');
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 rounded-lg transition mt-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
