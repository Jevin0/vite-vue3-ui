<template>
  <button class="n-btn" :class="classes" :disabled="disabled" @click="handleClick">
      <!-- <i class="n-btn-loading-svg inherit flex-center" v-if="loading">
        <n-loading-icon size="16"></n-loading-icon>
      </i>
      <n-icon class="n-btn-i n-btn-i-prefix" v-if="icon" :type="icon"></n-icon> -->
      <span v-if="$slots.default"><slot></slot></span>
      <!-- <n-icon class="n-btn-i n-btn-i-suffix" v-if="suffixIcon" :type="suffixIcon"></n-icon> -->
  </button>
  <!-- <button :class="classes">
    <slot />
  </button> -->
</template>

<script setup>

import { useButtonClasses } from './button-custom'
import { buttonEmits, buttonProps } from './button'
import {useButton} from './use-button'

defineOptions({
  name: 'NButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const classes = useButtonClasses(props)

const { handleClick } = useButton(props, emit)


</script>