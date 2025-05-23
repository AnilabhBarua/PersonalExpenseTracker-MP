import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 preview: {
    allowedHosts: ["expensia.site"],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});