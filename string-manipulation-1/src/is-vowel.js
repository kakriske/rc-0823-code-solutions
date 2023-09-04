/* exported isVowel */
function isVowel(char) {
  const vowel = char.toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(vowel);
}
