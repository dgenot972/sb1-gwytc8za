import React from 'react';
import { Car, Bike, Truck, Package } from 'lucide-react';
import type { VehicleType } from '../../types/vehicle';

interface AnimatedVehicleProps {
  type: VehicleType;
  style: React.CSSProperties;
}

const VEHICLE_ICONS = {
  bike: Bike,
  car: Car,
  van: Package,
  truck: Truck,
  scooter: Bike, // Using Bike for scooter with different styling
} as const;

export function AnimatedVehicle({ type, style }: AnimatedVehicleProps) {
  const Icon = VEHICLE_ICONS[type];
  
  return (
    <div 
      className="absolute transform transition-transform"
      style={style}
    >
      <div className="relative p-3 bg-white/10 backdrop-blur-sm rounded-full">
        <Icon className="w-6 h-6 text-white/60" />
      </div>
    </div>
  );
}