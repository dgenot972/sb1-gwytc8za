import React from 'react';
import { AnimatedVehicle } from './AnimatedVehicle';
import { useVehicleAnimation } from './hooks/useVehicleAnimation';

export function AnimatedVehiclesBackground() {
  const vehicles = useVehicleAnimation();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {vehicles.map(vehicle => (
        <AnimatedVehicle
          key={vehicle.id}
          type={vehicle.type}
          style={{
            left: `${vehicle.x}%`,
            top: `${vehicle.y}%`,
            transform: `
              scale(${vehicle.scale})
              rotate(${(vehicle.direction * 180 / Math.PI)}deg)
            `,
            transition: 'all 0.5s linear'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
    </div>
  );
}