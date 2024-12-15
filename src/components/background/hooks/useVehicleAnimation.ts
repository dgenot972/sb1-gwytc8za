import { useState, useEffect } from 'react';
import { VehicleType } from '../../../types/vehicle';
import { ANIMATION_CONFIG } from '../../../config/animation';
import { 
  generateRandomInRange, 
  calculateNewPosition, 
  handleBoundaryCollision 
} from '../../../utils/animation';

export interface VehicleAnimation {
  id: string;
  type: VehicleType;
  x: number;
  y: number;
  speed: number;
  direction: number;
  scale: number;
}

export function useVehicleAnimation() {
  const [vehicles, setVehicles] = useState<VehicleAnimation[]>([]);

  // Initialize vehicles
  useEffect(() => {
    const types: VehicleType[] = ['bike', 'car', 'van', 'truck', 'scooter'];
    const initialVehicles: VehicleAnimation[] = Array.from(
      { length: ANIMATION_CONFIG.VEHICLE_COUNT }, 
      (_, i) => ({
        id: `vehicle-${i}`,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: generateRandomInRange(ANIMATION_CONFIG.SPEED.MIN, ANIMATION_CONFIG.SPEED.MAX),
        direction: Math.random() * Math.PI * 2,
        scale: generateRandomInRange(ANIMATION_CONFIG.SCALE.MIN, ANIMATION_CONFIG.SCALE.MAX)
      })
    );
    setVehicles(initialVehicles);
  }, []);

  // Animate vehicles
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prevVehicles => 
        prevVehicles.map(vehicle => {
          const { x: newX, y: newY } = calculateNewPosition(
            vehicle.x,
            vehicle.y,
            vehicle.direction,
            vehicle.speed
          );

          const { x, y, direction } = handleBoundaryCollision(
            newX,
            newY,
            vehicle.direction
          );

          return {
            ...vehicle,
            x,
            y,
            direction
          };
        })
      );
    }, ANIMATION_CONFIG.UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return vehicles;
}