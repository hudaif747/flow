import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/flow/" : "/",
  plugins: [react(), svgr(), sassDts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
