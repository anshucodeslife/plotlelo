import React from 'react';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const UserSidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <span className="text-xl font-bold text-slate-600">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div>
              <p className="font-bold text-slate-900">{user?.phone || '+91 89999 49622'}</p>
              <Link to="/dashboard" onClick={onClose} className="text-sm text-emerald-600 hover:underline">
                View Profile
              </Link>
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
              to="/about"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition"
            >
              <span className="font-medium">About Us</span>
            </Link>
            <Link
              to="/verification"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition"
            >
              <span className="font-medium">Our Verification Process</span>
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition"
            >
              <span className="font-medium">Contact Us</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>
          </nav>

          {/* Developer Dashboard CTA */}
          {/* <div className="mt-6">
            <Link 
              to="/developers"
              onClick={onClose}
              className="block w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold">Developer Dashboard!</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div> */}

          {/* Tag Along Card */}
          <div className="mt-4 bg-amber-50 border-2 border-amber-200 p-4 rounded-lg">
            <h3 className="font-bold text-amber-900 mb-2">Tag Along</h3>
            <p className="text-sm text-amber-800 mb-3">
              Buy Large Land Parcels with us, starting @ ₹4 Lakh/ Acre.
            </p>
            <Link 
              to="/tag-along"
              onClick={onClose}
              className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-slate-200 space-y-1">
            <Link 
              to="/privacy" 
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
            >
              <span className="text-sm">Privacy Policy</span>
            </Link>
            <Link 
              to="/terms" 
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition"
            >
              <span className="text-sm">Terms & Conditions</span>
            </Link>
          </div>

          {/* Logout Button */}
          {user && (
            <div className="mt-4">
              <button
                onClick={() => {
                  logout();
                  onClose();
                  navigate('/');
                }}
                className="w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
