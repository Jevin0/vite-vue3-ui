
const CLASS_PREFIX = "n"
const GLOBAL_CONFIG_NAME = "_UifNext3"

export const installComponent = (app, component, options) => {
  // setGlobalConfig(app, options)
  app.component(component.name, component)

}

// // 注入全局app属性
// export const setGlobalConfig = (
//   app,
//   options = { classPrefix: CLASS_PREFIX }
// ) => {
//   app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
//     ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
//     classPrefix: options.classPrefix
//   }
// }