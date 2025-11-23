import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { Building2, Target, Award, Phone } from 'lucide-react';

const CorporateLand = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Corporate Land Acquisitions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Professional land acquisition services for corporations and enterprises.
              We help you find, verify, and acquire large land parcels for your business needs.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
              <div className="text-sm text-amber-700 font-semibold mb-1">Minimum Budget</div>
              <div className="text-3xl font-bold text-amber-600">₹25 Crores</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Corporate Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-200 transition">
              <Building2 className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Land Sourcing</h3>
              <p className="text-slate-600 leading-relaxed">
                We identify and source large land parcels matching your specific requirements
                across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-200 transition">
              <Target className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Due Diligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive legal and technical due diligence ensuring clear title and
                compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-200 transition">
              <Award className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">End-to-End Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete support from identification to registration, including negotiations
                and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Process
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                description: "Understanding your business needs, location preferences, and budget constraints."
              },
              {
                step: "02",
                title: "Land Identification",
                description: "Sourcing suitable land parcels from our extensive network and database."
              },
              {
                step: "03",
                title: "Verification & Due Diligence",
                description: "Comprehensive legal, technical, and financial verification of shortlisted properties."
              },
              {
                step: "04",
                title: "Negotiation & Documentation",
                description: "Professional negotiation and complete documentation support."
              },
              {
                step: "05",
                title: "Registration & Handover",
                description: "Smooth registration process and property handover to your company."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-emerald-600">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Real Estate Developers",
              "Manufacturing Units",
              "Warehousing & Logistics",
              "Solar & Renewable Energy",
              "Educational Institutions",
              "Healthcare Facilities",
              "IT Parks & SEZs",
              "Agricultural Enterprises"
            ].map((industry, index) => (
              <div key={index} className="bg-emerald-50 p-6 rounded-xl text-center border border-emerald-200">
                <p className="font-semibold text-slate-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to acquire land for your business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss your corporate land acquisition requirements.
          </p>
          <a
            href="https://wa.me/+917738377791/?text=I'm interested in corporate land acquisition services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Schedule a Consultation
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CorporateLand;
