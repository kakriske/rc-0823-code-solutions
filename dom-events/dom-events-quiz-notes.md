# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Check our progress.

- What is the purpose of events and event handling?
  Events and event handling let users interact with the webpage.

- Are all possible parameters required to use a JavaScript method or function?
  No they are not, but it might depend on the function?

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener().

- What is a callback function?
  A callback function is a function that is used as a parameter for another function.

- What object is passed into an event listener callback when the event fires?
  the event object?

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  This the element that triggers the event?

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

  the first one will happen when the click event occurs.
  In the other one you are calling the function immediately.

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
