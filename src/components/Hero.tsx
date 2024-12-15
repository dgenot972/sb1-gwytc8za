import React from 'react';
import { ServiceGrid } from './service/ServiceGrid';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-600 to-purple-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 animate-fade-in">
            Fini les voyages à vide,<br />
            réservez votre place !
          </h1>
          <p className="text-2xl font-semibold text-indigo-100 mb-4 animate-slide-up">
            Une nouvelle façon de voyager ensemble
          </p>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Rejoignez la communauté des Freters et participez à la transformation 
            du transport sur notre île. Une solution complète qui connecte les 
            transporteurs certifiés aux besoins locaux.
          </p>
          <ServiceGrid />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 pattern-dots"></div>
    </div>
  );
}