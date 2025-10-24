import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//  "homepage": "https://noorullah-riu.github.io/Portflio_ReactJS/",
export default defineConfig({
  plugins: [react()],
  base: '/',
})
