export function MarkdownTransform () {
  return {
    name: 'md-transform',

    enforce: 'pre',

    // async buildStart() {
    //   const pattern = `{${[...languages, languages[0]].join(',')}}/component`

    //   compPaths = await glob(pattern, {
    //     cwd: docRoot,
    //     absolute: true,
    //     onlyDirectories: true,
    //   })
    // },

    async transform(code, id) {
      console.log(code, 'code>>>');
      // if (!id.endsWith('.md')) return

      // const componentId = path.basename(id, '.md')
      // const append = {
      //   headers: [],
      //   footers: [],
      //   scriptSetups: [
      //     `const demos = import.meta.globEager('../../internal/${componentId}/*.vue')`,
      //   ],
      // }

      // code = transformVpScriptSetup(code, append)

      // if (compPaths.some((compPath) => id.startsWith(compPath))) {
      //   code = transformComponentMarkdown(id, componentId, code, append)
      // }

      // return combineMarkdown(
      //   code,
      //   [combineScriptSetup(append.scriptSetups), ...append.headers],
      //   append.footers
      // )
    },
  }
}