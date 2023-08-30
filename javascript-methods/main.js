const num1 = 11;
const num2 = 29;
const num3 = 3;
Math.max(num1, num2, num3);
const result = Math.max(11, 29, 3);
console.log(result);

const heroes = ['batman', 'ratman', 'duffman', 'superman'];
const randomNumber = Math.random();
console.log(randomNumber);
const hlength = heroes.length;
console.log(hlength);
const randomNumber1 = hlength * randomNumber;
console.log(randomNumber1);
const randomIndex = Math.floor(randomNumber1);
console.log(randomIndex);
const randomHero = heroes[randomIndex];
console.log(randomHero);

const library = [
  { 'Cormac McCarthy': 'Child of God' },
  { 'Jurp Man': 'Flunker' },
  { 'Burf Ver': 'Loud' },
];
const lastBook = library.pop();
console.log(lastBook);
const firstBook = library.shift();
console.log(firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);

library.shift(css);

library.splice(1, 1);

console.log(library);

const fullName = 'Kyle Kriske';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
