import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ajanaku1.github.io/",
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  build: {
    target: "esnext",
  },
});
