export const makeInstaller = (components) => {
  const install = (app) => {
    components.forEach((c) => app.use(c))
  }

  return {
    install,
  }
}