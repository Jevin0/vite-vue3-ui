// import './init'

import { createApp } from 'vue'

// import UifNextV3 from '@uif-plus/components'
// import UifNextV3 from './uif.mjs'

import uifPlus from '../dist/uif-plus/es/index.mjs'

// import './uif.umd'

import '@uif-plus/styles/index.css'
import App from "./src/App.vue"

const app = createApp(App)

app.use(uifPlus).mount('#play')