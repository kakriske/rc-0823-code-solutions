# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const name = (parameter) => {
  codeblock
  }

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  There is an implicit return.

- When using _concise body syntax_, how do you return an object literal?
  wrap the object literal in parantheses so it isnt treated as code block

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42 is the arrow function

  - How many arguments does the arrow function take?
    It isn't taking any arguments.

  - What value does it return?
    It returns 42.

  - How many arguments are passed to the function `foo`?
    one argument

  - What type of argument is passed to the function `foo`?
    an arrow function. () => 42.

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => {console.log(`4y = ${4*y}`)}

  - How many arguments does the arrow function take?
    takes y as the argument, so 1.

  - What value does it return?
    the console.log is executed

  - How many arguments are passed to the function `bar`?
    I think 1, the arrow function (y) => {console.log(`4y=${4*y}`)}

  - What type of argument is passed to the function `bar`?
    Its a function

  - When does the arrow function's code get executed?
    when bar function is invoked

- How does the value of `this` differ between standard functions and arrow functions?
  Standard functions have this based on how they are called, but this for arrow functions is captured from their surrounding 'lexical context'.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
