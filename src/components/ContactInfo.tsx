
import React from 'react';
import { Mail, Phone, MapPin, Clock, Heart, Instagram, Facebook, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <Phone className="text-rose-500" size={24} />,
      emoji: '📱',
      title: 'Call Me',
      info: '+1 (555) 123-LOVE',
      subtitle: 'Available 9am - 7pm',
      action: 'tel:+15551235683'
    },
    {
      icon: <Mail className="text-blue-500" size={24} />,
      emoji: '💌',
      title: 'Email Me',
      info: 'hello@bellarosephoto.com',
      subtitle: 'Quick responses guaranteed!',
      action: 'mailto:hello@bellarosephoto.com'
    },
    {
      icon: <MapPin className="text-green-500" size={24} />,
      emoji: '📍',
      title: 'Visit My Studio',
      info: '123 Love Lane, Romance City, RC 12345',
      subtitle: 'By appointment only',
      action: '#'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <Card className="bg-gradient-to-br from-white to-pink-50 shadow-2xl border-2 border-pink-200 rounded-3xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="text-rose-500 animate-pulse" size={28} />
              <span className="text-3xl">💕</span>
              <Heart className="text-rose-500 animate-pulse" size={28} />
            </div>
            <h3 className="text-3xl font-serif text-rose-800 mb-2">Let's Connect!</h3>
            <p className="text-gray-600">Choose your favorite way to reach me ✨</p>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="block p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border-2 border-rose-200 hover:border-rose-300 transition-all hover:shadow-lg transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      {method.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{method.emoji}</span>
                      <h4 className="font-semibold text-gray-800">{method.title}</h4>
                    </div>
                    <p className="text-gray-700 font-medium">{method.info}</p>
                    <p className="text-sm text-gray-500">{method.subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl border-2 border-amber-200 rounded-3xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <Clock className="text-amber-600 mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-serif text-amber-800 mb-2">⏰ Studio Hours</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-amber-200">
              <span className="text-amber-700">Monday - Friday</span>
              <span className="font-medium text-amber-800">9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-amber-200">
              <span className="text-amber-700">Saturday</span>
              <span className="font-medium text-amber-800">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-amber-700">Sunday</span>
              <span className="font-medium text-amber-800">By Appointment 💕</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-amber-100 rounded-xl">
            <p className="text-center text-amber-700 text-sm">
              🌟 Weekend shoots available for weddings and special events! 🌟
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl border-2 border-purple-200 rounded-3xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <Camera className="text-purple-600 mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-serif text-purple-800 mb-2">📸 Follow My Journey</h3>
            <p className="text-purple-600">See the latest love stories I've captured!</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="flex flex-col items-center p-4 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Instagram size={28} />
              <span className="text-sm mt-2 font-medium">@bellarosephoto</span>
              <span className="text-xs opacity-90">15K followers 💕</span>
            </a>
            
            <a
              href="#"
              className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <Facebook size={28} />
              <span className="text-sm mt-2 font-medium">Bella Rose Photo</span>
              <span className="text-xs opacity-90">500+ reviews ⭐</span>
            </a>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-purple-600 text-sm">
              💫 Tag me in your photos for a chance to be featured! 💫
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
