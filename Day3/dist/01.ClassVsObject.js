// 01 Class Vs Object
// interface Employee {
// 	name: string;
// 	baseSalary: number;
// }
// const employee: Employee = {
// 	name: "Monir",
// 	baseSalary: 22000,
// };
// const employee1: Employee = {
// 	name: "Hossen",
// 	baseSalary: 22000,
// };
class Employee {
    // name : string = "Monir";   //!Instant of these use constructor
    // baseSalary: number = 22000;
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("Monir", 22000);
const employee1 = new Employee("Hossen", 22000);
console.log(employee, employee1);
export {};
