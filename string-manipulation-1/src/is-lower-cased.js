/* exported isLowerCased */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== '-') {
      return false;
    }
  }
  return true;
}
