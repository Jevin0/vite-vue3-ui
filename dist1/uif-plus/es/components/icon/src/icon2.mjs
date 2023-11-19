import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle } from 'vue';
import { iconProps, iconEmits } from './icon.mjs';
import _export_sfc from '../../../_virtual/_plugin-vue_export-helper.mjs';

const _hoisted_1 = ["disabled"];
const __default__ = defineComponent({
  name: 'NIcon',
});

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  props: iconProps,
  emits: iconEmits,
  setup(__props, { emit }) {

const props = __props;




const classes = computed(() => {
  const {custom, type, scene, size, hover, active} = props;
  return {
    [custom]: custom,
    [`ni-${type}`]: type,
    [`n-icon-${size}`]: 16,
    [`n-icon-${scene}`]: scene,
    hover,
    active
  }
});

const styles = computed(() => {
  const {color} = props;
  return color ? {color} : null
});

const onClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(["n-icon", classes.value]),
    disabled: props.disabled,
    style: normalizeStyle(styles.value),
    onClick: onClick
  }, null, 14 /* CLASS, STYLE, PROPS */, _hoisted_1))
}
}

});
var Icon = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"F:\\vite-vue3-ui\\packages\\components\\icon\\src\\icon.vue"]]);

export { Icon as default };
//# sourceMappingURL=icon2.mjs.map
