import React, { useState } from 'react';
import { Heart, Camera, Play, Film, Image, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

const Showcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const galleries = [
    {
      id: 'romantic',
      title: '💕 Romantic Portraits',
      images: [
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1469474968028-56623f02e429?auto=format&fit=crop&w=800&h=1000'
      ]
    },
    {
      id: 'ceremony',
      title: '💒 Ceremony Moments',
      images: [
        'https://images.unsplash.com/photo-1470813740244-df37b8c1e0cb?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=1000',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=800',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=800',
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=800',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=800'
      ]
    }
  ];

  const reels = [
    {
      id: 1,
      title: '💕 Sarah & Michael - Garden Wedding',
      thumbnail: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=400',
      duration: '2:30',
      description: 'A magical garden celebration filled with love and laughter'
    },
    {
      id: 2,
      title: '🌊 Emma & James - Beach Romance',
      thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&h=400',
      duration: '1:45',
      description: 'Sunset vows by the ocean with breathtaking golden hour shots'
    },
    {
      id: 3,
      title: '🍃 Lisa & David - Vineyard Elegance',
      thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400',
      duration: '3:15',
      description: 'Rustic elegance among the rolling hills and grapevines'
    }
  ];

  const films = [
    {
      id: 1,
      title: '🎬 The Complete Love Story - Sarah & Michael',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=450',
      duration: '15:30',
      description: 'From getting ready to the last dance - a cinematic journey'
    },
    {
      id: 2,
      title: '🎥 Destination Wedding - Emma & James',
      thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e429?auto=format&fit=crop&w=800&h=450',
      duration: '12:45',
      description: 'An intimate beachside ceremony captured in full cinematic glory'
    }
  ];

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
            <Film className="text-pink-400 opacity-25" size={50} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="text-4xl">✨</div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif text-rose-800 mb-6">Showcase</h1>
            <p className="text-2xl text-amber-700 max-w-3xl mx-auto">
              📸 A collection of love stories beautifully captured 🎬
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="gallery" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/80 backdrop-blur-sm border-2 border-rose-200 rounded-2xl p-2 shadow-lg">
              <TabsTrigger 
                value="gallery" 
                className="rounded-xl px-6 py-3 text-lg font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <Image className="mr-2" size={20} />
                🌸 Gallery
              </TabsTrigger>
              <TabsTrigger 
                value="reels" 
                className="rounded-xl px-6 py-3 text-lg font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <Play className="mr-2" size={20} />
                💕 Reels
              </TabsTrigger>
              <TabsTrigger 
                value="films" 
                className="rounded-xl px-6 py-3 text-lg font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <Film className="mr-2" size={20} />
                🎬 Films
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-16">
            {galleries.map((gallery) => (
              <div key={gallery.id}>
                <h2 className="text-4xl font-serif text-center text-purple-800 mb-12">{gallery.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {gallery.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <div className="flex items-center text-white">
                            <Heart className="mr-2" size={16} />
                            <span className="text-sm font-medium">Beautiful Moment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Reels Tab */}
          <TabsContent value="reels">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reels.map((reel) => (
                <Card key={reel.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(`reel-${reel.id}`)}>
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-4">
                          <Play className="text-rose-500" size={32} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {reel.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-gray-800 mb-2">{reel.title}</h3>
                      <p className="text-gray-600">{reel.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Films Tab */}
          <TabsContent value="films">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {films.map((film) => (
                <Card key={film.id} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-amber-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-0">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(`film-${film.id}`)}>
                      <img
                        src={film.thumbnail}
                        alt={film.title}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-6">
                          <Film className="text-amber-500" size={40} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {film.duration}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-serif text-gray-800 mb-3">{film.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{film.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
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

export default Showcase;