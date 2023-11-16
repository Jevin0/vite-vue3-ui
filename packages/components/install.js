
// import { installComponent } from "@uif-plus/utils"
import { components } from "./components"


const UifNextV3 = {
  
  install(app, options) {
    components.forEach(component => {
      app.component(component.name, component)
      // installComponent(app, component, options)
    })
  }

}



export default UifNextV3