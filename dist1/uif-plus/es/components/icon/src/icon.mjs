import { prop } from '@uif-plus/utils';

const iconEmits = {
  click: (event) => event
};
const iconProps = {
  // 图标类型
  type: prop.string(),
  // 自定义class
  custom: prop.string(),
  // 场景，可选值 default,primary, dark, gray
  scene: prop.inArray(["default", "primary", "gray", "light", "dark"], "default", true),
  // 大小，可选值 12, 16, 20, 24
  size: prop.stringNumber(),
  // 经过样式
  hover: prop.boolean(),
  // 激活样式
  active: prop.boolean(),
  // 禁用样式
  disabled: prop.boolean(),
  // 颜色
  color: prop.string()
};

export { iconEmits, iconProps };
//# sourceMappingURL=icon.mjs.map
