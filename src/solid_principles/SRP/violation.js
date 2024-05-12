"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ---------------------------------------------
 * ------- Employees MANAGMENT SYSTEM ----------
 * ---------------------------------------------
 * Objective: Implement an employees management
 *            system that violates the SRP.
 * ---------------------------------------------
 */
const storage = [];
/**
 * Here is an Employee class that represents an employee in our system.
 * As you can see below, this entity has more that one responsability.
 * It can generate a report, save and delete data in the storage.
 * This breaks the SRP
 */
/**
 * If we decide to change how we save data, we will need to change this class.
 * This class will be modified if we want to change the format of the report.
 *
 * Here, two different reasons can lead to changing this class.
 */
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    generateReport() {
        return `
        Employee Name: ${this.name}
        Employee Position: ${this.position}
        Employee Salary: ${this.salary} $
        `;
    }
    saveData() {
        storage.push(this);
    }
    deleteData() {
        storage.splice(storage.indexOf(this), 1);
    }
}
const employee1 = new Employee("John", "Developer", 1500);
const report1 = employee1.generateReport();
console.log(report1);
employee1.saveData();
console.log(storage);
employee1.deleteData();
console.log(storage);
/**
 * In index.ts file, we will see how to refactor the same system using the RSP
 */
