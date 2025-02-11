import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  alias: {
    "@": path.resolve(__dirname, "./src"), // Alias for the src directory
  },
});
