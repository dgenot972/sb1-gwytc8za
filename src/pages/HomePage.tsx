import React from 'react';
import { Hero } from '../components/Hero';
import { MapView } from '../components/map/MapView';
import { BlogSection } from '../components/blog/BlogSection';
import { FreterFab } from '../components/freter/FreterFab';
import { AnimatedVehiclesBackground } from '../components/background/AnimatedVehiclesBackground';

export function HomePage() {
  return (
    <>
      <AnimatedVehiclesBackground />
      <Hero />
      <main className="space-y-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-20">
          <MapView />
        </div>
        <BlogSection />
      </main>
      <FreterFab />
    </>
  );
}