import { inArray } from '../array/inArray.mjs';
import { unobservable } from './unobservable.mjs';

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

export { prop };
//# sourceMappingURL=prop.mjs.map
