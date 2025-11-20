import React, { useState } from "react";
import { User, Menu, Plus, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/plotlelo-logo.jpg";
import HamburgerMenu from "./layout/HamburgerMenu";
import UserSidebar from "./layout/UserSidebar";
import PostPropertyModal from "./modals/PostPropertyModal";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserSidebar, setShowUserSidebar] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const { user, isAuthenticated } = useAuth();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* LEFT SIDE - LOGO & TITLE */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="w-9 h-9 rounded-lg overflow-hidden shadow-md">
                <img
                  src={logo}
                  alt="Plotlelo Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                  plotlelo
                </span>
                <span className="text-slate-400 font-light hidden sm:inline">|</span>
                <span className="text-slate-700 font-medium text-sm hidden sm:inline">
                  Buy Verified Lands
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER NAVIGATION */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/map"
              className="px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium text-sm"
            >
              Map-View
            </Link>

            <Link
              to="/"
              className="px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium text-sm"
            >
              Buy Land
            </Link>

            <Link
              to="/sell"
              className="px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium text-sm"
            >
              Sell Land
            </Link>

            {/* PREMIUM - COMMENTED OUT */}
            {/* <Link
              to="/pricing"
              className="flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 px-4 py-2 rounded-lg hover:bg-amber-100 transition font-semibold text-sm"
            >
              <Crown className="w-4 h-4" />
              Premium
            </Link> */}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-3">
            {/* POST PROPERTY */}
            <button
              onClick={() => setShowPostModal(true)}
              className="hidden sm:flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-lg transition border border-slate-200"
            >
              <Plus className="w-4 h-4" />
              Post Property
            </button>

            {/* USER PROFILE OR LOGIN */}
            {isAuthenticated ? (
              <button
                onClick={() => setShowUserSidebar(true)}
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full hover:bg-slate-50 transition shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold border border-emerald-200">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <span className="hidden sm:inline font-medium text-sm">{user?.name}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition shadow-sm flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Login
              </Link>
            )}

            {/* MOBILE MENU */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* User Sidebar */}
      <UserSidebar isOpen={showUserSidebar} onClose={() => setShowUserSidebar(false)} />
      
      {/* Post Property Modal */}
      <PostPropertyModal isOpen={showPostModal} onClose={() => setShowPostModal(false)} />
    </>
  );
};

export default Navbar;
