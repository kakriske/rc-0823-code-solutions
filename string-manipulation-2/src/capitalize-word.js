/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const firstChar = word.charAt(0).toUpperCase();
  const restChar = word.slice(1).toLowerCase();
  const newWord = firstChar + restChar;
  return newWord;
}
