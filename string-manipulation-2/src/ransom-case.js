/* exported ransomCase */
function ransomCase(string) {
  let rans = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      rans = rans + string[i].toUpperCase();
    } else {
      rans = rans + string[i].toLowerCase();
    }
  }
  return rans;
}
