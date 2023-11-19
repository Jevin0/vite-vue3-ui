import { isLength } from './isLength.mjs';

function isLikeArray(value) {
  return value && typeof value !== "string" && typeof value !== "function" && isLength(value.length);
}

export { isLikeArray };
//# sourceMappingURL=isLikeArray.mjs.map
