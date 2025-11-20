import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms & Conditions</h1>
          <p className="text-slate-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using plotlelo's services, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Services</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Use the services in any way that violates applicable laws or regulations</li>
                <li>Post false, misleading, or fraudulent property listings</li>
                <li>Impersonate or attempt to impersonate plotlelo or another user</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Property Listings</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When listing a property on plotlelo, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>You have the legal right to list the property</li>
                <li>All information provided is accurate and complete</li>
                <li>The property is not subject to any undisclosed encumbrances</li>
                <li>You will provide all necessary documentation for verification</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Verification Process</h2>
              <p className="text-slate-600 leading-relaxed">
                plotlelo conducts preliminary verification of property listings. However, we do not guarantee the 
                accuracy or completeness of any information. Buyers are advised to conduct their own due diligence 
                before making any purchase decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Fees and Payments</h2>
              <p className="text-slate-600 leading-relaxed">
                Listing properties on plotlelo is free. Premium services are available at additional cost. 
                All fees are non-refundable unless otherwise stated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                plotlelo shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of or inability to use the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Termination</h2>
              <p className="text-slate-600 leading-relaxed">
                We may terminate or suspend your account and access to the services immediately, without prior notice, 
                for any breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes 
                via email or through the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <p className="text-emerald-600 font-semibold mt-4">
                Email: legal@plotlelo.com<br />
                Phone: +91 75069 80918
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsConditions;
