export {};

/**
 * ---------------------------------------------
 * ------- Employees MANAGMENT SYSTEM ----------
 * ---------------------------------------------
 * Objective: Implement an employees management
 *            system using the SRP.
 * ---------------------------------------------
 */

const storage: Employee[] = [];

/**
 * Here, the Employee class has a unique responsibility: representing an employee in our system.
 */

class Employee {
  constructor(
    public name: string,
    public position: string,
    public salary: number
  ) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }
}

/**
 * We create the ReportFormater that is responsible for generating a report.
 */
class ReportGenerator {
  generateRepportFor(employee: Employee) {
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
  constructor(private storage: Employee[]) {
    this.storage = storage;
  }

  public save(employee: Employee) {
    this.storage.push(employee);
  }

  public delete(employee: Employee) {
    this.storage.splice(storage.indexOf(employee), 1);
  }
}

/**
 * As you can notice, each of those class has only one reason to change.
 */

const employee1 = new Employee("John", "Developer", 1500);

const reportGenerator = new ReportGenerator()

const employeesStorage = new Storage(storage);


const repport1 = reportGenerator.generateRepportFor(employee1)

console.log(repport1)


employeesStorage.save(employee1)


console.log(employeesStorage)


employeesStorage.delete(employee1)


console.log(employeesStorage)