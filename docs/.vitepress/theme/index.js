import UifNextV3 from '../../../packages/components'


import VPApp, { globals } from '../vitepress'

export default {
  Layout: VPApp,
  enhanceApp: ({app}) => {
    app.use(UifNextV3)

    globals.forEach(([name, value]) => {
      app.component(name, value)
    })
  }
}