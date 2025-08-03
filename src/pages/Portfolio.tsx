import React, { useState } from 'react';
import { Heart, Camera, Filter, Grid, List, Eye, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', label: '✨ All Work', emoji: '🌟' },
    { id: 'engagement', label: '💕 Engagement', emoji: '💍' },
    { id: 'ceremony', label: '💒 Ceremony', emoji: '👰' },
    { id: 'reception', label: '🎉 Reception', emoji: '💃' },
    { id: 'portraits', label: '📸 Portraits', emoji: '👫' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Sarah & Michael - Garden Elegance',
      category: 'engagement',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=1000',
      location: 'Botanical Gardens, California',
      season: 'Spring 2024',
      description: 'A dreamy engagement session among blooming flowers and golden sunlight'
    },
    {
      id: 2,
      title: 'Emma & James - Beach Ceremony',
      category: 'ceremony',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=1000',
      location: 'Malibu Beach, California',
      season: 'Summer 2024',
      description: 'Oceanside vows with stunning sunset backdrop and emotional moments'
    },
    {
      id: 3,
      title: 'Lisa & David - Romantic Portraits',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=1000',
      location: 'Napa Valley, California',
      season: 'Fall 2024',
      description: 'Intimate couple portraits in the golden light of autumn vineyards'
    },
    {
      id: 4,
      title: 'Celebration Dance Floor',
      category: 'reception',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=1000',
      location: 'Grand Ballroom, San Francisco',
      season: 'Winter 2024',
      description: 'Joyful reception moments filled with dancing and pure happiness'
    },
    {
      id: 5,
      title: 'Mountain Engagement',
      category: 'engagement',
      image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&h=1000',
      location: 'Yosemite National Park',
      season: 'Summer 2024',
      description: 'Adventurous couple session with breathtaking mountain views'
    },
    {
      id: 6,
      title: 'Sunset Ceremony Magic',
      category: 'ceremony',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e429?auto=format&fit=crop&w=800&h=1000',
      location: 'Sonoma County, California',
      season: 'Fall 2024',
      description: 'Golden hour ceremony with dramatic natural lighting'
    },
    {
      id: 7,
      title: 'Garden Party Reception',
      category: 'reception',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1e0cb?auto=format&fit=crop&w=800&h=1000',
      location: 'Private Estate, Carmel',
      season: 'Spring 2024',
      description: 'Elegant outdoor reception under twinkling lights'
    },
    {
      id: 8,
      title: 'Intimate Portrait Session',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=1000',
      location: 'Redwood Forest, California',
      season: 'Summer 2024',
      description: 'Moody forest portraits with dreamy natural lighting'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 animate-float">
            <Camera className="text-rose-300 opacity-20" size={60} />
          </div>
          <div className="absolute top-40 right-32 animate-bounce">
            <Sparkles className="text-amber-400 opacity-30" size={40} />
          </div>
          <div className="absolute bottom-32 left-16 animate-pulse">
            <Heart className="text-pink-400 opacity-25" size={50} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="text-4xl">📸</div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif text-rose-800 mb-6">Portfolio</h1>
            <p className="text-2xl text-amber-700 max-w-3xl mx-auto">
              💕 A curated collection of love stories beautifully captured 📸
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
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

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 justify-center lg:justify-end">
            <Button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl ${
                viewMode === 'grid'
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/80 text-gray-700 hover:bg-rose-100'
              }`}
            >
              <Grid size={20} />
            </Button>
            <Button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl ${
                viewMode === 'list'
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/80 text-gray-700 hover:bg-rose-100'
              }`}
            >
              <List size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 pb-16">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div>
                            <h3 className="font-serif text-lg">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.location}</p>
                          </div>
                          <Button
                            onClick={() => setSelectedImage(item)}
                            className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
                          >
                            <Eye size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 md:h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage(item)}
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="text-2xl font-serif text-gray-800 mb-2">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            📍 {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            🌸 {item.season}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                      <Button
                        onClick={() => setSelectedImage(item)}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white self-start"
                      >
                        <Eye className="mr-2" size={16} />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              >
                ✕
              </Button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">{selectedImage.title}</h2>
              <div className="flex items-center gap-6 text-gray-600 mb-4">
                <span className="flex items-center gap-2">
                  📍 {selectedImage.location}
                </span>
                <span className="flex items-center gap-2">
                  🌸 {selectedImage.season}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-serif text-white mb-6">💕 Love What You See? 💕</h2>
            <p className="text-xl text-rose-100 mb-8">
              Let's create something beautiful together for your special day ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center"
              >
                💌 Book Your Session
              </a>
              <a
                href="/showcase"
                className="bg-amber-400 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center"
              >
                🎬 Watch Our Films
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

export default Portfolio;