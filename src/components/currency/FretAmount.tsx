import React from 'react';
import { FretLogo } from './FretLogo';

interface FretAmountProps {
  amount: number;
  showEuroEquivalent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FretAmount({ 
  amount, 
  showEuroEquivalent = false, 
  size = 'md',
  className = ''
}: FretAmountProps) {
  const euroAmount = amount * 2; // 1 Fret = 2€

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <FretLogo size={size} />
      <div className="flex flex-col">
        <span className={`font-semibold ${
          size === 'sm' ? 'text-sm' : 
          size === 'md' ? 'text-base' : 
          'text-lg'
        }`}>
          {amount.toFixed(1)} Frets
        </span>
        {showEuroEquivalent && (
          <span className="text-gray-500 text-sm">
            ≈ {euroAmount.toFixed(2)}€
          </span>
        )}
      </div>
    </div>
  );
}