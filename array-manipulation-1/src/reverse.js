/* exported reverse */
function reverse(array) {
  const rev1 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    rev1.push(array[i]);
  }
  return rev1;
}
