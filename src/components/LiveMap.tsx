import React, { useState } from 'react';
import Map from 'react-map-gl';
import { Vehicle } from '../types/vehicle';
import { MAPBOX_TOKEN, MARTINIQUE_CENTER } from '../constants/mapConfig';
import { VehicleMarker } from './map/VehicleMarker';
import { VehiclePopup } from './map/VehiclePopup';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LiveMapProps {
  vehicles: Vehicle[];
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export function LiveMap({ vehicles, onVehicleSelect }: LiveMapProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [viewport, setViewport] = useState(MARTINIQUE_CENTER);

  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    onVehicleSelect(vehicle);
  };

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
      <Map
        {...viewport}
        width="100%"
        height="100%"
        onMove={evt => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {vehicles.map((vehicle) => (
          <VehicleMarker
            key={vehicle.id}
            vehicle={vehicle}
            onClick={handleVehicleClick}
          />
        ))}

        {selectedVehicle && (
          <VehiclePopup
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
            onSelect={onVehicleSelect}
          />
        )}
      </Map>
    </div>
  );
}