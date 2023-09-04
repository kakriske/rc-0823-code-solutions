/* exported reverseWord */
function reverseWord(word) {
  let reverse = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverse = reverse + word[i];
  }
  return reverse;
}
