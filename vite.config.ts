import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/flow/" : "/",
  plugins: [react(), sassDts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
