import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async (mode) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
    },
    plugins: [
      vue()
    ],
    optimizeDeps: {
      include: ['vue']
    }
  }
})
