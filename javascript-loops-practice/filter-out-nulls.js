/* exported filterOutNulls */
function filterOutNulls(values) {
  const array2 = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      array2.push(values[i]);
    }
  }
  return array2;
}
