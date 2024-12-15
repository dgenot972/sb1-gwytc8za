import React from 'react';

interface FretLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function FretLogo({ className = '', size = 'md' }: FretLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-pulse-subtle" />
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-full h-full flex items-center justify-center">
        <span className="text-white font-bold" style={{ 
          fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : '24px',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }}>
          F
        </span>
      </div>
    </div>
  );
}