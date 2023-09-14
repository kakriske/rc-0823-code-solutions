# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  NO, it creates a new HTML element in memory. One would have to append it or perform some other steps to get into an existing element.

- How do you add an element as a child to another element?
  Use the apppendChild method.

- What do you pass as the arguments to the `element.setAttribute()` method?
  Pass the attribute and the name you want for the attribute. Two strings.

- What steps do you need to take in order to insert a new element into the page?
  Create the new element and then append the element.
- What is the `textContent` property of an element object for?
  It is used to set or get the text content of an element.

- Name two ways to set the `class` attribute of a DOM element.
  One could use the setAttribute() method. Also, element.className="newClassName"

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  You can break down your codebase into smaller parts. This will allow one to find bugs faster and better organization.

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
