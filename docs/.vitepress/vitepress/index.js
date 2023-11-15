// import VPApp from './components/vp-app.vue'

import '../../../packages/styles/index.css'


import VPApp from 'vitepress/dist/client/theme-default/Layout.vue'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'

import VPDemo from './components/vp-demo.vue'


export default VPApp
export const globals = [
  ['Demo', VPDemo],
]