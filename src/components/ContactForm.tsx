
import React, { useState } from 'react';
import { Heart, Send, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="bg-gradient-to-br from-white to-rose-50 shadow-2xl border-2 border-rose-200 rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center py-8">
        <div className="flex justify-center mb-4">
          <div className="flex items-center space-x-2">
            <Heart className="animate-pulse" size={32} />
            <span className="text-3xl">💌</span>
            <Heart className="animate-pulse" size={32} />
          </div>
        </div>
        <CardTitle className="text-3xl font-serif">Let's Plan Your Perfect Day!</CardTitle>
        <p className="text-rose-100 text-lg mt-2">✨ Tell me about your love story ✨</p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-rose-700 font-medium flex items-center gap-2">
                💕 Your Names
              </label>
              <Input
                name="name"
                placeholder="John & Jane Smith"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-rose-200 focus:border-rose-400 rounded-xl py-3"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-rose-700 font-medium flex items-center gap-2">
                📧 Email Address
              </label>
              <Input
                name="email"
                type="email"
                placeholder="hello@yourname.com"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-rose-200 focus:border-rose-400 rounded-xl py-3"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-rose-700 font-medium flex items-center gap-2">
                📱 Phone Number
              </label>
              <Input
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-rose-200 focus:border-rose-400 rounded-xl py-3"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-rose-700 font-medium flex items-center gap-2">
                <Calendar size={18} />
                Wedding Date
              </label>
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="border-2 border-rose-200 focus:border-rose-400 rounded-xl py-3"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-rose-700 font-medium flex items-center gap-2">
                <MapPin size={18} />
                Wedding Location
              </label>
              <Input
                name="location"
                placeholder="City, State"
                value={formData.location}
                onChange={handleChange}
                className="border-2 border-rose-200 focus:border-rose-400 rounded-xl py-3"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-rose-700 font-medium flex items-center gap-2">
                <Users size={18} />
                Number of Guests
              </label>
              <Input
                name="guests"
                placeholder="150"
                value={formData.guests}
                onChange={handleChange}
                className="border-2 border-rose-200 focus:border-rose-400 rounded-xl py-3"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-rose-700 font-medium flex items-center gap-2">
              💭 Tell Me About Your Vision
            </label>
            <Textarea
              name="message"
              placeholder="Share your dreams, style preferences, must-have shots, and anything special about your love story! 🌟"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="border-2 border-rose-200 focus:border-rose-400 rounded-xl resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all shadow-lg"
            >
              <Send className="mr-2" size={20} />
              Send My Love Letter 💕
            </Button>
          </div>
        </form>

        <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border-2 border-amber-200">
          <div className="text-center">
            <p className="text-amber-700 font-medium mb-2">🎉 Special Offer 🎉</p>
            <p className="text-sm text-amber-600">
              Book within 30 days and receive a complimentary engagement session! 📸✨
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
