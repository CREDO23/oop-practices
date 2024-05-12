"use strict";
/**
 * ------------------------------------------
 * ------- SHAPE HIEARCHY -------------------
 * ------------------------------------------
 *  Objective: Use abstraction, inheritance,
 *             and polymorphism to create a
 *             shape hierarchy.
 * ------------------------------------------
 */
/**
 * Since the Shape class as a method that cannot be implemented
 * directly (they need specific type of shape) (e.g: calculating
 * the area). This class should not be instantiated directly, thus, abstract.
 *
 * We will have the possiblity to instanciate a shape after providing more
 * information about the type of the shape .
 *
 * Eg : A Circle, Rectangle, etc  .
 *
 *
 * Each of these shapes has its own way of determining the area, so it should
 * implement the calculateArea method.
 */
class Shape {
    constructor(area) {
        this.area = area;
    }
    /**
     * Since this method does not need specific implementation for each type
     * of shape, all subshapes will inherit this implementation.
     */
    displayArea() {
        console.log(this.area);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super(0);
        this.radius = radius;
    }
    // Polymorphism
    calculateArea() {
        this.area = Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super(0);
        this.width = width;
        this.height = height;
    }
    // Polymorphism
    calculateArea() {
        this.area = this.width * this.height;
    }
}
class Square extends Shape {
    constructor(side) {
        super(0);
        this.side = side;
    }
    // Polymorphism
    calculateArea() {
        this.area = this.side * this.side;
    }
}
// Demonstration
const circle = new Circle(34);
const rectangle = new Rectangle(120, 40);
const square = new Square(100);
const shapes = [circle, square, rectangle];
shapes.forEach((shape) => {
    shape.calculateArea();
    shape.displayArea();
    console.log(`\n`);
});
