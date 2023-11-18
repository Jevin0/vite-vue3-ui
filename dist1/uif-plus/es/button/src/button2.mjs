import { prop } from '@uif-plus/utils';

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

export { buttonEmits, buttonProps };
//# sourceMappingURL=button2.mjs.map
