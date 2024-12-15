import React, { useState } from 'react';
import { LiveMap } from './LiveMap';
import { Vehicle } from '../types/vehicle';
import { VEHICLE_COLORS } from '../constants/mapConfig';

// Données de test pour simuler les véhicules en temps réel
const mockVehicles: Vehicle[] = [
  {
    id: '1',
    type: 'bike',
    capacity: { weight: 20, volume: 0.1 },
    currentLocation: { lat: 14.616065, lng: -61.05878 }
  },
  {
    id: '2',
    type: 'scooter',
    capacity: { weight: 50, volume: 0.3 },
    currentLocation: { lat: 14.617, lng: -61.059 }
  },
  {
    id: '3',
    type: 'car',
    capacity: { weight: 200, volume: 1.5 },
    currentLocation: { lat: 14.615, lng: -61.070 }
  },
  {
    id: '4',
    type: 'van',
    capacity: { weight: 800, volume: 6 },
    currentLocation: { lat: 14.618, lng: -61.065 }
  },
  {
    id: '5',
    type: 'truck',
    capacity: { weight: 3500, volume: 20 },
    currentLocation: { lat: 14.620, lng: -61.062 }
  }
];

export function MapView() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    console.log('Vehicle selected:', vehicle);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Freters à proximité</h2>
        <div className="flex space-x-4">
          {Object.entries(VEHICLE_COLORS).map(([type, color]) => (
            <div key={type} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm text-gray-600">{type}</span>
            </div>
          ))}
        </div>
      </div>
      
      <LiveMap 
        vehicles={mockVehicles} 
        onVehicleSelect={handleVehicleSelect}
      />
    </div>
  );
}