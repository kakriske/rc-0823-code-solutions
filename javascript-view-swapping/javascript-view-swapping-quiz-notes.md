# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  It is the object that fired the event. Like a button.

- What is the affect of setting an element to `display: none`?
  The element becomes invisible and the layout will go away.

- What does the `element.matches()` method take as an argument and what does it return?
  It takes a string matching a css selector and returns a boolean.

- How can you retrieve the value of an element's attribute?
  With the getAttribute() method.

- At what steps of the solution would it be helpful to log things to the console?
  Anytime you want to check progress, check logic, or find a bug.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  Event delegation will attach an eventListner to a common ancestor. Without event delegation you would have to use a new addEventListener() for each element. But, we already have a query for tabs so we wouldn't need to change anything.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  I think one would attach a click eventListener to each tab. When a tab is clicked it would become active while the rest would have active removed.

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
