/* exported filterOutStrings */
function filterOutStrings(values) {
  const arr5 = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      arr5.push(values[i]);
    }
  }
  return arr5;
}
