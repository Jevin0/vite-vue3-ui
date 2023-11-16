
import { installComponent } from "@uif-plus/utils"
import SlideDown from "./src/slide-down.vue"


// 具名导出
export { SlideDown }

// 导出插件
export default {
  install(app, options) {
    installComponent(app, SlideDown, options)
  }
}
