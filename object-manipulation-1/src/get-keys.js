/* exported getKeys */
function getKeys(object) {
  const key2 = [];
  for (const key in object) {
    key2.push(key);
  }

  return key2;
}
