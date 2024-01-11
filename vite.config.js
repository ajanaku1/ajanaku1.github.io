import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  build: {
    target: "esnext",
  },
});
