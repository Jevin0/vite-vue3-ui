import path from 'path'

export function MarkdownTransform () {
  return {
    name: 'md-transform',

    enforce: 'pre',

    transform(code, id) {
      if (!id.endsWith('.md')) return
      if (id.endsWith('docs/index.md')) return

      const componentId = path.basename(id, '.md')
      const append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
        ],
      }

      // code = transformVpScriptSetup(code, append)

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
    },
  }
}

// const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/


// const transformVpScriptSetup = (code, append) => {
//   const matches = code.match(vpScriptSetupRE)
//   if (matches) code = code.replace(matches[0], '')
//   const scriptSetup = matches?.[3] ?? ''
//   if (scriptSetup) append.scriptSetups.push(scriptSetup)
//   return code
// }

const combineScriptSetup = (codes) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code,
  headers,
  footers
) => {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex =
    firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}