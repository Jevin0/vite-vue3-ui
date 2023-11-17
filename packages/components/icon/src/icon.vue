<template>
  <i class="n-icon" :class="classes" :disabled="props.disabled" :style="styles" @click="onClick"></i>
</template>

<script setup>
import {computed} from 'vue'
// import {prop, inArray, toNumber} from '@uif/next/lib/utils/tools'
import {iconEmits, iconProps} from './icon'

defineOptions({
  name: 'NIcon',
})

const props = defineProps(iconProps)
const emit = defineEmits(iconEmits)

const classes = computed(() => {
  const {custom, type, scene, size, hover, active} = props
  return {
    [custom]: custom,
    [`ni-${type}`]: type,
    [`n-icon-${size}`]: 16,
    [`n-icon-${scene}`]: scene,
    hover,
    active
  }
})

const styles = computed(() => {
  const {color} = props
  return color ? {color} : null
})

const onClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
