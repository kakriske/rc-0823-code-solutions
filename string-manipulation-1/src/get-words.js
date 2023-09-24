/* exported getWords */
function getWords(string) {
  const wArray = string.split(' ');
  if (wArray[0] === '') {
    return [];
  }
  return wArray;
}
