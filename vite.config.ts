import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/jazz",
  build: {
    outDir: "build",
  },
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
  },
});
