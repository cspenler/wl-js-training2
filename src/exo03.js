// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let result = {};
  /*
  var step;
  for (step = 0; step < Object.keys(obj).length; step++) {
    result[Object.entries(obj)[step][1]] = Object.entries(obj)[step][0];
  }
*/
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      return [v, k];
    })
  );
  /*
  Object.entries(obj).forEach((entry) => {
    result[entry[1]] = entry[0];
  });
  return result;
  */
}
