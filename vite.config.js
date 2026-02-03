// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// other plugins (astro, react, etc.)

export default defineConfig({
  plugins: [
    tailwindcss(),   // ← important – this is the v4 way
    // astro(), ...
  ],
})