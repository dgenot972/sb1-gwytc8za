import { useState } from 'react';
import { MARTINIQUE_CENTER } from '../constants/mapConfig';
import type { ViewState } from 'react-map-gl';

export function useMapViewport() {
  const [viewport, setViewport] = useState<ViewState>(MARTINIQUE_CENTER);

  const handleViewportChange = (newViewport: ViewState) => {
    setViewport(newViewport);
  };

  return {
    viewport,
    onMove: handleViewportChange
  };
}