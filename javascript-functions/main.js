function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log(convertMinutesToSecondsResult);

function greet(name) {
  const name1 = 'Hey, ' + name;
  return name1;
}
const greetName = greet('Beavis');
console.log(greetName);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const getAreaResult = getArea(17, 42);
console.log(getAreaResult);

function getFullName(firstName, lastName) {
  const fullName = firstName + '' + lastName;
  return fullName;
}
const tj = getFullName('TJ', ' Kinion');
console.log(tj);

function getFirstName(person) {
  return person.firstName;
}
const person = { firstName: 'Lelouche', lastName: 'Lamperouge' };
const firstName = getFirstName(person);
console.log(firstName);

function getLastArray(array) {
  return array[array.length - 1];
}
const array = ['propane', 'and', 'propane', 'accessories'];
const lastElement = getLastArray(array);
console.log(lastElement);

function conversionToSeconds(minute) {
  const seconds = minute * 60;
  return seconds;
}
console.log(conversionToSeconds(5));
