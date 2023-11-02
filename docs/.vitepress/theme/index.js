import UifNextV3 from './uif.mjs'
import VPApp, { globals } from '../vitepress'

export default {
  Layout: VPApp,
  enhanceApp: ({app}) => {
    app.use(UifNextV3)

    globals.forEach(([name, value]) => {
      console.log(name, 'name>>');
      console.log(value, 'value>>');
      app.component(name, value)
    })
  }
}