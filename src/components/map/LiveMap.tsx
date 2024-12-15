import React, { useState, useCallback } from 'react';
import Map, { ViewState } from 'react-map-gl';
import { Vehicle } from '../../types/vehicle';
import { MAP_CONFIG } from '../../config/map';
import { VehicleMarker } from './VehicleMarker';
import { VehiclePopup } from './VehiclePopup';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LiveMapProps {
  vehicles: Vehicle[];
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export function LiveMap({ vehicles, onVehicleSelect }: LiveMapProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [viewport, setViewport] = useState<ViewState>(MAP_CONFIG.MARTINIQUE_CENTER);

  const handleMove = useCallback((evt: { viewState: ViewState }) => {
    setViewport(evt.viewState);
  }, []);

  const handleVehicleClick = useCallback((vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    onVehicleSelect(vehicle);
  }, [onVehicleSelect]);

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
      <Map
        {...viewport}
        width="100%"
        height="100%"
        onMove={handleMove}
        mapStyle={MAP_CONFIG.STYLE_URL}
        mapboxAccessToken={MAP_CONFIG.TOKEN}
        maxZoom={MAP_CONFIG.MAX_ZOOM}
        minZoom={MAP_CONFIG.MIN_ZOOM}
        reuseMaps
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