import React, { memo } from 'react';
import { Marker } from 'react-map-gl';
import { Vehicle } from '../../types/vehicle';
import { VEHICLE_COLORS } from '../../constants/mapConfig';
import { VehicleIcon } from './VehicleIcon';

interface VehicleMarkerProps {
  vehicle: Vehicle;
  onClick: (vehicle: Vehicle) => void;
}

export const VehicleMarker = memo(function VehicleMarker({ vehicle, onClick }: VehicleMarkerProps) {
  return (
    <Marker
      latitude={vehicle.currentLocation.lat}
      longitude={vehicle.currentLocation.lng}
      onClick={() => onClick(vehicle)}
    >
      <div className="relative cursor-pointer transform hover:scale-110 transition-transform marker-pulse">
        <div 
          className="p-2 rounded-full shadow-lg transition-custom"
          style={{ backgroundColor: VEHICLE_COLORS[vehicle.type] }}
        >
          <VehicleIcon type={vehicle.type} className="h-6 w-6 text-white" />
        </div>
      </div>
    </Marker>
  );
});