export const withInstall = (main) => {
  main.install = (app) => {
    app.component(main.name, main)
  }

  return main
}