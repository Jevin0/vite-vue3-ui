// const vue = require("@vitejs/plugin-vue")
// import vue from '@vitejs/plugin-vue'

import vuePlugin from 'rollup-plugin-vue'
import nodeResolva from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import globImport from 'rollup-plugin-glob-import'




// const compontsDir = path.resolve(__dirname, "/packages/components")


module.exports = {
  external: ['vue'],

  input: './packages/components/index.js',
  output: {
    file: 'lib/uif.umd.js',
    format: 'umd',
    name: 'uif',
    globals: {
      vue: 'Vue'
    }
  },
  // output: [
  //   // {
  //   //   file: 'lib/uif.cjs',
  //   //   format: 'es',
  //   //   globals: {
  //   //     vue: 'vue',
  //   //   }
  //   // },
  //   {
  //     file: 'lib/uif.umd.js',
  //     name: 'uif',
  //     format: 'umd',
  //     globals: {
  //       vue: 'vue',
  //     }
  //   },
  // ],
  plugins: [
    vuePlugin(), 
    nodeResolva(), 
    commonjs(), 
    globImport()
  ]
}