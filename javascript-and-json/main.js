const books = [
  {
    isbn: '978-553-21311-0',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '978-1-234567-89-0',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    isbn: '978-0-0618-64961-9',
    title: '1984',
    author: 'George Orwell',
  },
];
console.log('books', books);
console.log('type', typeof books);

const stringBooks = JSON.stringify(books);
console.log('logstringBooks', stringBooks);
console.log('type', typeof stringBooks);

const studentString = '{"id":1234, "name":"Karl"}';
console.log('logstudentString', studentString);
console.log('type', typeof studentString);

const studentObject = JSON.parse(studentString);

console.log('logstudentObject', studentObject);
console.log('type', typeof studentObject);
