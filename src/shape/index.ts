/**
 * Since this class as some methods that cannot be implemented 
 * directly (they need specific type of shape) (e.g: calculating 
 * the area). This class should not be instantiated directly, thus, abstract. 
 * 
 * We will have the possiblity to instanciate a shape after providing more 
 * information about the type of shape . 
 * 
 * Eg : A Circle, Rectangle, etc  .
 * 
 * 
 * Each of these shapes has its way of determining the area, so it should 
 * implement the calculateArea method.
 */

abstract class Shape {

    constructor(protected area: number){}

    abstract calculateArea() : void

    /**
     * Since this method does not need specific implementation for each type 
     * of shape, all subshapes will inherit this implementation.
     */
    displayArea(){
        console.log(this.area);
    }
}



class Circle extends Shape {

    constructor(public radius: number) {
        super(0)
    }

    // Polymorphism
    calculateArea(): void {
        this.area = Math.PI * this.radius * this.radius;
    }
}


class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super(0)
    }

    // Polymorphism
    calculateArea(): void {
        this.area = this.width * this.height
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super(0)
    }

    // Polymorphism
    calculateArea(): void {
        this.area = this.side * this.side
    }
}



const circle = new Circle(34)
const rectangle = new Rectangle(120,40)
const square = new Square(100)

const shapes = [circle, square, rectangle]

shapes.forEach(shape => {
    shape.calculateArea()
    shape.displayArea()
})