import { isArrayLike } from '../array/isArrayLike.mjs';

function isObjectLike(value) {
  return typeof value === "object" && value !== null && !isArrayLike(value);
}

export { isObjectLike };
//# sourceMappingURL=isObjectLike.mjs.map
