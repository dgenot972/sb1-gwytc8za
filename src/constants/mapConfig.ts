// Mapbox configuration
export const MAPBOX_TOKEN = 'pk.eyJ1IjoiZnJldGxhIiwiYSI6ImNsc2c2ZXBxODE4NjYya3FwZzZ1NXZ2YXIifQ.0rHAW0H6RHUaQZVh2WOcRA';

// Center coordinates for Martinique
export const INITIAL_VIEWPORT = {
  latitude: 14.616065,
  longitude: -61.05878,
  zoom: 11,
  bearing: 0,
  pitch: 0
} as const;

// Map style URL
export const MAP_STYLE = 'mapbox://styles/mapbox/streets-v11';

// Vehicle type colors for map markers
export const VEHICLE_COLORS = {
  pedestrian: '#6366F1', // Indigo
  bike: '#10B981',      // Emerald
  scooter: '#F59E0B',   // Amber
  car: '#4F46E5',       // Indigo
  van: '#7C3AED',       // Purple
  truck: '#EC4899'      // Pink
} as const;

// Vehicle labels for display
export const VEHICLE_LABELS = {
  pedestrian: 'Piéton',
  bike: 'Vélo',
  scooter: 'Scooter',
  car: 'Voiture',
  van: 'Utilitaire',
  truck: 'Camion'
} as const;