import { Vehicle } from '../types/vehicle';

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    type: 'pedestrian',
    capacity: { weight: 5, volume: 0.02 },
    currentLocation: { lat: 14.616065, lng: -61.05878 }
  },
  {
    id: '2',
    type: 'bike',
    capacity: { weight: 20, volume: 0.1 },
    currentLocation: { lat: 14.617, lng: -61.059 }
  },
  {
    id: '3',
    type: 'scooter',
    capacity: { weight: 50, volume: 0.3 },
    currentLocation: { lat: 14.615, lng: -61.070 }
  },
  {
    id: '4',
    type: 'car',
    capacity: { weight: 200, volume: 1.5 },
    currentLocation: { lat: 14.618, lng: -61.065 }
  },
  {
    id: '5',
    type: 'van',
    capacity: { weight: 800, volume: 6 },
    currentLocation: { lat: 14.620, lng: -61.062 }
  },
  {
    id: '6',
    type: 'truck',
    capacity: { weight: 3500, volume: 20 },
    currentLocation: { lat: 14.622, lng: -61.064 }
  }
];