import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@utils": resolve(__dirname, "src/utils"),
      "@types": resolve(__dirname, "src/types"),
      "@assets": resolve(__dirname, "src/assets"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@services": resolve(__dirname, "src/services"),
      "@stores": resolve(__dirname, "src/stores"),
      "@composables": resolve(__dirname, "src/composables"),
      "@router": resolve(__dirname, "src/router"),
    },
  },
});
