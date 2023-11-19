import { defineComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, renderSlot, vShow } from 'vue';
import { slideDownProps, slideDownEmit } from './slide-down.mjs';
import _export_sfc from '../../../_virtual/_plugin-vue_export-helper.mjs';

const _hoisted_1 = { class: "n-slide-down" };
const __default__ = defineComponent({
  name: 'NSlideDown',
});

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  props: slideDownProps,
  emits: slideDownEmit,
  setup(__props, { emit }) {

const props = __props;




const beforeEnter = (el) => {
  if (props.transition) {
    el.style.display = 'block';
    setHeight(el);
    el.style.display = '';
  }
};

const beforeLeave = (el) => {
  if (props.transition) {
    setHeight(el);
  }
};

const after = (el) => {
  if (props.transition) {
    el.style.height = '';
  }
  emit('after');
};

const setHeight = (el) => {
  el.style.height = el.getBoundingClientRect().height + 'px';
};



return (_ctx, _cache) => {
  return (openBlock(), createBlock(Transition, {
    name: "n-slide-down",
    onBeforeEnter: beforeEnter,
    onBeforeLeave: beforeLeave,
    onAfterEnter: after,
    onAfterLeave: after,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ], 512 /* NEED_PATCH */), [
        [vShow, props.modelValue]
      ])
    ]),
    _: 3 /* FORWARDED */
  }))
}
}

});
var SlideDown = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"F:\\vite-vue3-ui\\packages\\components\\slide-down\\src\\slide-down.vue"]]);

export { SlideDown as default };
//# sourceMappingURL=slide-down2.mjs.map
