import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dns-game/', // substitua <nome-do-repositorio> pelo nome do seu repositório
})
