"use client";
import React, { useState } from "react";
import {ArrowRight, ChevronLeft,ChevronRight,MapPin,Sparkles} from "lucide-react";

const cardsData = [
  {
    id: 1,
    tag: "Escape",
    category: "Beach Escape",
    title: "Tropical Coast Paradise",
    description:"Escape to crystal-clear waters, golden shores and peaceful tropical landscapes.",
    location: "Tropical Coast, Maldives",
    image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    number: "01 / 05",
  },
  {
    id: 2,
    tag: "Mountain",
    category: "Hiking & Peak",
    title: "Alpine Summit Trek",
    description:"Conquer snow-capped majestic peaks and experience breathtaking valley views.",
    location: "Swiss Alps, Switzerland",
    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    number: "02 / 05",
  },
  {
    id: 3,
    tag: "Wild",
    category: "Deep Camping",
    title: "Mystical Pine Forest",
    description:"Immerse yourself deep inside emerald green canopies under starry skies.",
    location: "Black Forest, Germany",
    image:"https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    number: "03 / 05",
  },
  {
    id: 4,
    tag: "River",
    category: "Kayaking",
    title: "Wild Canyon Rapids",
    description:"Navigate through roaring white-water rivers carved through ancient canyons.",
    location: "Grand Canyon, USA",
    image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    number: "04 / 05",
  },
  {
    id: 5,
    tag: "Waterfall",
    category: "Trekking",
    title: "Hidden Jungle Falls",
    description:"Trek through dense rainforests to discover thunderous secret waterfalls.",
    location: "Bali Jungles, Indonesia",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1200&auto=format&fit=crop",
    number: "05 / 05",
  },
];

export default function AdventureCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextCard = () => {setCurrentIndex((prev) => (prev + 1) % cardsData.length);};
  const prevCard = () => { setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <section
      id="adventures"
      className="py-24 bg-[#090D16] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-xs tracking-widest uppercase">
            Overlapping Experience
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Featured Adventure Cards
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] sm:h-[520px] flex items-center justify-center">

         {cardsData.map((card, idx) => {
         const offset =(idx - currentIndex + cardsData.length) % cardsData.length;
         const zIndex = cardsData.length - offset;
        const scale = 1 - offset * 0.05;
         const translateX = offset * 40;
        let opacity = 1 - offset * 0.15;
        if (offset > 3) {
       opacity = 0;
        }

  // Visible card সব clickable
  const pointerEvents = offset <= 3 ? "auto" : "none";

  return (
    <div key={card.id} onClick={() => setCurrentIndex(idx)} style={{  zIndex, transform: `translateX(${translateX}px) scale(${scale})`,  opacity,  pointerEvents,
      }}
      className=" absolute top-0 left-0 w-full h-[450px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border  border-white/10transition-all duration-500 ease-out cursor-pointer">

      {/* Background Image */}
      <div className=" absolute inset-0  bg-cover bg-center "
        style={{ backgroundImage: `url('${card.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/50 to-black/20" />
      </div>

      {/* Top */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{card.tag}</span>
        </div>

        <span className="text-xs font-semibold text-gray-300 tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
          {card.number}
        </span>

      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">

        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
          {card.category}
        </span>

        <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 tracking-wide">
          {card.title}
        </h3>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-6 line-clamp-2">
          {card.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">

          <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{card.location}</span>
          </div>

          <button
            onClick={(e) => e.stopPropagation()}
            className=" inline-flex  items-center  gap-2 px-6 py-2.5  rounded-full bg-gradient-to-r from-cyan-500  to-indigo-600  text-white text-xs font-bold  uppercase  tracking-wider shadow-lg shadow-cyan-500/20 hover:scale-105  transition-transform cursor-pointer "
          >
            <span>Explore Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

    </div>
  );
})}

        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">

          {/* Previous */}
          <button onClick={prevCard} className="  w-12 h-12  rounded-full  glass-card flex items-center  justify-center text-white hover:bg-cyan-500/20  hover:border-cyan-500/50  transition-all shadow-lg  cursor-pointer ">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {cardsData.map((_, idx) => (
              <button
                key={idx} onClick={() => setCurrentIndex(idx)}  className={`  h-2  transition-all rounded-full cursor-pointer
                  ${
                    currentIndex === idx
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }
                `}
              />
            ))}
          </div>

          {/* Next */}
          <button onClick={nextCard}className="  w-12  h-12 rounded-full  glass-card flex  items-center justify-center text-whitehover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-lg cursor-pointer " >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}