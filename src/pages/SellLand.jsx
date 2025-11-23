import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/layout/Footer';
import { Upload, MapPin, Phone, CheckCircle, Star, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';

const SellLand = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    acres: '',
    price: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🏞️ *New Property Listing Request*

👤 *Owner Details:*
Name: ${formData.name}
Phone: ${formData.phone}

📍 *Property Details:*
Location: ${formData.location}
Area: ${formData.acres} Acres
Expected Price: ₹${formData.price}

📝 *Description:*
${formData.description}

---
Sent from plotlelo.com
    `.trim();

    const whatsappUrl = `https://wa.me/+917738377791/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      location: '',
      acres: '',
      price: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative bg-emerald-700 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop)',
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-emerald-700/85"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sell Your Land <span className="text-emerald-200">Faster</span> with plotlelo
              </h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                List your property for free and connect with verified buyers. Get the best price with our expert assistance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span className="text-emerald-100">Free Listing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span className="text-emerald-100">Verified Buyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-200" />
                  <span className="text-emerald-100">Quick Sale</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-emerald-200 text-sm">Properties Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">1000+</div>
                    <div className="text-emerald-200 text-sm">Happy Sellers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">15</div>
                    <div className="text-emerald-200 text-sm">Days Avg. Sale</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-emerald-200 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Sell with plotlelo?
            </h2>
            <p className="text-xl text-slate-600">
              We make selling land simple, fast, and profitable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Best Price</h3>
              <p className="text-slate-600 leading-relaxed">
                Get competitive offers from verified buyers. Our platform ensures you get the best market value for your land.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Quick Sale</h3>
              <p className="text-slate-600 leading-relaxed">
                Average sale time of just 15 days. Our verified buyer network ensures faster transactions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Safe & Secure</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete legal assistance and documentation support. We ensure a smooth and secure transaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Listing Form Section */}
      <div className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              List Your Property
            </h2>
            <p className="text-xl text-slate-600">
              Fill in the details and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    required
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Property Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    required
                    placeholder="Village, Mandal, District, State"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Acres */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Total Area (Acres) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.acres}
                    onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    required
                    placeholder="e.g., 5.5"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Expected Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    required
                    placeholder="Total price in rupees"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none transition"
                  placeholder="Any additional information about the property (water source, road access, crops, etc.)"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Upload className="w-6 h-6" />
                Submit Property Details
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-slate-500 text-center">
                By submitting, you agree to our Terms & Conditions. We'll contact you via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Sellers Say
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands of satisfied land sellers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "Sold my 10-acre farmland in Karjat in just 12 days! The team was professional and handled all documentation. Highly recommend plotlelo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-lg">RP</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Rajesh Patil</div>
                  <div className="text-sm text-slate-500">Karjat, Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "Got the best price for my agricultural land near Nashik. The verification process gave buyers confidence. Excellent service!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">SD</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Suresh Deshmukh</div>
                  <div className="text-sm text-slate-500">Nashik, Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "Very transparent process for my Alibaug plot. No hidden charges. The team helped me throughout the sale. Will definitely recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-lg">MS</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Meera Sawant</div>
                  <div className="text-sm text-slate-500">Alibaug, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Sell Your Land?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get started today and connect with verified buyers
          </p>
          <a
            href="https://wa.me/+917738377791/?text=I want to sell my land"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellLand;