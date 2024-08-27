// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/wildfly/Documents/technicalTest/with_Madrid/front/hats_chat/node_modules/vite/dist/node/index.js";
import vue from "file:///home/wildfly/Documents/technicalTest/with_Madrid/front/hats_chat/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import viteImagemin from "file:///home/wildfly/Documents/technicalTest/with_Madrid/front/hats_chat/node_modules/vite-plugin-imagemin/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/wildfly/Documents/technicalTest/with_Madrid/front/hats_chat/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: {
        interlaced: true
      },
      mozjpeg: {
        quality: 75
      },
      optipng: {
        optimizationLevel: 5
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      }
    })
  ],
  base: process.env.VITE_BASE_URL,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS93aWxkZmx5L0RvY3VtZW50cy90ZWNobmljYWxUZXN0L3dpdGhfTWFkcmlkL2Zyb250L2hhdHNfY2hhdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvd2lsZGZseS9Eb2N1bWVudHMvdGVjaG5pY2FsVGVzdC93aXRoX01hZHJpZC9mcm9udC9oYXRzX2NoYXQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvd2lsZGZseS9Eb2N1bWVudHMvdGVjaG5pY2FsVGVzdC93aXRoX01hZHJpZC9mcm9udC9oYXRzX2NoYXQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdml0ZUltYWdlbWluKHtcbiAgICAgIGdpZnNpY2xlOiB7XG4gICAgICAgIGludGVybGFjZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgbW96anBlZzoge1xuICAgICAgICBxdWFsaXR5OiA3NSxcbiAgICAgIH0sXG4gICAgICBvcHRpcG5nOiB7XG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA1LFxuICAgICAgfSxcbiAgICAgIHN2Z286IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHsgcmVtb3ZlVmlld0JveDogZmFsc2UgfSxcbiAgICAgICAgICB7IGNsZWFudXBJRHM6IGZhbHNlIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBiYXNlOiBwcm9jZXNzLmVudi5WSVRFX0JBU0VfVVJMLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxWCxTQUFTLGVBQWUsV0FBVztBQUV4WixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxrQkFBa0I7QUFKaU4sSUFBTSwyQ0FBMkM7QUFPM1IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ1AsRUFBRSxlQUFlLE1BQU07QUFBQSxVQUN2QixFQUFFLFlBQVksTUFBTTtBQUFBLFFBQ3RCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQU0sUUFBUSxJQUFJO0FBQUEsRUFDbEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
