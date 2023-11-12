<script setup>
import { computed } from 'vue'
import Example from './demo/vp-example.vue'

const props = defineProps({
  demos: Object || String,
  source: String,
  path: String,
  rawSource: String,
  description: String
})

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../sfc/', '').replace('.vue', '')] = props.demos[key].default
  })

  return demos
})
</script>

<template>
  <ClientOnly>

    <Example :file="path" :demo="formatPathDemos[path]" />
    demo jevin
  </ClientOnly>
</template>