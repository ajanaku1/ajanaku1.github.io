import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ajanaku1.github.io/",
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
});
