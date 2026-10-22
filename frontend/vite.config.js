import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base is set by the deploy workflow when publishing to GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  server: { port: 5173 },
});
