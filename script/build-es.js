// const { defineConfig, build } = require("vite")
const path = require("path")
const {rollup} = require("rollup")
const vue = require("@vitejs/plugin-vue")
const {nodeResolve} = require("@rollup/plugin-node-resolve")
const VueMacros = require("unplugin-vue-macros/rollup")
const commonjs = require("@rollup/plugin-commonjs")
const {default: esbuild} = require("rollup-plugin-esbuild")
const glob = require("fast-glob")


const dir = path.resolve(__dirname, '../packages')
const upRoot = path.resolve(__dirname, '../packages/uif-plus')

const oupdir = path.resolve(__dirname, '../dist/uif-plus')


const excludeFiles = (files) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}

const buildEs = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,vue}', {
      cwd: dir,
      absolute: true,
      onlyFiles: true,
    })
  )

  const bundle = await rollup({
    input,
    // output: {
    //   file: oupdir,
    //   format: 'es',
    // },
    external: ['vue', '@vue'],
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false,
          })
        },
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'js',
        }
      }),
    ],
    treeshake: false,
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]) => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: upRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )



  // console.log(bundle, 'bundle');
  // build(
  //   defineConfig({

  //   })
  // )
}

function writeBundles(bundle, options) {
  return Promise.all(options.map((option) => bundle.write(option)))
}

buildEs()



const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(oupdir, 'es'),
    },
    bundle: {
      path: `uif-plus/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(oupdir, 'lib'),
    },
    bundle: {
      path: `uif-plus/lib`,
    },
  },
}
const buildConfigEntries = Object.entries(
  buildConfig
) 