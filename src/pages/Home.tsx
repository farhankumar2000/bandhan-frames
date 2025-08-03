import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Camera, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const Home = () => {
  const highlights = [
    {
      icon: <Camera className="text-rose-500" size={32} />,
      emoji: '📸',
      title: 'Award-Winning Photography',
      description: 'Capturing your most precious moments with artistic excellence and emotional depth'
    },
    {
      icon: <Heart className="text-pink-500" size={32} />,
      emoji: '💕',
      title: '200+ Happy Couples',
      description: 'Creating magical memories for couples across the country since 2018'
    },
    {
      icon: <Star className="text-amber-500" size={32} />,
      emoji: '⭐',
      title: '5.0 Star Rating',
      description: 'Consistently delivering breathtaking results that exceed expectations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e429?auto=format&fit=crop&w=1920&h=1080"
            alt="Beautiful wedding landscape"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-amber-500/30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-20 animate-float">
            <Heart className="text-rose-400 opacity-30" size={60} />
          </div>
          <div className="absolute top-48 right-32 animate-bounce">
            <Sparkles className="text-amber-400 opacity-40" size={50} />
          </div>
          <div className="absolute bottom-40 left-16 animate-pulse">
            <Camera className="text-pink-400 opacity-35" size={55} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 pt-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <div className="text-5xl">💐</div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>

            <h1 className="text-7xl lg:text-9xl font-serif text-rose-800 mb-6 tracking-wide">
              Bella Rose
            </h1>
            <div className="text-3xl lg:text-4xl text-amber-700 mb-8 font-light">
              ✨ Wedding Photography ✨
            </div>
            
            <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-10 mb-10 shadow-2xl border-2 border-rose-200 max-w-3xl mx-auto">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-6">
                💫 Where Love Meets Art 💫
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                🌸 Transforming your most precious moments into timeless masterpieces 🌸
                <br />
                💕 Every glance, every touch, every smile - beautifully preserved forever 💕
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/portfolio">
                <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-10 py-5 rounded-full text-xl font-medium transform hover:scale-105 transition-all shadow-lg">
                  📸 View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white px-10 py-5 rounded-full text-xl font-medium transform hover:scale-105 transition-all shadow-lg">
                  💌 Book Your Session
                  <Heart className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-purple-800 mb-6">💖 Why Choose Bella Rose? 💖</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              🌟 Experience the difference of working with a passionate artist who understands love 🌟
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg">
                      {highlight.icon}
                    </div>
                    <div className="text-4xl mb-4">{highlight.emoji}</div>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-serif text-white mb-6">💕 Ready to Create Magic? 💕</h2>
            <p className="text-xl text-rose-100 mb-8">
              Let's capture your love story in the most beautiful way possible ✨
            </p>
            <Link to="/contact">
              <Button className="bg-white text-rose-600 hover:bg-rose-50 px-12 py-5 rounded-full text-xl font-medium transform hover:scale-105 transition-all shadow-lg">
                💌 Start Your Journey
                <Heart className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

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

export default Home;