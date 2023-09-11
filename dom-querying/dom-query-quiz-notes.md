# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Check the output. This can help with checking for errors.

- What is a "model"?
  A model is used to represent structure and the behavior of objects.

- Which "document" is being referred to in the phrase Document Object Model?
  The html document

- What is the word "object" referring to in the phrase Document Object Model?
  All page content is represented as objects.

- What is a DOM Tree?
  The DOM tree is how html tags are represented. The html is the root. Head and body are its children, element nodes.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementById and querySelector.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll can return a node list.

- Why might you want to assign the return value of a DOM query to a variable?
  Accessability and convenience.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  You need the html code read before you can call upon it.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes css selector and if an element matches the selector it will return that as a javascript object.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes a selector and returns a nodelist

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
