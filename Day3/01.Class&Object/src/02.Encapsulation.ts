//* Encapsulation: Protect a state and change it through methods.

//* access Modifier
//? public
//? readonly can only read can't write it
//? private  it is totally private it can't be read and writeable
//? protected

//? readonly

class Employee {
	constructor(
		public name: string,
		private _baseSalary: number,
	) {}

	get baseSalary(): number {
		// this is to read
		return this._baseSalary;
	}

	set baseSalary(newSalary: number) {
		// this is to set new salary
		if (newSalary < 0) {
			throw new Error("Salary can't be negative value");
		} else {
			this._baseSalary = newSalary;
		}
	}
}

const employee = new Employee("Monir", 240000);
const employee1 = new Employee("Hossen", 220000);

console.log(employee, employee1);

employee.baseSalary = -5000;

console.log(employee.baseSalary); // this is to read
console.log(employee.baseSalary); // this is to set new salary
