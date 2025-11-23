import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { Shield, FileCheck, MapPin, Users, CheckCircle } from 'lucide-react';

const VerificationProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Document Submission",
      description: "Seller submits property documents including title deed, survey numbers, and ownership proof.",
      icon: FileCheck
    },
    {
      number: "02",
      title: "Preliminary Verification",
      description: "Our team verifies document authenticity, checks for encumbrances, and validates ownership.",
      icon: Shield
    },
    {
      number: "03",
      title: "Site Inspection",
      description: "Physical verification of the property location, boundaries, and current status.",
      icon: MapPin
    },
    {
      number: "04",
      title: "Legal Review",
      description: "Legal experts review all documents to ensure clear title and no legal disputes.",
      icon: Users
    },
    {
      number: "05",
      title: "Verification Badge",
      description: "Property receives verified badge and goes live on plotlelo within 24 hours.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-emerald-600" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
                Our Verification Process
              </h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed">
              We eliminate 90% of risks associated with land transactions through our comprehensive
              5-step verification process.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-emerald-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-emerald-100">Risk Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24hr</div>
              <div className="text-emerald-100">Verification Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-100">Document Check</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-emerald-100">Verification Steps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            How We Verify Properties
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-600 font-bold text-2xl">{step.number}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Check */}
      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What We Verify
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Title Deed Authenticity",
              "Ownership Verification",
              "Encumbrance Certificate",
              "Survey Number Validation",
              "Property Boundaries",
              "Legal Clearances",
              "Tax Payment Status",
              "Development Permissions",
              "Land Use Classification"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to list your verified property?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Our verification process ensures your property stands out to serious buyers.
          </p>
          <a
            href="https://wa.me/+917738377791/?text=I want to list my verified land"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition shadow-lg"
          >
            List Your Property
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VerificationProcess;
