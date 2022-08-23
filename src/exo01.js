// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
  if (x === undefined || x === null) {
    return true;
  }

  return typeof x !== "object" && typeof x !== "function";
}
