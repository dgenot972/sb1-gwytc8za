import React, { useState } from 'react';
import { LiveMap } from './LiveMap';
import { Vehicle } from '../../types/vehicle';
import { VEHICLE_COLORS, VEHICLE_LABELS } from '../../constants/mapConfig';
import { mockVehicles } from '../../data/mockData';
import { VehicleLegend } from './VehicleLegend';

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
        <VehicleLegend colors={VEHICLE_COLORS} labels={VEHICLE_LABELS} />
      </div>
      
      <LiveMap 
        vehicles={mockVehicles} 
        onVehicleSelect={handleVehicleSelect}
      />
    </div>
  );
}