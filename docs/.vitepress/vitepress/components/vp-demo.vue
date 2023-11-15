<script setup>
import { computed } from 'vue'
import Example from './demo/vp-example.vue'
import Divider from './common/vp-divider.vue'


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
</script>

<template>
  <ClientOnly>

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <Divider class="m-0" />

      <div class="btns">

      </div>



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

</style>