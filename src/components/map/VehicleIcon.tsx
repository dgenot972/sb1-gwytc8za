import React from 'react';
import { PersonStanding, Bike, Car, Package, Truck } from 'lucide-react';
import type { VehicleType } from '../../types/vehicle';

const VEHICLE_ICONS = {
  pedestrian: PersonStanding,
  bike: Bike,
  scooter: Bike, // Using Bike icon with different styling for scooter
  car: Car,
  van: Package,
  truck: Truck,
} as const;

interface VehicleIconProps {
  type: VehicleType;
  className?: string;
}

export function VehicleIcon({ type, className = "h-6 w-6 text-white" }: VehicleIconProps) {
  const Icon = VEHICLE_ICONS[type];
  return <Icon className={className} />;
}