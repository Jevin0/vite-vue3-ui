<template>
  <div>
    <n-button @click="toggle">切换</n-button>
    <n-slide-down v-model="state">
      123
    </n-slide-down>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

const state = ref(false)
const toggle = () => {
  state.value = !state.value
}

</script>