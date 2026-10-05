// import React from 'react';
// import { Mountain, Trees, Palmtree, Waves, ArrowRight } from 'lucide-react';

// const destinations = [
//   {
//     title: "পাহাড় (Mountains)",
//     subtitle: "Majestic Peaks & Valleys",
//     description: "Scale high-altitude summits and witness breathtaking cloudscapes above the world.",
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
//     icon: Mountain,
//     badge: "High Altitude"
//   },
//   {
//     title: "বন (Forests)",
//     subtitle: "Deep Jungle Canopies",
//     description: "Venture deep into ancient green sanctuaries filled with rare wildlife and serenity.",
//     image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
//     icon: Trees,
//     badge: "Wild Sanctuary"
//   },
//   {
//     title: "দ্বীপ (Islands)",
//     subtitle: "Untouched Tropical Coves",
//     description: "Relax on pristine white-sand shores surrounded by turquoise ocean waters.",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
//     icon: Palmtree,
//     badge: "Island Life"
//   },
//   {
//     title: "ঝরনা (Waterfall)",
//     subtitle: "Roaring Cascades",
//     description: "Discover crystal-clear cascading waters hidden deep inside lush tropical paradises.",
//     image: "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     icon: Waves,
//     badge: "Hidden Gems"
//   }
// ];

// export default function FeaturedDestinations() {
//   return (
//     <section id="destinations" className="py-24 bg-[#0B101D] relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
//           <div>
//             <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">Curated Locations</span>
//             <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">Featured Destinations</h2>
//           </div>
//           <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm">
//             Handpicked terrains designed for ultimate adrenaline seekers and nature lovers alike.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {destinations.map((item, index) => {
//             const IconComponent = item.icon;
//             return (
//               <div 
//                 key={index}
//                 className="group relative h-[420px] rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
//               >
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url('${item.image}')` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent" />
//                 </div>

//                 <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
//                   <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-semibold">
//                     {item.badge}
//                   </span>
//                   <div className="w-10 h-10 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
//                     <IconComponent className="w-5 h-5" />
//                   </div>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
//                   <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">{item.subtitle}</span>
//                   <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
//                   <p className="text-gray-300 text-xs sm:text-sm mb-6 line-clamp-2">{item.description}</p>
                  
//                   <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer">
//                     <span>Explore Area</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mountain,
  Trees,
  Palmtree,
  Waves,
  ArrowRight,
} from "lucide-react";

const destinations = [
  {
    title: "পাহাড় (Mountains)",
    subtitle: "Majestic Peaks & Valleys",
    description:
      "Scale high-altitude summits and witness breathtaking cloudscapes above the world.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    icon: Mountain,
    badge: "High Altitude",
  },
  {
    title: "বন (Forests)",
    subtitle: "Deep Jungle Canopies",
    description:
      "Venture deep into ancient green sanctuaries filled with rare wildlife and serenity.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    icon: Trees,
    badge: "Wild Sanctuary",
  },
  {
    title: "দ্বীপ (Islands)",
    subtitle: "Untouched Tropical Coves",
    description:
      "Relax on pristine white-sand shores surrounded by turquoise ocean waters.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    icon: Palmtree,
    badge: "Island Life",
  },
  {
    title: "ঝরনা (Waterfall)",
    subtitle: "Roaring Cascades",
    description:
      "Discover crystal-clear cascading waters hidden deep inside lush tropical paradises.",
    image:
      "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    icon: Waves,
    badge: "Hidden Gems",
  },
];

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-24 bg-[#0B101D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">
              Curated Locations
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
              Featured Destinations
            </h2>
          </div>

          <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm">
            Handpicked terrains designed for ultimate adrenaline seekers and
            nature lovers alike.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateX: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  scale: 1.02,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1200,
                }}
                className="group relative h-[420px] rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
              >

                {/* IMAGE */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                  whileHover={{
                    scale: 1.15,
                    x: 8,
                    y: -5,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent" />
                </motion.div>

                {/* LIGHT SWEEP */}
                <motion.div
                  className="absolute inset-y-0 -left-[120%] w-[70%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
                  whileHover={{
                    left: "160%",
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />

                {/* TOP CONTENT */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">

                  {/* BADGE */}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.15,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-semibold"
                  >
                    {item.badge}
                  </motion.span>

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 12,
                      rotateY: 180,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 12,
                    }}
                    className="w-10 h-10 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">

                  {/* SUBTITLE */}
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.15,
                      duration: 0.5,
                    }}
                    className="block text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1"
                  >
                    {item.subtitle}
                  </motion.span>

                  {/* TITLE */}
                  <motion.h3
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.15,
                      duration: 0.6,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    className="text-2xl font-black text-white mb-2"
                  >
                    {item.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.15,
                      duration: 0.6,
                    }}
                    className="text-gray-300 text-xs sm:text-sm mb-6 line-clamp-2"
                  >
                    {item.description}
                  </motion.p>

                  {/* EXPLORE */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.15,
                      duration: 0.5,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Explore Area</span>

                    <motion.div
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>

                </div>

                {/* GLOW */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    boxShadow: "inset 0 0 60px rgba(34,211,238,0.15)",
                  }}
                />

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

