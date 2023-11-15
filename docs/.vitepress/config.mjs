import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'

import MdPlugins from './config/plugins'

export default defineConfig({
  title: "demo-ui",
  description: "这是一个demo-ui",

  transformHead() {
    console.log('123');
    return []
  },
  // srcDir: './examples',
  themeConfig: {
    nav: [
      { text: 'component', link: '/document/component/button' }
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
