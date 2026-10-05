// "use client";
// import React, { useState } from 'react';
// import { Compass, MapPin, ArrowRight } from 'lucide-react';

// const hotspots = [
//   {
//     id: 1,
//     type: "পাহাড় (Mountain)",
//     weather: "-4°C, Crisp Snow",
//     title: "Himalayan Ridge Peak",
//     coordinates: "27.9881° N, 86.9250° E",
//     description: "Majestic alpine heights with world-class mountaineering basecamps and veteran guides.",
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
//     pinPosition: "top-[28%] left-[32%]"
//   },
//   {
//     id: 2,
//     type: "বন (Forest)",
//     weather: "28°C, Humid Canopy",
//     title: "Amazon Deep Forest",
//     coordinates: "3.4653° S, 62.2159° W",
//     description: "Vast emerald jungle networks teeming with exotic wildlife and pristine natural trails.",
//     image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop",
//     pinPosition: "top-[48%] left-[55%]"
//   },
//   {
//     id: 3,
//     type: "দ্বীপ (Island)",
//     weather: "30°C, Sunny Breeze",
//     title: "Maldives Azure Atoll",
//     coordinates: "4.1755° N, 73.5093° E",
//     description: "Crystal clear turquoise waters and isolated white sand beaches for ultimate retreat.",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
//     pinPosition: "top-[42%] left-[72%]"
//   },
//   {
//     id: 4,
//     type: "Waterfall",
//     weather: "22°C, Mist & Rain",
//     title: "Thunder Falls Gorge",
//     coordinates: "14.9447° S, 68.3283° W",
//     description: "Roaring canyon waterfalls surrounded by steep cliffs and dense tropical greenery.",
//     image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1600&auto=format&fit=crop",
//     pinPosition: "top-[68%] left-[45%]"
//   }
// ];

// export default function GlobalNavigator() {
//   // Default 3rd number hotspot selected as requested
//   const [activeSpot, setActiveSpot] = useState(hotspots[2]);

//   return (
//     <section
//   id="hotspots"
//   className="py-24 bg-[#090D16] text-white relative overflow-hidden"
// >
//       <div className="max-w-5xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 text-[#10B981] font-semibold text-xs tracking-widest uppercase mb-3">
//             <Compass className="w-4 h-4" />
//             <span>GLOBAL NAVIGATOR</span>
//           </div>
//           <h2 className="text-4xl sm:text-6xl font-black font-serif tracking-tight mb-4">
//             Destination Explorer & Hotspots
//           </h2>
//           <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
//             Click any hotspot below to inspect coordinates, live weather, and active expedition packages on our simulation map.
//           </p>
//         </div>

//         {/* Hotspot List Cards */}
//         <div className="space-y-4 mb-12">
//           {hotspots.map((spot) => {
//             const isSelected = activeSpot.id === spot.id;
//             return (
//               <div 
//                 key={spot.id}
//                 onClick={() => setActiveSpot(spot)}
//                 className={`glass-card p-6 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
//                   isSelected ? 'border-[#10B981] bg-[#131C2E]/90 shadow-lg shadow-[#10B981]/10' : 'border-white/10 hover:border-white/30'
//                 }`}
//               >
//                 <div>
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981]">
//                       {spot.type}
//                     </span>
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold font-serif mb-1">{spot.title}</h3>
//                   <div className="flex items-center gap-1.5 text-gray-400 text-xs">
//                     <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
//                     <span>{spot.coordinates}</span>
//                   </div>
//                 </div>

//                 <div className="text-sm font-medium text-gray-300 sm:text-right">
//                   {spot.weather}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Interactive Map Preview Box with 1 and 3 Number Pins */}
//         <div className="relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl flex flex-col justify-end p-6 sm:p-10">
          
//           {/* Background Image changes dynamically on click */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter brightness-50 scale-105"
//             style={{ backgroundImage: `url('${activeSpot.image}')` }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent" />

//           {/* Simulated Map Pins */}
//           <div className="absolute inset-0 pointer-events-none">
//             {hotspots.map((s) => (
//               <div 
//                 key={s.id}
//                 onClick={() => setActiveSpot(s)}
//                 className={`absolute ${s.pinPosition} pointer-events-auto cursor-pointer w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform ${
//                   activeSpot.id === s.id 
//                     ? 'bg-[#10B981] text-black scale-125 ring-4 ring-white/30' 
//                     : 'bg-[#131C2E] text-white border border-white/20 hover:scale-110'
//                 }`}
//               >
//                 {s.id}
//               </div>
//             ))}
//           </div>

//           {/* Active Spot Info Card at Bottom of Map */}
//           <div className="relative z-10 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090D16]/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-1">
//                 <span>{activeSpot.type}</span>
//                 <span>•</span>
//                 <span>{activeSpot.weather}</span>
//               </div>
//               <h3 className="text-2xl font-serif font-bold text-white mb-2">{activeSpot.title}</h3>
//               <p className="text-gray-300 text-xs sm:text-sm max-w-xl">{activeSpot.description}</p>
//             </div>

//             <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#10B981] text-black font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#10B981]/20 hover:scale-105 transition-transform shrink-0">
//               <span>Explore Expeditions</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }