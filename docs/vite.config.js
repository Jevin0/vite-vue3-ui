import { defineConfig, loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'

import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'



export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

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

      MarkdownTransform()

      
    ]
  }
})