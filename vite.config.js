import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Important for correct relative paths in production
  plugins: [react()],
});
