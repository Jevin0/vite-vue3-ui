const path = require('path')
const fs = require('fs')
const { defineConfig, build } = require("vite")
const vue = require("@vitejs/plugin-vue")
const {viteExternalsPlugin } = require("vite-plugin-externals")



// 基础配置
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'Vue',
    })

  ]
})

const compontsDir = path.resolve(__dirname, "../packages/components")

const rollupOptions = defineConfig({
  external: ['vue'],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    // globals: {
    //   vue: 'Vue',
    // }
  },
})

const outputDir = path.resolve(__dirname, "../lib")
const playDir = path.resolve(__dirname, "../play")


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

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: compontsDir,
          name: "uif",
          fileName: "uif",
          formats: ["es", "umd"]
        },
        minify: false,
        rollupOptions,
        outDir: outputDir
      }
    })
  )
}


const buildLib = async () => {
  await buildAll()
  copyFiles()
}

buildLib()