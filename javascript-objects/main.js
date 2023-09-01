const student = {
  firstName: 'Kyle',
  lastName: ' Kriske',
  age: 39,
};
const fullName = student.firstName + student.lastName;
console.log(fullName);
student.livesInIrvine = false;
student.previousOccupation = 'valet';
console.log(student.livesInIrvine);
console.log(student.previousOccupation);
console.log(student);
const vehicle = {
  make: 'Ford',
  model: 'pinto',
  year: '1980',
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log(vehicle);
const pet = {
  name: 'Kiki',
  type: 'dog',
};
delete pet.name;
delete pet.type;
console.log(pet);
