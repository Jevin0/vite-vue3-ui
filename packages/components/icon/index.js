
import { installComponent } from "@uif-next3/utils"
import Icon from "./src/icon.vue"


// 具名导出
export { Icon }

// 导出插件
export default {
  install(app, options) {
    installComponent(app, Icon, options)
  }
}
