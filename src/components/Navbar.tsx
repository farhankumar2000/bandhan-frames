import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: '🏠 Home' },
    { to: '/about', label: '💕 About' },
    { to: '/showcase', label: '✨ Showcase' },
    { to: '/portfolio', label: '📸 Portfolio' },
    { to: '/reviews', label: '⭐ Reviews' },
    { to: '/contact', label: '💌 Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-rose-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Camera className="text-rose-500 group-hover:text-rose-600 transition-colors" size={32} />
              <Heart className="absolute -top-1 -right-1 text-pink-400 animate-pulse" size={16} />
            </div>
            <div>
              <h1 className="text-2xl font-serif text-rose-800 group-hover:text-rose-900 transition-colors">
                Bella Rose
              </h1>
              <p className="text-xs text-amber-600 -mt-1">Wedding Photography 💕</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                  isActive(link.to)
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-rose-100 hover:text-rose-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-rose-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-center font-medium transition-all ${
                    isActive(link.to)
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-rose-100 hover:text-rose-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;