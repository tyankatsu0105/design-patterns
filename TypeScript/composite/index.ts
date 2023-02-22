export {};

interface Employee {
  getName(): string;
  getSalary(): number;
  setSalary(salary: number): void;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName() {
    return this.name;
  }

  setSalary(salary: ConstructorParameters<typeof Developer>[1]) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  develop() {
    console.log("Developing");
  }
}

class Designer {
  constructor(private name: string, private salary: number) {}

  getName() {
    return this.name;
  }

  setSalary(salary: ConstructorParameters<typeof Developer>[1]) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  design() {
    console.log("Designing");
  }
}

class Organization {
  constructor(private employees: Employee[] = []) {}

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getNetSalaries() {
    const result = this.employees.reduce((acc, employee) => {
      return acc + employee.getSalary();
    }, 0);

    return result;
  }
}

const john = new Developer("John Doe", 12000);
const jane = new Designer("Jane", 10000);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net salaries: ", organization.getNetSalaries());
