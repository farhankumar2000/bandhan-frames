
import React from 'react';
import { Heart, Sparkles, Camera } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 animate-float">
          <Heart className="text-rose-300 opacity-20" size={60} />
        </div>
        <div className="absolute top-40 right-32 animate-bounce">
          <Sparkles className="text-amber-400 opacity-30" size={40} />
        </div>
        <div className="absolute bottom-32 left-16 animate-pulse">
          <Camera className="text-pink-400 opacity-25" size={50} />
        </div>
        <div className="absolute top-1/2 right-20 animate-float">
          <Heart className="text-rose-400 opacity-20" size={35} />
        </div>
      </div>

      {/* Main hero image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1920&h=1080"
          alt="Beautiful wedding flowers"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-amber-500/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Decorative top */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
              <Heart className="text-rose-500 animate-pulse" size={32} />
              <div className="text-4xl">💐</div>
              <Heart className="text-rose-500 animate-pulse" size={32} />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
          </div>

          <h1 className="text-6xl lg:text-8xl font-serif text-rose-800 mb-6 tracking-wide">
            Bella Rose
          </h1>
          <div className="text-2xl lg:text-3xl text-amber-700 mb-4 font-light">
            💕 Wedding Photography 💕
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl border border-rose-200">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-4">
              ✨ Let's Create Magic Together ✨
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              🌸 Capturing your most precious moments with love, artistry, and joy 🌸
              <br />
              💫 Your love story deserves to be told beautifully 💫
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg">
              💌 Get In Touch
            </button>
            <button className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-amber-500 hover:to-orange-500 transform hover:scale-105 transition-all shadow-lg">
              📸 View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="heart-float heart-1">💖</div>
        <div className="heart-float heart-2">💕</div>
        <div className="heart-float heart-3">💝</div>
        <div className="heart-float heart-4">🌹</div>
        <div className="heart-float heart-5">✨</div>
      </div>
    </div>
  );
};

export default ContactHero;
