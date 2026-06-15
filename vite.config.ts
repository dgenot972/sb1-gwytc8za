import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages this is a project site served from /sb1-gwytc8za/.
// Locally (dev / preview) we keep the root base so everything works as usual.
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/sb1-gwytc8za/' : '/',
  plugins: [react()],
});
