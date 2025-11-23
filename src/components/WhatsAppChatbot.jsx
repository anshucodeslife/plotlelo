import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = '+917738377791';
    const defaultMessage = 'Hi! I am interested in buying/selling land on Plotlelo.';

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating Button with pulse animation */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl animate-pulse hover:animate-none transition-all duration-300"
                aria-label="Open WhatsApp Chat"
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 max-w-xs bg-white rounded-2xl shadow-2xl border border-gray-200">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-t-2xl">
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-6 h-6" />
                            <div>
                                <h3 className="font-semibold text-sm">Plotlelo Support</h3>
                                <p className="text-xs opacity-90">Typically replies instantly</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    {/* Body */}
                    <div className="p-4 bg-gray-50 min-h-[180px]">
                        <p className="mb-2 text-sm"><strong>Hello!</strong> Welcome to Plotlelo! How can we help you today?</p>
                        <div className="space-y-2">
                            <button onClick={handleWhatsAppClick} className="w-full text-left bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg p-2 text-sm text-gray-700 transition">
                                🏡 I want to buy land
                            </button>
                            <button onClick={handleWhatsAppClick} className="w-full text-left bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg p-2 text-sm text-gray-700 transition">
                                💰 I want to sell my land
                            </button>
                            <button onClick={handleWhatsAppClick} className="w-full text-left bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg p-2 text-sm text-gray-700 transition">
                                ❓ I have a question
                            </button>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="p-3 border-t border-gray-200 bg-white rounded-b-2xl">
                        <button onClick={handleWhatsAppClick} className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition shadow-md hover:shadow-lg">
                            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppChatbot;
