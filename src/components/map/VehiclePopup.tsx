import React from 'react';
import { Popup } from 'react-map-gl';
import { Vehicle } from '../../types/vehicle';
import { VEHICLE_LABELS } from '../../constants/mapConfig';
import { FretAmount } from '../currency/FretAmount';

interface VehiclePopupProps {
  vehicle: Vehicle;
  onClose: () => void;
  onSelect: (vehicle: Vehicle) => void;
}

export function VehiclePopup({ vehicle, onClose, onSelect }: VehiclePopupProps) {
  return (
    <Popup
      latitude={vehicle.currentLocation.lat}
      longitude={vehicle.currentLocation.lng}
      onClose={onClose}
      closeButton={true}
      closeOnClick={false}
      className="bg-white rounded-lg shadow-lg p-4 animate-fade-in"
    >
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">
          {VEHICLE_LABELS[vehicle.type]}
        </h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Capacité: {vehicle.capacity.weight}kg / {vehicle.capacity.volume}m³
          </p>
          <div className="bg-indigo-50 rounded-lg p-2">
            <FretAmount amount={1.5} size="sm" showEuroEquivalent />
          </div>
        </div>
        <button
          onClick={() => onSelect(vehicle)}
          className="w-full btn-primary py-2"
        >
          Réserver maintenant
        </button>
      </div>
    </Popup>
  );
}