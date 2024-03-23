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

abstract class Animal {
  constructor(protected name: string, protected age: number) {}

  eact() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  abstract makeSound(): void;

  getName() {
    return this.name;
  }

  // [Encapsulation]

  setName(name: string) {
    if (name.trim().length) {
      this.name = name;
    } else {
      console.log("Invalid name");
    }
  }

  getAge() {
    return this.name;
  }

  setAge(age: number) {
    if (age > 0) {
      this.age = age;
    } else {
      console.log("Invalid age");
    }
  }
}

/**
 * Here, we define interfaces for each family and add some specific behaviors.
 */

// [Abstraction]

interface Flyable extends Animal {
  fly(): void;
}

interface Swimable extends Animal {
  swim(): void;
}

interface Runnable extends Animal {
  run(): void;
}

/**
 * Now, we can inherit the Animal class and implement a specific family of Animal.
 *
 * E,g : Bird -> Flyable; Dog -> Runnable, Fish -> Swimable
 */

// [Inheritence]

class Bird extends Animal implements Flyable {
  constructor(name: string, age: number) {
    super(name, age);
  }

  fly(): void {
    console.log(`${this.name} is flying`);
  }

  // [Polymorphism]

  makeSound(): void {
    console.log(`${this.name} is tweeting`);
  }
}

class Dog extends Animal implements Runnable {
  constructor(name: string, age: number) {
    super(name, age);
  }

  run(): void {
    console.log(`${this.name} is running`);
  }

  // [Polymorphism]

  makeSound(): void {
    console.log(`${this.name} is barking`);
  }
}

class Fish extends Animal implements Swimable {
  constructor(name: string, age: number) {
    super(name, age);
  }

  swim(): void {
    console.log(`${this.name} is running`);
  }

  // [Polymorphism]

  makeSound(): void {
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
