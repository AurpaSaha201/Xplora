import React from 'react';
// import { Calendar, User, ArrowRight } from 'lucide-react';

// const stories = [
//   {
//     title: "Surviving the Blizzard at Annapurna Base Camp",
//     excerpt: "How our expedition team overcame unexpected freezing whiteout conditions to reach 4,130 meters.",
//     author: "Alex Morgan",
//     date: "October 12, 2026",
//     category: "Mountain Expedition",
//     image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Lost in the Emerald Depths of the Amazon",
//     excerpt: "Living alongside indigenous tribes and navigating uncharted river tributaries by wooden canoe.",
//     author: "Elena Rostova",
//     date: "September 28, 2026",
//     category: "Jungle Trek",
//     image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
//   }
// ];

// export default function AdventureStories() {
//   return (
//     <section id="stories" className="py-24 bg-[#090D16] relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">Editorial Stories</span>
//           <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">Adventure Chronicles</h2>
//         </div>

//         <div className="space-y-12">
//           {stories.map((story, index) => (
//             <div 
//               key={index}
//               className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 glass-card rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-cyan-500/40 transition-all shadow-2xl`}
//             >
//               <div className="w-full lg:w-1/2 h-[300px] sm:h-[380px] rounded-2xl overflow-hidden relative group">
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//                   style={{ backgroundImage: `url('${story.image}')` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-semibold">
//                   {story.category}
//                 </span>
//               </div>

//               <div className="w-full lg:w-1/2 flex flex-col justify-center">
//                 <div className="flex items-center gap-6 text-gray-400 text-xs font-medium mb-4">
//                   <div className="flex items-center gap-1.5">
//                     <User className="w-4 h-4 text-cyan-400" />
//                     <span>{story.author}</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <Calendar className="w-4 h-4 text-cyan-400" />
//                     <span>{story.date}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
//                   {story.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
//                   {story.excerpt}
//                 </p>

//                 <button className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-wider uppercase group hover:text-cyan-300 transition-colors">
//                   <span>Read Full Story</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }