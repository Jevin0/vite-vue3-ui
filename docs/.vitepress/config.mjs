import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'

import MdPlugins from './config/plugins'

export default defineConfig({
  title: "demo-ui",
  description: "这是一个demo-ui",
  srcDir: './examples',
  themeConfig: {
    nav: [
      { text: 'component', link: '/component/button' }
    ],
    sidebar,

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  markdown: {
    config: (md) => MdPlugins(md)
  }
})
