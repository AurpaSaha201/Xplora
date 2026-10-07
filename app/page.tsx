import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdventureCards from "@/components/AdventureCards";
 import FeaturedDestinations from "@/components/FeaturedDestinations";
 import AdventureStories from "@/components/AdventureStories";


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
      <AdventureStories />
   
     {/*<JournalSection/>
      <GlobalNavigator/>
      <TripPackages />*/}
      <Footer />

      
    </main>
  );
}

