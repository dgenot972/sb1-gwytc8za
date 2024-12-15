import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { PricingTier } from '../../types/shipping';
import { FretAmount } from '../currency/FretAmount';

interface PricingDisplayProps {
  price: number;
  tier?: PricingTier;
  isOverLimit: boolean;
}

export function PricingDisplay({ price, tier, isOverLimit }: PricingDisplayProps) {
  if (isOverLimit) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
          <p className="text-red-700">
            Les dimensions ou le poids dépassent nos limites de transport.
            Veuillez nous contacter pour une solution personnalisée.
          </p>
        </div>
      </div>
    );
  }

  if (!tier) return null;

  const fretAmount = price / 2; // 1 Fret = 2€

  return (
    <div className="bg-indigo-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Estimation du prix
        </h3>
        <div className="text-2xl font-bold text-indigo-600">
          {price.toFixed(2)}€
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Récompense Frets</span>
          <FretAmount amount={fretAmount} size="sm" />
        </div>

        <div className="border-t border-indigo-100 pt-3">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Le prix inclut la prise en charge, l'assurance de base
              {tier.fragileMultiplier > 1 && ' et la protection spéciale si fragile'}.
              Distance calculée par itinéraire optimal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}