import { createApp }  from 'vue'
// import UifNextV3 from '@uif-next3/components'
// import UifNextV3 from './uif.js'
// import './uif.umd'

import '@uif-next3/styles/index.css'

;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)
  // console.log(createApp, 'createApp');
  // console.log(app, 'app');

  window.vue = app

  app.use(uif).mount('#play')
  // app.mount('#play')

})()