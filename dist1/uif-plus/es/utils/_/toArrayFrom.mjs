import { isLikeArray } from './isLikeArray.mjs';

function toArrayFrom(array, index) {
  const args = [];
  if (isLikeArray(array)) {
    for (let i = index; i < array.length; i++) {
      args.push(array[i]);
    }
  }
  return args;
}

export { toArrayFrom };
//# sourceMappingURL=toArrayFrom.mjs.map
