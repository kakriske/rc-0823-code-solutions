/* exported toObject */
function toObject(keyValuePair) {
  const obj2 = {};
  obj2[keyValuePair[0]] = keyValuePair[1];
  return obj2;
}
