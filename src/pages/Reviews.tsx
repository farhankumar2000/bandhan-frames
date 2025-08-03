import React, { useState } from 'react';
import { Heart, Star, Quote, Calendar, MapPin, Camera, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Reviews = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: '✨ All Reviews', emoji: '🌟' },
    { id: 'engagement', label: '💍 Engagement', emoji: '💕' },
    { id: 'wedding', label: '👰 Wedding Day', emoji: '💒' },
    { id: 'service', label: '🎭 Service', emoji: '👌' }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      category: 'wedding',
      rating: 5,
      date: "September 2024",
      location: "Napa Valley, CA",
      wedding: "Garden Wedding",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=100&h=100",
      text: "Bella exceeded every single expectation we had! From our first consultation to receiving our wedding photos, she was professional, creative, and so much fun to work with. Our photos are absolutely STUNNING - every single one tells our love story perfectly. She captured moments we didn't even know happened, and the emotions in every photo are so genuine. We've received countless compliments from family and friends. Bella isn't just a photographer, she's an artist who truly understands love. We couldn't be happier! 💕✨",
      highlights: ["Creative vision", "Professional service", "Emotional capture", "Stunning results"]
    },
    {
      id: 2,
      name: "Emma & James Rodriguez",
      category: 'engagement',
      rating: 5,
      date: "August 2024",
      location: "Malibu Beach, CA",
      wedding: "Beach Engagement",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=100&h=100",
      text: "Our engagement session with Bella was nothing short of magical! She made us feel so comfortable and natural throughout the entire shoot. The sunset photos at the beach are breathtaking - they look like they belong in a magazine! Bella's eye for detail and timing is incredible. She knew exactly when to capture the perfect light and our most genuine expressions. The whole experience was fun and romantic, and we can't wait to work with her again for our wedding! 🌅💖",
      highlights: ["Comfortable atmosphere", "Perfect timing", "Magazine quality", "Romantic experience"]
    },
    {
      id: 3,
      name: "Lisa & David Chen",
      category: 'wedding',
      rating: 5,
      date: "October 2024",
      location: "Sonoma County, CA",
      wedding: "Vineyard Wedding",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&h=100",
      text: "Choosing Bella was hands down the BEST decision we made for our wedding! She's incredibly talented, organized, and has such a warm personality that made everyone feel at ease. The way she captured our vineyard wedding was pure artistry - every photo is a masterpiece. She somehow managed to be everywhere without being intrusive, capturing all the important moments and emotions. Our families still talk about how wonderful she was to work with. The final gallery brought us to tears of joy! 🍇💕",
      highlights: ["Best decision", "Artistic masterpiece", "Non-intrusive", "Family approved"]
    },
    {
      id: 4,
      name: "Ashley & Robert Kim",
      category: 'service',
      rating: 5,
      date: "July 2024",
      location: "San Francisco, CA",
      wedding: "City Chic Wedding",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=100&h=100",
      text: "Bella's service from start to finish was absolutely phenomenal! She responded to every email promptly, was incredibly organized with our timeline, and went above and beyond to make sure everything was perfect. On our wedding day, she was like having a friend there - she knew exactly what we needed and when. Her professionalism combined with her warm personality made our day stress-free and enjoyable. The photos are incredible, but her service is what really sets her apart! 🏙️✨",
      highlights: ["Prompt communication", "Highly organized", "Friend-like service", "Stress-free experience"]
    },
    {
      id: 5,
      name: "Jennifer & Mark Williams",
      category: 'engagement',
      rating: 5,
      date: "June 2024",
      location: "Yosemite National Park, CA",
      wedding: "Mountain Engagement",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=100&h=100",
      text: "Our mountain engagement session with Bella was absolutely incredible! We were nervous about being photographed, but she made us feel so comfortable and guided us through every pose naturally. The photos in Yosemite are beyond our wildest dreams - they captured the adventure and romance perfectly. Bella hiked with us to the most beautiful spots and her enthusiasm for her craft is contagious. We felt like models in our own love story! Can't recommend her enough! 🏔️💕",
      highlights: ["Comfortable guidance", "Adventure photography", "Natural poses", "Enthusiastic artist"]
    },
    {
      id: 6,
      name: "Rachel & Tom Anderson",
      category: 'wedding',
      rating: 5,
      date: "May 2024",
      location: "Carmel Valley, CA",
      wedding: "Rustic Garden Wedding",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1e0cb?auto=format&fit=crop&w=100&h=100",
      text: "Bella captured our rustic garden wedding PERFECTLY! Every detail, every emotion, every magical moment - she didn't miss a thing. Her ability to blend into the background while still capturing intimate moments is truly a gift. The way she photographed our venue and decorations shows her incredible eye for beauty. Our parents and grandparents were so impressed with how she included everyone in the photos. The final collection tells our love story better than we ever could have imagined! 🌿💖",
      highlights: ["Perfect capture", "Incredible eye", "Inclusive photography", "Love story telling"]
    }
  ];

  const filteredReviews = selectedCategory === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 animate-float">
            <Quote className="text-rose-300 opacity-20" size={60} />
          </div>
          <div className="absolute top-40 right-32 animate-bounce">
            <Sparkles className="text-amber-400 opacity-30" size={40} />
          </div>
          <div className="absolute bottom-32 left-16 animate-pulse">
            <Star className="text-pink-400 opacity-25" size={50} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="text-4xl">⭐</div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif text-rose-800 mb-6">Reviews</h1>
            <p className="text-2xl text-amber-700 max-w-3xl mx-auto">
              💕 Love notes from beautiful couples 🌟
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-3xl p-8 max-w-4xl mx-auto border-2 border-rose-200 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif text-rose-800 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-600">⭐ Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-800 mb-2">{totalReviews * 5}+</div>
              <div className="text-lg text-amber-600 mb-2">💌</div>
              <p className="text-gray-600">Total Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-serif text-rose-800 mb-2">100%</div>
              <div className="text-lg text-amber-600 mb-2">💕</div>
              <p className="text-gray-600">Happy Couples</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-rose-100 hover:text-rose-700 border-2 border-rose-200'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-gray-800 mb-1">{review.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-purple-600 mb-2">
                    <Calendar size={14} />
                    <span>{review.date}</span>
                    <span>•</span>
                    <MapPin size={14} />
                    <span>{review.location}</span>
                  </div>
                  <p className="text-sm text-rose-600 font-medium">{review.wedding}</p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-rose-300 opacity-50" size={24} />
                  <p className="text-gray-700 leading-relaxed italic pl-6 text-sm">
                    {review.text}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-rose-200">
                  <div className="flex justify-center items-center space-x-2">
                    <Heart className="text-rose-400 animate-pulse" size={16} />
                    <span className="text-xs text-gray-500 font-medium">VERIFIED REVIEW</span>
                    <Heart className="text-rose-400 animate-pulse" size={16} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-serif text-white mb-6">💕 Ready to Add Your Love Story? 💕</h2>
            <p className="text-xl text-rose-100 mb-8">
              Join hundreds of happy couples who trusted me with their most precious moments ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center"
              >
                💌 Book Your Session
              </a>
              <a
                href="/portfolio"
                className="bg-amber-400 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center"
              >
                📸 View My Work
              </a>
            </div>
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

export default Reviews;