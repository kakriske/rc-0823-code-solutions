/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(4 * Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    const circleDescription = super.describe();
    return `${circleDescription} The radius of this circle is ${this.radius}`;
  }
}
const circle = new Circle(10);
console.log(circle.describe());
