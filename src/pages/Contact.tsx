import React from 'react';
import { Heart, Camera } from 'lucide-react';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import Testimonials from '@/components/Testimonials';
import Navbar from '@/components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <Navbar />
      <ContactHero />
      
      {/* Decorative divider */}
      <div className="flex justify-center py-8">
        <div className="flex items-center space-x-4">
          <Heart className="text-rose-400 animate-pulse" size={24} />
          <div className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300"></div>
          <Camera className="text-amber-500" size={28} />
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-300 to-rose-300"></div>
          <Heart className="text-rose-400 animate-pulse" size={24} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      <Testimonials />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-900 to-amber-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <Camera className="text-amber-300" size={32} />
          </div>
          <p className="text-lg mb-2">✨ Capturing Love Stories Since 2018 ✨</p>
          <p className="text-rose-200">© 2024 Bella Rose Photography. Made with 💕</p>
        </div>
      </footer>

      {/* Floating hearts animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="heart-float heart-1">💖</div>
        <div className="heart-float heart-2">💕</div>
        <div className="heart-float heart-3">💝</div>
        <div className="heart-float heart-4">🌹</div>
        <div className="heart-float heart-5">✨</div>
      </div>
    </div>
  );
};

export default Contact;