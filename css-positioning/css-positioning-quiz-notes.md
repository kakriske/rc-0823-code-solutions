# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  Static is the default position

- How does setting `position: relative` on an element affect document flow?
  Relative position adjusts the objects position relative to its static position. Other elements are laid out as if it were in its static place.

- How does setting `position: relative` on an element affect where it appears on the page?
  It doesn't affect it, the same as static. One needs to adjust it with top, down, left, right.

- How does setting `position: absolute` on an element affect document flow?
  The element becomes removed from the document flow.

- How does setting `position: absolute` on an element affect where it appears on the page?
  It becomes positioned to its nearest ancestor, or the positioned relative to the original containing block.

- How do you constrain an absolutely positioned element to a containing block?
  Need to position the containing block.

- What are the four box offset properties?
  top, right, bottom, left

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
