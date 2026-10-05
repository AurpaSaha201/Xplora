"use client";
import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            XPLORA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide text-gray-300">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#adventures" className="hover:text-cyan-400 transition-colors">Adventures</a>
          <a href="#destinations" className="hover:text-cyan-400 transition-colors">Destinations</a>
          <a href="#stories" className="hover:text-cyan-400 transition-colors">Stories</a>
          <a href="#hotspots" className="hover:text-cyan-400 transition-colors">Explore Map</a>
          <a href="#packages" className="hover:text-cyan-400 transition-colors">Packages</a>
        </div>

        <div className="hidden md:block">
          <a href="#packages" className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
            Book Trip
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white focus:outline-none">
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-nav border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Home</a>
          <a href="#adventures" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Adventures</a>
          <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Destinations</a>
          <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Stories</a>
          <a href="#hotspots" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Explore Map</a>
          <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-cyan-400 font-bold">Packages</a>
        </div>
      )}
    </nav>
  );
}