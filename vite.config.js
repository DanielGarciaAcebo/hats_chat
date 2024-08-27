import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: {
        interlaced: true,
      },
      mozjpeg: {
        quality: 75,
      },
      optipng: {
        optimizationLevel: 5,
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
        ],
      },
    }),
  ],
  base: process.env.VITE_BASE_URL,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
