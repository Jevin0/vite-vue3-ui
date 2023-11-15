
import { installComponent } from "@uif-next3/utils"
import SlideDown from "./src/slide-down.vue"


// 具名导出
export { SlideDown }

// 导出插件
export default {
  install(app, options) {
    installComponent(app, SlideDown, options)
  }
}
