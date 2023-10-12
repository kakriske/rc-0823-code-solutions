# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && and || are logical operators used for boolean values. They are used for conditional statements and short-circuiting.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Evaluated from left to right. With && operator as soon as a false is found the evaluation stops. When || is used, if the left operand is true the right operand will not be evaluated and it is true
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The || operator can assign a defualt value to any falsey value, but ?? assigns a default value only to null and undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: is a conditional operator. Assign a value to a variable based on a condition. Ternary is good for quick one line conditional assignments.

- What is the `?.` (optional chaining) operator? When would you use it?
  Optional chaining will access on objects property and give undefined instead of an error if object accessed is undefined or null.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Spread can be used to copy arrays and objects. You can add or take away from arrays and objects too.
- What data types can be spread into an array? Into an object?
  You can spread an array, object, string into an array. The same for object.

- How does spread syntax differ from rest syntax?
  Spread is used to 'spread'spread properties of an existing object or array into a new object or array. Rest syntax is for collecting elements into a single variable

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
