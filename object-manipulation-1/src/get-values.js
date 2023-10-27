/* exported getValues */
function getValues(object) {
  const val3 = [];
  for (const key in object) {
    val3.push(object[key]);
  }
  return val3;
}
