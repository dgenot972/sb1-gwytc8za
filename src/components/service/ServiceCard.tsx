import React from 'react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="service-card group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
        <div className="relative animate-float">
          <Icon className="h-12 w-12 mx-auto mb-4 text-white transform group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-sm text-indigo-100 group-hover:text-white/90 transition-colors duration-300">{description}</p>
    </div>
  );
}