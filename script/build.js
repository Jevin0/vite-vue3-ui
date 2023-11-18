const path = require('path')
const fs = require('fs')
const { defineConfig, build } = require("vite")
const vue = require("@vitejs/plugin-vue")
const commonjs = require("@rollup/plugin-commonjs")
const nodeResolve = require("@rollup/plugin-node-resolve")


// const {viteExternalsPlugin } = require("vite-plugin-externals")



// 基础配置
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    nodeResolve(),
    commonjs({
      esmExternals: ['vue']
    })
    // viteExternalsPlugin({
    //   vue: 'Vue',
    // })

  ],
  optimizeDeps: {
    include: ['vue']
  },
  resolve: {  dedupe: ['vue']} // this line }
})

// const compontsDir = path.resolve(__dirname, "../packages/components")
const UifPlusDir = path.resolve(__dirname, "../packages/uif-plus/index.js")
const outputDir = path.resolve(__dirname, "../dist1")


const rollupOptions = defineConfig({
  // input: UifPlusDir,
  external: ['vue', '@uif-plus/utils'],
  output: {
    esModule: true
  //   // dir: outputDir,
  //   // format: 'es'
  //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //   // globals: {
  //   //   vue: 'Vue',
  //   // }
  },
})

// const outputDir = path.resolve(__dirname, "../dist")
const playDir = path.resolve(__dirname, "../play")




const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          // entry: compontsDir,
          entry: UifPlusDir,
          name: "uif-plus",
          fileName: "uif-plus",
          formats: ["es"]
        },
        minify: false,
        rollupOptions,
        outDir: outputDir,
        sourcemap: true
        // commonjsOptions: {
        //   esmExternals: ['vue']
        // }
      }
    })
  )
}


const buildLib = async () => {
  await buildAll()
  // copyFiles()
}

const copyFiles = () => {

  fs.readdir(outputDir, (err, files) => {
    files.forEach((file) => {
      const sourceFilePath = path.join(outputDir, file);
      const targetFilePath = path.join(playDir, file);

      // 创建可读流和可写流，并复制文件
      const readStream = fs.createReadStream(sourceFilePath);
      const writeStream = fs.createWriteStream(targetFilePath);

      readStream.pipe(writeStream);

      // 监听复制完成事件
      writeStream.on('finish', () => {
        console.log(`Copied: ${file}`);
      });

      // 处理错误
      writeStream.on('error', (err) => {
        console.error(`Error copying ${file}: ${err.message}`);
      });
    })
  })
}

buildLib()