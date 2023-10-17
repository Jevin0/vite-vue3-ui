const installComponent = (app, component, options) => {
  app.component(component.name, component);
};
const MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value === "number" && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
}
function isLikeArray(value) {
  return value && typeof value !== "string" && typeof value !== "function" && isLength(value.length);
}
function toArrayFrom(array, index) {
  const args = [];
  if (isLikeArray(array)) {
    for (let i = index; i < array.length; i++) {
      args.push(array[i]);
    }
  }
  return args;
}
function toArray(array) {
  return toArrayFrom(array, 0);
}
function inArray(array, value) {
  return toArray(array).some((val) => val === value);
}
function isArrayLike(value) {
  return !!isLikeArray(value);
}
function isObjectLike(value) {
  return typeof value === "object" && value !== null && !isArrayLike(value);
}
function unobservable(value) {
  if (isArrayLike(value) || isObjectLike(value)) {
    Object.defineProperty(value, "__v_skip", {
      value: "UIF",
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
  if (value && value.__ob__) {
    delete value.__ob__;
  }
  return value;
}
function getDefault(value, def) {
  return value !== void 0 ? value : def;
}
const prop = unobservable({
  /**
   * 规则 -> String
   * @param   defaultValue {*?}        默认值 ''
   */
  string(defaultValue) {
    return {
      type: String,
      default: getDefault(defaultValue, "")
    };
  },
  /**
   * 规则 -> Number
   * @param   defaultValue {*?}        默认值 0
   */
  number(defaultValue) {
    return {
      type: Number,
      default: getDefault(defaultValue, 0)
    };
  },
  /**
   * 规则 -> String | Number
   * @param   defaultValue {*?}        默认值 ''
   */
  stringNumber(defaultValue) {
    return {
      type: [String, Number],
      default: getDefault(defaultValue, "")
    };
  },
  /**
   * 规则 -> String | Array
   * @param   defaultValue {*?}        默认值 ''
   */
  stringArray(defaultValue) {
    return {
      type: [String, Array],
      default: getDefault(defaultValue, "")
    };
  },
  /**
   * 规则 -> Boolean
   * @param   defaultValue {*?}        默认值 false
   */
  boolean(defaultValue) {
    return {
      type: Boolean,
      default: getDefault(defaultValue, false)
    };
  },
  /**
   * 规则 -> Object
   * @param   defaultValue {*?}        默认值 {}
   */
  object(defaultValue) {
    return {
      type: Object,
      default: getDefault(defaultValue, () => ({}))
    };
  },
  /**
   * 规则 -> Array
   * @param   defaultValue {*?}        默认值 []
   */
  array(defaultValue) {
    return {
      type: Array,
      default: getDefault(defaultValue, () => [])
    };
  },
  /**
   * 规则 -> Function
   * @param   defaultValue {*?}        默认值 () => {}
   */
  function(defaultValue) {
    return {
      type: Function,
      default: getDefault(defaultValue, () => {
      })
    };
  },
  /**
   * 自定义规则 -> 在数组内
   * @param   array  {Array}          参考数组
   * @param   defaultValue {*?}        默认值
   * @param   allowFalse {Boolean?}   允许空
   */
  inArray(array, defaultValue, allowFalse) {
    return {
      validator(value) {
        return allowFalse && !value || inArray(array, value);
      },
      default: defaultValue
    };
  },
  /**
   * 自定义规则 -> popper placement
   * @param   defaultValue {*?}        默认值
   */
  placement(defaultValue) {
    return prop.inArray([
      "auto",
      "auto-start",
      "auto-end",
      "top",
      "top-start",
      "top-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "right",
      "right-start",
      "right-end",
      "left",
      "left-start",
      "left-end"
    ], getDefault(defaultValue, "auto-start"));
  },
  /**
   * 自定义规则 -> builder
   */
  builder() {
    return {
      type: [String, Function],
      default: ""
    };
  }
});
const computed = window["Vue"].computed;
const useButtonClasses = ({ size, type, shape, hover, active, outline, breadth, loading }) => {
  return computed(() => {
    return [
      "n-btn",
      `n-btn-${type}`,
      `n-btn-${size}`,
      `n-btn-${shape}`,
      {
        hover,
        active,
        outline,
        loading,
        [breadth]: breadth
      }
    ];
  });
};
const buttonProps = {
  size: prop.inArray(["mini", "small", "middle", "large"], "middle"),
  type: prop.inArray(["default", "primary", "success", "warning", "danger", "link", "text", "text-plus", "none"], "default"),
  shape: prop.inArray(["radius", "circle"], "radius"),
  // 线框模式
  outline: prop.boolean(),
  // hover样式
  hover: prop.boolean(),
  // active样式
  active: prop.boolean(),
  // 禁用
  disabled: prop.boolean(),
  // 加载中
  loading: prop.boolean(),
  // 前置Icon
  icon: prop.string(),
  // 后置Icon
  suffixIcon: prop.string()
};
const buttonEmits = {
  click: () => true
};
const useButton = (props, emit) => {
  const handleClick = (evt) => {
    emit("click", evt);
  };
  return {
    handleClick
  };
};
const _unref = window["Vue"].unref;
const _createCommentVNode = window["Vue"].createCommentVNode;
const _renderSlot = window["Vue"].renderSlot;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const _normalizeClass = window["Vue"].normalizeClass;
const _createElementVNode = window["Vue"].createElementVNode;
const _Fragment = window["Vue"].Fragment;
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "NButton"
}, {
  __name: "button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit }) {
    const props = __props;
    const classes = useButtonClasses(props);
    const { handleClick } = useButton(props, emit);
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("button", {
            class: _normalizeClass(["n-btn", _unref(classes)]),
            disabled: _ctx.disabled,
            onClick: _cache[0] || (_cache[0] = (...args) => _unref(handleClick) && _unref(handleClick)(...args))
          }, [
            _createCommentVNode(' <i class="n-btn-loading-svg inherit flex-center" v-if="loading">\r\n        <n-loading-icon size="16"></n-loading-icon>\r\n      </i>\r\n      <n-icon class="n-btn-i n-btn-i-prefix" v-if="icon" :type="icon"></n-icon> '),
            _ctx.$slots.default ? (_openBlock(), _createElementBlock("span", _hoisted_2, [
              _renderSlot(_ctx.$slots, "default")
            ])) : _createCommentVNode("v-if", true),
            _createCommentVNode(' <n-icon class="n-btn-i n-btn-i-suffix" v-if="suffixIcon" :type="suffixIcon"></n-icon> ')
          ], 10, _hoisted_1),
          _createCommentVNode(' <button :class="classes">\r\n    <slot />\r\n  </button> ')
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});
const components = [_sfc_main];
const UifNextV3 = {
  install(app, options) {
    components.forEach((component) => {
      installComponent(app, component);
    });
  }
};
export {
  UifNextV3 as default
};
