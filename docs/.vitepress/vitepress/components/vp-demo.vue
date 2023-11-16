<script setup>
import { computed, ref } from 'vue'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'
import Divider from './common/vp-divider.vue'


const visibleSoure = ref(false)

const props = defineProps({
  demos: Object || String,
  source: String,
  path: String,
  rawSource: String,
  description: String
})

const formatPathDemos = computed(() => {
  const demos = {}

  // 替换完整路径
  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] = props.demos[key].default
  })

  return demos
})

const copoCode = () => {
  const code = decodeURIComponent(props.rawSource)
  console.log(code, 'copy code')
}
</script>

<template>
  <ClientOnly>

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <Divider class="m-0" />

      <div class="btns">
        <n-icon class="btn" type="copy" title="复制代码" @click="copoCode"></n-icon>
        <n-icon class="btn" type="enlarge" title="展开" @click="visibleSoure = !visibleSoure"></n-icon>
      </div>

      <NSlideDown v-model="visibleSoure">
        <SourceCode :source="source"></SourceCode>
      </NSlideDown>
    </div>
  </ClientOnly>
</template>

<style lang="stylus" scoped>
.example
  border 1px solid #dcdfe6
  border-radius 4px
  .btns
    padding 0.5rem
    display flex
    align-items center
    justify-content flex-end
    height 2.5rem
    .btn
      color #909399
      font-size 16px
      margin 0 0.5rem

</style>