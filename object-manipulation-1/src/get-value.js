/* exported getValue */
function getValue(object, key) {
  for (const key1 in object) {
    if (key1 === key) {
      return object[key1];
    }
  }
}
