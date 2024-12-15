import { MAPBOX_TOKEN } from '../constants/env';

export const MAP_CONFIG = {
  STYLE_URL: 'mapbox://styles/mapbox/streets-v11',
  DEFAULT_ZOOM: 11,
  MAX_ZOOM: 20,
  MIN_ZOOM: 8,
  MARTINIQUE_CENTER: {
    latitude: 14.616065,
    longitude: -61.05878,
    zoom: 11,
    bearing: 0,
    pitch: 0
  },
  TOKEN: MAPBOX_TOKEN
} as const;