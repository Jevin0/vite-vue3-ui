import { defineConfig, loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env, 'env>>>');

  console.log('vite>>>>>');

  return {
    server: {
      host: true,
      https: !!env.HTTPS
    },

    plugins: [
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      
    ]
  }
})