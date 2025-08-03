import React from 'react';
import { Heart, Camera, Star, Award, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const About = () => {
  const achievements = [
    {
      icon: <Award className="text-amber-500" size={24} />,
      emoji: '🏆',
      title: 'Wedding Photography Awards 2023',
      description: 'Best Romantic Photography'
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      emoji: '⭐',
      title: '5.0 Star Rating',
      description: '200+ Verified Reviews'
    },
    {
      icon: <Users className="text-rose-500" size={24} />,
      emoji: '💑',
      title: '300+ Couples',
      description: 'Beautiful love stories captured'
    },
    {
      icon: <Camera className="text-purple-500" size={24} />,
      emoji: '📸',
      title: '6 Years Experience',
      description: 'Professional wedding photography'
    }
  ];

  const values = [
    {
      emoji: '💕',
      title: 'Love-Centered Approach',
      description: 'Every photo session is crafted around your unique love story, ensuring authentic and heartfelt moments'
    },
    {
      emoji: '✨',
      title: 'Artistic Excellence',
      description: 'Combining technical mastery with creative vision to deliver breathtaking, magazine-worthy images'
    },
    {
      emoji: '🌸',
      title: 'Stress-Free Experience',
      description: 'From planning to delivery, I handle every detail so you can focus on enjoying your special day'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 animate-float">
            <Heart className="text-rose-300 opacity-20" size={60} />
          </div>
          <div className="absolute top-40 right-32 animate-bounce">
            <Camera className="text-amber-400 opacity-30" size={40} />
          </div>
          <div className="absolute bottom-32 left-16 animate-pulse">
            <Star className="text-pink-400 opacity-25" size={50} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="text-4xl">💕</div>
                <Heart className="text-rose-500 animate-pulse" size={32} />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
            </div>
            <h1 className="text-6xl lg:text-7xl font-serif text-rose-800 mb-6">About Bella</h1>
            <p className="text-2xl text-amber-700 max-w-3xl mx-auto">
              ✨ A passionate artist dedicated to capturing the magic of love ✨
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <Card className="bg-gradient-to-br from-white to-rose-50 shadow-2xl border-2 border-rose-200 rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <h2 className="text-4xl font-serif text-rose-800 mb-6">💖 My Story</h2>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      🌸 Hi beautiful souls! I'm Isabella, but everyone calls me Bella. Six years ago, 
                      I picked up my first camera at my sister's wedding and fell completely in love 
                      with capturing those fleeting moments of pure joy and connection.
                    </p>
                    <p>
                      💕 What started as a hobby quickly became my life's passion. There's something 
                      magical about being present for one of the most important days in a couple's life - 
                      witnessing their love, laughter, and tears of joy through my lens.
                    </p>
                    <p>
                      ✨ Today, I've had the incredible honor of documenting over 300 love stories, 
                      each one unique and beautiful in its own way. From intimate elopements to grand 
                      celebrations, I bring the same level of artistry and heart to every single wedding.
                    </p>
                    <p>
                      🌟 When I'm not behind the camera, you'll find me planning my own wedding 
                      (yes, I'm a bride-to-be too!), traveling to new destinations, or cuddling 
                      with my golden retriever, Honey 🐕
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=1000"
                  alt="Bella Rose - Wedding Photographer"
                  className="relative w-full rounded-3xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl border-2 border-rose-200">
                  <Camera className="text-rose-500" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-purple-800 mb-4">🏆 Achievements & Recognition 🏆</h2>
            <p className="text-xl text-gray-600">Honored to be recognized for my passion and dedication</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-pink-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl mb-2">{achievement.emoji}</div>
                  </div>
                  <h3 className="text-lg font-serif text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-rose-800 mb-6">💫 My Core Values 💫</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every interaction and every photo I capture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-amber-50 shadow-xl border-2 border-amber-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-6">{value.emoji}</div>
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-serif text-white mb-6">💕 Let's Create Something Beautiful 💕</h2>
            <p className="text-xl text-rose-100 mb-8">
              I'd love to hear about your love story and vision for your special day ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center"
              >
                💌 Get In Touch
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

export default About;