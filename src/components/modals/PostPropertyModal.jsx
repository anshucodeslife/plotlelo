import React, { useState } from 'react';
import { X, Upload, MapPin } from 'lucide-react';

const PostPropertyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    acres: '',
    price: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
🏞️ *New Property Listing Request*

👤 *Owner Details:*
Name: ${formData.name}
Phone: ${formData.phone}

📍 *Property Details:*
Location: ${formData.location}
Area: ${formData.acres} Acres
Price: ₹${formData.price}

📝 *Description:*
${formData.description}

---
Sent from plotlelo.com
    `.trim();

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/+917506980918/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close
    setFormData({
      name: '',
      phone: '',
      location: '',
      acres: '',
      price: '',
      description: ''
    });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl z-50 max-h-[90vh] overflow-hidden flex flex-col mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <Upload className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Post Property</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                required
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                required
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Property Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  required
                  placeholder="Village, Mandal, District"
                />
              </div>
            </div>

            {/* Acres */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Total Area (Acres) *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.acres}
                onChange={(e) => setFormData({...formData, acres: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                required
                placeholder="e.g., 5.5"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Expected Price (₹) *
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                required
                placeholder="Total price in rupees"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Details
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none"
                placeholder="Any additional information about the property..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Submit via WhatsApp
            </button>
            <p className="text-xs text-slate-500 text-center mt-3">
              Your details will be sent to our team via WhatsApp
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostPropertyModal;
