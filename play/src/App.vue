<template>
  <n-button type="default" @click="hanlderClick">default</n-button>
  <n-button type="primary">primary</n-button>
</template>

<script setup>

const hanlderClick = () => {
  console.log('click >>>');
}
</script>