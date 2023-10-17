import { computed as y, openBlock as d, createElementBlock as b, Fragment as g, createElementVNode as _, normalizeClass as A, unref as f, createCommentVNode as l, renderSlot as h } from "vue";
const k = (t, n, e) => {
  t.component(n.name, n);
}, x = 9007199254740991;
function C(t) {
  return typeof t == "number" && t > -1 && t % 1 === 0 && t <= x;
}
function p(t) {
  return t && typeof t != "string" && typeof t != "function" && C(t.length);
}
function N(t, n) {
  const e = [];
  if (p(t))
    for (let r = n; r < t.length; r++)
      e.push(t[r]);
  return e;
}
function E(t) {
  return N(t, 0);
}
function j(t, n) {
  return E(t).some((e) => e === n);
}
function m(t) {
  return !!p(t);
}
function B(t) {
  return typeof t == "object" && t !== null && !m(t);
}
function F(t) {
  return (m(t) || B(t)) && Object.defineProperty(t, "__v_skip", {
    value: "UIF",
    enumerable: !1,
    writable: !0,
    configurable: !0
  }), t && t.__ob__ && delete t.__ob__, t;
}
function i(t, n) {
  return t !== void 0 ? t : n;
}
const o = F({
  /**
   * 规则 -> String
   * @param   defaultValue {*?}        默认值 ''
   */
  string(t) {
    return {
      type: String,
      default: i(t, "")
    };
  },
  /**
   * 规则 -> Number
   * @param   defaultValue {*?}        默认值 0
   */
  number(t) {
    return {
      type: Number,
      default: i(t, 0)
    };
  },
  /**
   * 规则 -> String | Number
   * @param   defaultValue {*?}        默认值 ''
   */
  stringNumber(t) {
    return {
      type: [String, Number],
      default: i(t, "")
    };
  },
  /**
   * 规则 -> String | Array
   * @param   defaultValue {*?}        默认值 ''
   */
  stringArray(t) {
    return {
      type: [String, Array],
      default: i(t, "")
    };
  },
  /**
   * 规则 -> Boolean
   * @param   defaultValue {*?}        默认值 false
   */
  boolean(t) {
    return {
      type: Boolean,
      default: i(t, !1)
    };
  },
  /**
   * 规则 -> Object
   * @param   defaultValue {*?}        默认值 {}
   */
  object(t) {
    return {
      type: Object,
      default: i(t, () => ({}))
    };
  },
  /**
   * 规则 -> Array
   * @param   defaultValue {*?}        默认值 []
   */
  array(t) {
    return {
      type: Array,
      default: i(t, () => [])
    };
  },
  /**
   * 规则 -> Function
   * @param   defaultValue {*?}        默认值 () => {}
   */
  function(t) {
    return {
      type: Function,
      default: i(t, () => {
      })
    };
  },
  /**
   * 自定义规则 -> 在数组内
   * @param   array  {Array}          参考数组
   * @param   defaultValue {*?}        默认值
   * @param   allowFalse {Boolean?}   允许空
   */
  inArray(t, n, e) {
    return {
      validator(r) {
        return e && !r || j(t, r);
      },
      default: n
    };
  },
  /**
   * 自定义规则 -> popper placement
   * @param   defaultValue {*?}        默认值
   */
  placement(t) {
    return o.inArray([
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
    ], i(t, "auto-start"));
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
}), S = ({ size: t, type: n, shape: e, hover: r, active: a, outline: s, breadth: u, loading: c }) => y(() => [
  "n-btn",
  `n-btn-${n}`,
  `n-btn-${t}`,
  `n-btn-${e}`,
  {
    hover: r,
    active: a,
    outline: s,
    loading: c,
    [u]: u
  }
]), I = {
  size: o.inArray(["mini", "small", "middle", "large"], "middle"),
  type: o.inArray(["default", "primary", "success", "warning", "danger", "link", "text", "text-plus", "none"], "default"),
  shape: o.inArray(["radius", "circle"], "radius"),
  // 线框模式
  outline: o.boolean(),
  // hover样式
  hover: o.boolean(),
  // active样式
  active: o.boolean(),
  // 禁用
  disabled: o.boolean(),
  // 加载中
  loading: o.boolean(),
  // 前置Icon
  icon: o.string(),
  // 后置Icon
  suffixIcon: o.string()
}, $ = {
  click: () => !0
}, L = (t, n) => ({
  handleClick: (r) => {
    n("click", r);
  }
}), O = ["disabled"], z = { key: 0 }, V = /* @__PURE__ */ Object.assign({
  name: "NButton"
}, {
  __name: "button",
  props: I,
  emits: $,
  setup(t, { emit: n }) {
    const e = t, r = S(e), { handleClick: a } = L(e, n);
    return (s, u) => (d(), b(
      g,
      null,
      [
        _("button", {
          class: A(["n-btn", f(r)]),
          disabled: s.disabled,
          onClick: u[0] || (u[0] = (...c) => f(a) && f(a)(...c))
        }, [
          l(` <i class="n-btn-loading-svg inherit flex-center" v-if="loading">\r
        <n-loading-icon size="16"></n-loading-icon>\r
      </i>\r
      <n-icon class="n-btn-i n-btn-i-prefix" v-if="icon" :type="icon"></n-icon> `),
          s.$slots.default ? (d(), b("span", z, [
            h(s.$slots, "default")
          ])) : l("v-if", !0),
          l(' <n-icon class="n-btn-i n-btn-i-suffix" v-if="suffixIcon" :type="suffixIcon"></n-icon> ')
        ], 10, O),
        l(` <button :class="classes">\r
    <slot />\r
  </button> `)
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
}), w = [V], U = {
  install(t, n) {
    w.forEach((e) => {
      k(t, e);
    });
  }
};
export {
  U as default
};
