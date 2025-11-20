import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { Users, TrendingUp, Shield, Phone } from 'lucide-react';

const TagAlong = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Tag-Along Investment
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Invest in large land parcels alongside plotlelo. Get access to premium land deals 
                with verified documentation and legal clearance.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-100 px-6 py-3 rounded-lg">
                  <div className="text-sm text-emerald-700 font-semibold">Starting From</div>
                  <div className="text-3xl font-bold text-emerald-600">₹4 Lakh/acre</div>
                </div>
              </div>
              <a
                href="https://wa.me/+917506980918/?text=I'm interested in Tag-Along investment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Get Started
              </a>
            </div>
            <div className="bg-emerald-100 rounded-3xl p-8 flex items-center justify-center">
              <Users className="w-64 h-64 text-emerald-600" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            How Tag-Along Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We Find Deals</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team identifies premium land parcels with high appreciation potential across India.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">You Invest</h3>
              <p className="text-slate-600 leading-relaxed">
                Join us in purchasing the land parcel. Minimum investment starts at ₹4 lakh per acre.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Shared Returns</h3>
              <p className="text-slate-600 leading-relaxed">
                Benefit from land appreciation and potential development opportunities together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Choose Tag-Along?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Verified Properties</h3>
              <p className="text-slate-600 leading-relaxed">
                Every property goes through our rigorous verification process ensuring clear title 
                and legal compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">High Potential</h3>
              <p className="text-slate-600 leading-relaxed">
                We select properties in high-growth areas with strong appreciation potential and 
                development prospects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Shared Investment</h3>
              <p className="text-slate-600 leading-relaxed">
                Pool resources with other investors to access larger, more lucrative land deals 
                that would be difficult individually.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <Phone className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Expert Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team handles all documentation, legal work, and property management on your behalf.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to invest in premium land?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join our Tag-Along program and start building your land portfolio today.
          </p>
          <a
            href="https://wa.me/+917506980918/?text=I want to know more about Tag-Along investment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TagAlong;
