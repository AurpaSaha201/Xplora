"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100 ease-out will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')`,
          transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.25}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-6 animate-pulse">
          <span>⛰️ Conquer The Unknown</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 drop-shadow-2xl">
          YOUR NEXT <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">ADVENTURE</span> STARTS HERE
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Embark on extraordinary journeys across majestic peaks, deep mystical forests, virgin tropical islands, and roaring waterfalls.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#destinations" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all">
            <span>Explore Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#hotspots" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-white font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-all border border-white/20">
            Interactive Map
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </div>
    </section>
  );
}