// import './init'

import { createApp } from 'vue'

// import UifNextV3 from '@uif-next3/components'
// import UifNextV3 from './uif.mjs'

// import './uif.umd'

import '@uif-next3/styles/index.css'
import App from "./src/App.vue"

const app = createApp(App)

app.use(uif).mount('#play')