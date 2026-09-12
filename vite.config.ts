import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/abir-development-stack/",
  plugins: [react(), tailwindcss()],
});