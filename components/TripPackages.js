// import React from 'react';
// import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';

// const packages = [
//   {
//     title: "Alpine Explorer",
//     destination: "Swiss Alps, Switzerland",
//     duration: "7 Days / 6 Nights",
//     price: "$1,450",
//     popular: false,
//     features: ["Professional Mountain Guide", "All Gear & Safety Equipment", "Luxury Alpine Lodge Stay", "Helicopter Emergency Cover"]
//   },
//   {
//     title: "Tropical Paradise",
//     destination: "Maldives Coast",
//     duration: "5 Days / 4 Nights",
//     price: "$1,890",
//     popular: true,
//     features: ["Private Island Access", "Scuba & Kayaking Pass", "Overwater Bungalow Stay", "Gourmet Seafood Dining"]
//   },
//   {
//     title: "Jungle & Waterfall Trek",
//     destination: "Bali Jungles, Indonesia",
//     duration: "6 Days / 5 Nights",
//     price: "$1,150",
//     popular: false,
//     features: ["Expert Jungle Survivalist", "River Rafting & Canyoning", "Eco-Camp Treehouse Stay", "Traditional Spa Sessions"]
//   }
// ];

// export default function TripPackages() {
//   return (
//     <section id="packages" className="py-24 bg-[#090D16] relative">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">Pricing & Plans</span>
//           <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">Exclusive Trip Packages</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {packages.map((pkg, idx) => (
//             <div 
//               key={idx}
//               className={`relative rounded-3xl glass-card p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-2 shadow-2xl ${
//                 pkg.popular ? 'border-cyan-500 shadow-cyan-500/20 bg-gradient-to-b from-[#131C2E] to-[#0d1626]' : 'border-white/10 hover:border-cyan-500/40'
//               }`}
//             >
//               {pkg.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
//                   Most Popular
//                 </div>
//               )}

//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{pkg.destination}</span>
//                   <Shield className="w-5 h-5 text-cyan-400" />
//                 </div>

//                 <h3 className="text-2xl font-black text-white mb-2">{pkg.title}</h3>
//                 <p className="text-sm text-gray-400 font-medium mb-6">{pkg.duration}</p>

//                 <div className="mb-8 pb-6 border-b border-white/10">
//                   <span className="text-4xl sm:text-5xl font-black text-white">{pkg.price}</span>
//                   <span className="text-xs text-gray-400 ml-2">/ person</span>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
//                       <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
//                 pkg.popular 
//                   ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105' 
//                   : 'glass-card text-white hover:bg-cyan-500/20 hover:border-cyan-500/50'
//               }`}>
//                 <span>Book This Package</span>
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }