
import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael ❤️",
      wedding: "Garden Wedding, May 2024",
      text: "Bella captured our day so perfectly! Every emotion, every laugh, every tear of joy - she was there with such grace and artistry. Our photos are absolutely magical! 💕",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Emma & James 💕",
      wedding: "Beach Wedding, August 2024",
      text: "From our engagement shoot to our wedding day, Bella made us feel so comfortable and natural. The sunset photos are BREATHTAKING! We're so grateful! ✨",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Lisa & David 🌹",
      wedding: "Vineyard Wedding, September 2024",
      text: "Choosing Bella was the best decision we made for our wedding! She's not just a photographer, she's an artist who captures souls. Every photo tells our love story! 🥰",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="text-purple-500 animate-pulse" size={32} />
            <Quote className="text-rose-600" size={36} />
            <Heart className="text-purple-500 animate-pulse" size={32} />
          </div>
          <h2 className="text-5xl font-serif text-purple-800 mb-4">💫 Love Notes From Couples 💫</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            🌟 Nothing makes me happier than hearing from my beautiful couples! 🌟
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-serif text-gray-800 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600 font-medium">{testimonial.wedding}</p>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-rose-300 opacity-50" size={24} />
                  <p className="text-gray-700 leading-relaxed italic pl-6">
                    {testimonial.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-200">
                  <div className="flex justify-center space-x-2">
                    <Heart className="text-rose-400 animate-pulse" size={16} />
                    <span className="text-xs text-gray-500 font-medium">VERIFIED REVIEW</span>
                    <Heart className="text-rose-400 animate-pulse" size={16} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-3xl p-8 max-w-2xl mx-auto border-2 border-rose-200">
            <h3 className="text-2xl font-serif text-rose-800 mb-4">💕 Ready to Create Your Story? 💕</h3>
            <p className="text-gray-600 mb-6">
              Join over 200+ happy couples who trusted me with their most precious day! ✨
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span>⭐ 5.0 Average Rating</span>
              <span>•</span>
              <span>💌 200+ Reviews</span>
              <span>•</span>
              <span>🏆 Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
