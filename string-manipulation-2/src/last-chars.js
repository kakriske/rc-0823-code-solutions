/* exported lastChars */
function lastChars(length, string) {
  let result = '';
  const place = Math.max(0, string.length - length);
  for (let i = place; i < string.length; i++) {
    result += string.charAt(i);
  }
  return result;
}
