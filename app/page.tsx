import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdventureCards from "@/components/AdventureCards";
 import FeaturedDestinations from "@/components/FeaturedDestinations";
// import AdventureStories from "@/components/AdventureStories";


// import JournalSection from "@/components/JournalSection";
// import GlobalNavigator from "@/components/GlobalNavigator";
// import TripPackages from "@/components/TripPackages";
 import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090D16] text-white">
      <Navbar />
      <Hero />
      <AdventureCards />
       <FeaturedDestinations />
     {/* <AdventureStories />
   
     <JournalSection/>
      <GlobalNavigator/>
      <TripPackages />*/}
      <Footer />

      
    </main>
  );
}



































// 'use client';
// import { useState } from 'react';
// export default function GridGame() {
//   const [clicked, setClicked] = useState<number[]>([]);
//   const [clearing, setClearing] = useState(false);

//   const handleClick = (index: number) => {
//   if (clicked.includes(index)) {
//    return;
//   }
//     const newClicked = [...clicked, index];
//     setClicked(newClicked);


//     if (newClicked.length === 16) {
//       setClearing(true);
// if (clearing) {
//   return;
//  }

//       let count = 0;

//       const timer = setInterval(() => {
//         setClicked(prev => prev.slice(1));

//         count++;

//         if (count === 16) {
//           clearInterval(timer);
//           setClearing(false);
//         }
//       }, 300);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-2">
//         4x4 Grid Game
//       </h1>

//       <p className="mb-5">
//         {clearing ? 'Clearing...' : `Clicked: ${clicked.length} / 16`}
//       </p>

//       <div className="grid grid-cols-4 gap-3 w-80 h-80">
//         {Array.from({ length: 16 }).map((_, index) => {

//           const isClicked = clicked.includes(index);

//           return (
//             <button
//               key={index}
//               onClick={() => handleClick(index)}
//               className={`rounded-xl border-2 ${
//                 isClicked ? 'bg-green-500' : 'bg-white'
//               }`}
//             />
//           );
//         })}
//       </div>

//     </div>
//   );
// }