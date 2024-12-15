import React from 'react';
import { FretAmount } from './FretAmount';

interface FretRewardProps {
  rewardPerKm: number;
  className?: string;
}

export function FretReward({ rewardPerKm, className = '' }: FretRewardProps) {
  return (
    <div className={`bg-indigo-50 p-3 rounded-lg ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-indigo-700">Gain par km :</span>
        <FretAmount amount={rewardPerKm} size="sm" />
      </div>
    </div>
  );
}