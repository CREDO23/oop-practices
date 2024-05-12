"use strict";
/**
 * ------------------------------------------
 * ------- ANIMAL KINGDOM SIMULATION --------
 * ------------------------------------------
 *  Objective: Apply all four OOP principles
 *             to simulate an animal kingdom.
 * ------------------------------------------
 */
// [Abstraction]
/**
 * In our kingdom, each animal belongs to a different family.
 *
 * That means, each animal has to be created in a specific family,
 * which implies that we cannot instantiate the Animal class, hence,
 * it's abstract.
 */
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eact() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    getName() {
        return this.name;
    }
    // [Encapsulation]
    setName(name) {
        if (name.trim().length) {
            this.name = name;
        }
        else {
            console.log("Invalid name");
        }
    }
    getAge() {
        return this.name;
    }
    setAge(age) {
        if (age > 0) {
            this.age = age;
        }
        else {
            console.log("Invalid age");
        }
    }
}
/**
 * Now, we can inherit the Animal class and implement a specific family of Animal.
 *
 * E,g : Bird -> Flyable; Dog -> Runnable, Fish -> Swimable
 */
// [Inheritence]
class Bird extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
    // [Polymorphism]
    makeSound() {
        console.log(`${this.name} is tweeting`);
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    run() {
        console.log(`${this.name} is running`);
    }
    // [Polymorphism]
    makeSound() {
        console.log(`${this.name} is barking`);
    }
}
class Fish extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    swim() {
        console.log(`${this.name} is running`);
    }
    // [Polymorphism]
    makeSound() {
        console.log(`${this.name} is whistling`);
    }
}
// Demonstration
const bird = new Bird("Bird", 2);
const dog = new Dog("Dog", 6);
const fish = new Fish("Fish", 3);
bird.sleep();
bird.eact();
bird.fly();
bird.makeSound();
console.log(`\n`);
dog.sleep();
dog.eact();
dog.run();
dog.makeSound();
console.log(`\n`);
dog.sleep();
fish.eact();
fish.swim();
fish.makeSound();
