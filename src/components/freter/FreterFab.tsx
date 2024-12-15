import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

export function FreterFab() {
  return (
    <button 
      className="fixed bottom-8 right-8 group flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50"
      onClick={() => document.getElementById('freter-requirements')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <Shield className="h-5 w-5" />
      <span className="font-semibold">Devenir Freter</span>
      <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
    </button>
  );
}