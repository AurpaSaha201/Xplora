import React from 'react';
import { Compass, ArrowRight, Sparkles, MapPin, Users } from 'lucide-react';

export default function JournalSection() {
  return (
    <section className="py-28 bg-[#070A12] relative overflow-hidden">
      {/* Background Glow & Atmospheric Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#13cbce]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#48c6e5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13cbce]/10 border border-[#13cbce]/20 text-[#13cbce] font-semibold text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>FROM THE JOURNAL</span>
            </div>
            
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-serif leading-[1.15] mb-5">
               Unchart the Unknown. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13cbce] via-[#48c6e5] to-[#38bdf8]">
              Live the Unscripted.
           </span>
         </h2>
  
            
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
          Adventure isn't defined by peak elevations—it's carved in midnight campfires, rugged steps, and the wild stories waiting past where the trail ends.
         </p>
          </div> 



          {/* Action Button on Top Right (Desktop) */}
          <div className="hidden md:block shrink-0">
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#13cbce] to-[#48c6e5] text-gray-950 font-extrabold text-sm tracking-wider uppercase shadow-lg shadow-[#13cbce]/20 hover:shadow-[#13cbce]/40 hover:scale-105 active:scale-95 transition-all duration-300">
              <span>Read All Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Stats Grid with Modern Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="group relative p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111928]/80 to-[#0B101B]/90 backdrop-blur-xl shadow-2xl hover:border-[#13cbce]/40 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#13cbce]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#13cbce] to-[#48c6e5] font-mono tracking-tight">
                100+
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#13cbce]/10 border border-[#13cbce]/20 flex items-center justify-center text-[#13cbce] group-hover:rotate-12 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Untouched Trails Mapped</h3>
            <p className="text-gray-400 text-sm">Discovered and documented deep within uncharted territories.</p>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111928]/80 to-[#0B101B]/90 backdrop-blur-xl shadow-2xl hover:border-[#48c6e5]/40 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#48c6e5]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#48c6e5] to-[#10a0b9] font-mono tracking-tight">
                12,450+
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#48c6e5]/10 border border-[#48c6e5]/20 flex items-center justify-center text-[#48c6e5] group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Happy Adventurers</h3>
            <p className="text-gray-400 text-sm">Explorers who trusted us to guide their greatest journeys.</p>
          </div>

        </div>

        {/* Action Button (Mobile View) */}
        <div className="block md:hidden text-center">
          <button className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#13cbce] to-[#48c6e5] text-gray-950 font-extrabold text-sm tracking-wider uppercase shadow-lg shadow-[#13cbce]/20 active:scale-95 transition-all">
            <span>Read All Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}