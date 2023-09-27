/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area of this shape is ${this.area} and the perimeter is ${this.perimeter}.`;
  }
}
const rectangle = new Shape(2, 6);
console.log(rectangle.describe());
