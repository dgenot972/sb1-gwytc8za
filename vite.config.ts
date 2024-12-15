import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-map-gl', 'mapbox-gl']
  },
  resolve: {
    alias: {
      'mapbox-gl': 'mapbox-gl'
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'mapbox': ['mapbox-gl', 'react-map-gl']
        }
      }
    }
  },
  define: {
    'process.env.VITE_MAPBOX_TOKEN': JSON.stringify(process.env.VITE_MAPBOX_TOKEN)
  }
});