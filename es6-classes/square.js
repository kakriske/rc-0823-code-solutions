/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, 4 * width);
    this.width = width;
  }

  describe() {
    const shapeDescription = super.describe();
    return `${shapeDescription} The width of this square is ${this.width}.`;
  }
}

const square = new Square(5);
console.log(square.describe());
