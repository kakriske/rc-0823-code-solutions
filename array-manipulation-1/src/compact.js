/* exported compact */
function compact(array) {
  const com1 = [];
  for (let i = 0; i < array.length; i++) {
    const arr1 = array[i];
    if (
      arr1 !== false &&
      arr1 !== 0 &&
      !Number.isNaN(arr1) &&
      arr1 !== undefined &&
      arr1 !== null &&
      arr1 !== ''
    ) {
      com1.push(arr1);
    }
  }
  return com1;
}
