/* exported numVowels */
function numVowels(string) {
  let vowel = 0;
  let char = '';
  for (let i = 0; i < string.length; i++) {
    char = string[i].toLowerCase();
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      vowel++;
    }
  }
  return vowel;
}
