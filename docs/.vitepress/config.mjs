import { defineConfig } from 'vitepress'
import sidebar from './config/sidebar'

import MdPlugins from './config/plugins'

export default defineConfig({
  title: "uif-plus",
  description: "这是一个uif-plus",

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//icvip-temp.oss-cn-shenzhen.aliyuncs.com/cdn/202311/ni-font.cdn.css?20231102.1436',
      },
    ],
  ],
  // srcDir: './examples',
  themeConfig: {
    nav: [
      { text: '组件', link: '/document/component/button'},
      { text: '函数', link: '/document/methods/array/inArray' }
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