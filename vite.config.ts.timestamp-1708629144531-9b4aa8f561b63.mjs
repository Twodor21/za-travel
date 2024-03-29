// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/tudor/Desktop/ALL%20about%20JavaScript/Zacker%20Academy/work%20folder/Week%2014%20-%20Travel%20Project/za-travel/za-travel/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/tudor/Desktop/ALL%20about%20JavaScript/Zacker%20Academy/work%20folder/Week%2014%20-%20Travel%20Project/za-travel/za-travel/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\tudor\\Desktop\\ALL about JavaScript\\Zacker Academy\\work folder\\Week 14 - Travel Project\\za-travel\\za-travel";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@features": path.resolve(__vite_injected_original_dirname, "src/features"),
      "@config": path.resolve(__vite_injected_original_dirname, "./src/app/config"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/app/store"),
      "@services": path.resolve(__vite_injected_original_dirname, "./src/app/services")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0dWRvclxcXFxEZXNrdG9wXFxcXEFMTCBhYm91dCBKYXZhU2NyaXB0XFxcXFphY2tlciBBY2FkZW15XFxcXHdvcmsgZm9sZGVyXFxcXFdlZWsgMTQgLSBUcmF2ZWwgUHJvamVjdFxcXFx6YS10cmF2ZWxcXFxcemEtdHJhdmVsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0dWRvclxcXFxEZXNrdG9wXFxcXEFMTCBhYm91dCBKYXZhU2NyaXB0XFxcXFphY2tlciBBY2FkZW15XFxcXHdvcmsgZm9sZGVyXFxcXFdlZWsgMTQgLSBUcmF2ZWwgUHJvamVjdFxcXFx6YS10cmF2ZWxcXFxcemEtdHJhdmVsXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy90dWRvci9EZXNrdG9wL0FMTCUyMGFib3V0JTIwSmF2YVNjcmlwdC9aYWNrZXIlMjBBY2FkZW15L3dvcmslMjBmb2xkZXIvV2VlayUyMDE0JTIwLSUyMFRyYXZlbCUyMFByb2plY3QvemEtdHJhdmVsL3phLXRyYXZlbC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMnKSxcbiAgICAgICdAZmVhdHVyZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2ZlYXR1cmVzJyksXG4gICAgICAnQGNvbmZpZyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hcHAvY29uZmlnJyksXG4gICAgICAnQHN0b3JlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2FwcC9zdG9yZScpLFxuICAgICAgJ0BzZXJ2aWNlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hcHAvc2VydmljZXMnKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStpQixPQUFPLFVBQVU7QUFDaGtCLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sV0FBVztBQUhsQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsVUFBVSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNuRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUNyRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNuRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
