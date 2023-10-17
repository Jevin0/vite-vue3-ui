
import { installComponent } from "@uif-next3/utils"
import Button from "./src/button.vue"


// 具名导出
export { Button }

// 导出插件
export default {
  install(app, options) {
    installComponent(app, Button, options)
  }
}
