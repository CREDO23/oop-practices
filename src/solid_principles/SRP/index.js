"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ---------------------------------------------
 * ------- Employees MANAGMENT SYSTEM ----------
 * ---------------------------------------------
 * Objective: Implement an employees management
 *            system using the SRP.
 * ---------------------------------------------
 */
const storage = [];
/**
 * Here, the Employee class has a unique responsibility: representing an employee in our system.
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
}
/**
 * We create the ReportFormater that is responsible for generating a report.
 */
class ReportGenerator {
    generateRepportFor(employee) {
        return `
        Employee Name: ${employee.name}
        Employee Position: ${employee.position}
        Employee Salary: ${employee.salary} $
        `;
    }
}
/**
 * We create the Storage class that handles the storage operations for our system.
 */
class Storage {
    constructor(storage) {
        this.storage = storage;
        this.storage = storage;
    }
    save(employee) {
        this.storage.push(employee);
    }
    delete(employee) {
        this.storage.splice(storage.indexOf(employee), 1);
    }
}
/**
 * As you can notice, each of those class has only one reason to change.
 */
const employee1 = new Employee("John", "Developer", 1500);
const reportGenerator = new ReportGenerator();
const employeesStorage = new Storage(storage);
const repport1 = reportGenerator.generateRepportFor(employee1);
console.log(repport1);
employeesStorage.save(employee1);
console.log(employeesStorage);
employeesStorage.delete(employee1);
console.log(employeesStorage);
