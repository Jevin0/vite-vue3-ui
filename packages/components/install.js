
import { installComponent } from "@uif-next3/utils"
import { components } from "./components"

const UifNextV3 = {
  
  install(app, options) {
    components.forEach(component => {
      installComponent(app, component, options)
    })

  }
}


export default UifNextV3