function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log('typeof prototype:', typeof prototype);

const anExampleConstructor = new ExampleConstructor();
console.log(anExampleConstructor);
console.log(anExampleConstructor instanceof ExampleConstructor);
const secondConst = anExampleConstructor instanceof ExampleConstructor;
console.log(secondConst);
