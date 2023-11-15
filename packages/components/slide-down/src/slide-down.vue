<template>
  <transition name="n-slide-down" @before-enter="beforeEnter" @before-leave="beforeLeave"
              @after-enter="after" @after-leave="after">
    <div class="n-slide-down" v-show="props.modelValue">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { slideDownEmit, slideDownProps } from './slide-down'

defineOptions({
  name: 'NSlideDown',
})

const props = defineProps(slideDownProps)
const emit = defineEmits(slideDownEmit)

const beforeEnter = (el) => {
  if (props.transition) {
    el.style.display = 'block'
    setHeight(el)
    el.style.display = ''
  }
}

const beforeLeave = (el) => {
  if (props.transition) {
    setHeight(el)
  }
}

const after = (el) => {
  if (props.transition) {
    el.style.height = ''
  }
  emit('after')
}

const setHeight = (el) => {
  el.style.height = el.getBoundingClientRect().height + 'px'
}


</script>