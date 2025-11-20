import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { Shield, Users, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About plotlelo
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              India's trusted platform for buying and selling verified agricultural lands. 
              We're on a mission to make land transactions transparent, safe, and hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                plotlelo was founded with a simple yet powerful vision: to eliminate the risks and uncertainties 
                associated with land transactions in India.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our preliminary verification process eliminates 90% of the risks, giving buyers and sellers 
                the confidence they need to make informed decisions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
                <div className="text-slate-600">Properties Listed</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">5K+</div>
                <div className="text-slate-600">Happy Customers</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">90%</div>
                <div className="text-slate-600">Risk Reduction</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">24hr</div>
                <div className="text-slate-600">Listing Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Trust</h3>
              <p className="text-slate-600">
                Building trust through verified listings and transparent processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Community</h3>
              <p className="text-slate-600">
                Connecting buyers and sellers across India in a safe environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Target className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Accuracy</h3>
              <p className="text-slate-600">
                Ensuring every listing is verified with accurate information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <Award className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Excellence</h3>
              <p className="text-slate-600">
                Committed to providing the best land buying experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to find your perfect land?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of satisfied customers who trust plotlelo for their land transactions.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition shadow-lg"
          >
            Browse Properties
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
