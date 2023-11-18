import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, unref, createCommentVNode, renderSlot } from 'vue';
import { useButtonClasses } from './button-custom.mjs';
import { buttonProps, buttonEmits } from './button2.mjs';
import { useButton } from './use-button.mjs';
import _export_sfc from '../../_virtual/_plugin-vue_export-helper.mjs';

const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 0 };
const __default__ = defineComponent({
  name: 'NButton',
});

const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit }) {

const props = __props;





const classes = useButtonClasses(props);

const { handleClick } = useButton(props, emit);



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("button", {
      class: normalizeClass(["n-btn", unref(classes)]),
      disabled: _ctx.disabled,
      onClick: _cache[0] || (_cache[0] = (...args) => (unref(handleClick) && unref(handleClick)(...args)))
    }, [
      createCommentVNode(" <i class=\"n-btn-loading-svg inherit flex-center\" v-if=\"loading\">\r\n        <n-loading-icon size=\"16\"></n-loading-icon>\r\n      </i>\r\n      <n-icon class=\"n-btn-i n-btn-i-prefix\" v-if=\"icon\" :type=\"icon\"></n-icon> "),
      (_ctx.$slots.default)
        ? (openBlock(), createElementBlock("span", _hoisted_2, [
            renderSlot(_ctx.$slots, "default")
          ]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" <n-icon class=\"n-btn-i n-btn-i-suffix\" v-if=\"suffixIcon\" :type=\"suffixIcon\"></n-icon> ")
    ], 10 /* CLASS, PROPS */, _hoisted_1),
    createCommentVNode(" <button :class=\"classes\">\r\n    <slot />\r\n  </button> ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}
}

});
var Button = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"C:\\Users\\jevin\\Desktop\\vite-vue3-ui\\packages\\components\\button\\src\\button.vue"]]);

export { Button as default };
//# sourceMappingURL=button.mjs.map
