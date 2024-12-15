import React from 'react';
import { Shield, Check } from 'lucide-react';
import { Partnership } from '../../types/rewards';
import { REWARD_TIERS } from '../../data/rewardsData';

interface PartnershipCardProps {
  plan: Partnership;
  onSelect: (plan: Partnership) => void;
}

export function PartnershipCard({ plan, onSelect }: PartnershipCardProps) {
  const tierInfo = REWARD_TIERS[plan.tier];

  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div 
        className="absolute inset-x-0 top-0 h-2"
        style={{ backgroundColor: tierInfo.color }}
      />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
          <Shield className="h-8 w-8 text-indigo-600" />
        </div>

        <div className="mb-6">
          <p className="text-3xl font-bold text-gray-900">
            {plan.monthlyFee}€ <span className="text-sm text-gray-500">/mois</span>
          </p>
          <p className="text-sm text-gray-500">Engagement mensuel</p>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Bonus Frets</p>
            <p className="text-2xl font-bold text-indigo-600">×{plan.fretBonus}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Bonus parrainage</p>
            <p className="text-2xl font-bold text-indigo-600">+{plan.referralBonus} Frets</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {plan.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-gray-600">{benefit}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onSelect(plan)}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
        >
          Devenir partenaire
        </button>
      </div>
    </div>
  );
}