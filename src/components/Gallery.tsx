
import React from 'react';
import { Heart, Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=600",
      alt: "Beautiful wedding flowers",
      caption: "🌸 Dreamy florals"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=600",
      alt: "Romantic sunset",
      caption: "🌅 Golden hour magic"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600",
      alt: "Serene landscape",
      caption: "💕 Perfect backdrops"
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&h=600",
      alt: "Forest wedding",
      caption: "🌲 Enchanted settings"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="text-rose-500 animate-pulse" size={32} />
            <Camera className="text-amber-600" size={36} />
            <Heart className="text-rose-500 animate-pulse" size={32} />
          </div>
          <h2 className="text-5xl font-serif text-rose-800 mb-4">✨ Recent Love Stories ✨</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            🌹 Every couple has a unique story to tell, and I'm here to capture yours beautifully 🌹
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium text-center">{image.caption}</p>
                </div>
              </div>
              
              {/* Decorative hearts on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="text-white fill-white animate-pulse" size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg">
            📸 View Full Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
